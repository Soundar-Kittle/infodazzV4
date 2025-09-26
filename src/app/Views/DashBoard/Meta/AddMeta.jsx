"use client";

import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CloudUpload, PlusIcon, TrashIcon } from "lucide-react";

import CustomInput from "@/components/ui/FormInput/CustomInput";
import { CustomDropZone, CustomToggle } from "@/components/ui/FormInput/Inputs";
import MultiSelect from "@/components/ui/FormInput/MultiSelectNew";
import { Button } from "@/components/ui/button";
import DividerWithText from "@/components/ui/FormInput/DividerWithText";
import { getSiteMap } from "@/Services/SiteMap/ApiSiteMap";
import { addMeta, editMeta } from "@/Services/Meta/ApiMeta";

const shiftUploadedFileIndices = (indexToRemove, uploadedFiles) => {
  const updated = {};
  for (const [key, value] of Object.entries(uploadedFiles)) {
    const match = key.match(/^metas\.(\d+)\.image$/);
    if (match) {
      const oldIdx = parseInt(match[1]);
      if (oldIdx < indexToRemove) {
        updated[key] = value;
      } else if (oldIdx > indexToRemove) {
        updated[`metas.${oldIdx - 1}.image`] = value;
      }
    }
  }
  return updated;
};

const AddMeta = ({
  type = "add",
  editData,
  onClose,
  parent = false,
  onSubmit: parentSubmit = null,
}) => {
  const queryClient = useQueryClient();

  const schema = yup.object().shape({
    reference_type: parent
      ? yup.string().nullable()
      : yup.string().required("Reference type is required"),
    reference_id: parent
      ? yup.string().nullable()
      : yup.string().required("Reference ID is required"),
    metas: yup
      .array()
      .of(
        yup.object().shape({
          attribute_scope: yup.string().required("Scope is required"),
          attribute_type: yup.string().required("Type is required"),
          attribute_key: yup.string().required("Key is required"),
          is_content: yup.boolean().default(true),
          content: yup.string().when("is_content", {
            is: true,
            then: () => yup.string().required("Content is required"),
            otherwise: () => yup.string().nullable(),
          }),
          image: yup.mixed().when("is_content", {
            is: false,
            then: () => yup.array().min(1, "Image is required"),
            otherwise: () => yup.mixed().nullable(),
          }),
        })
      )
      .min(1, "At least one meta tag is required")
      .test(
        "no-duplicate-metas",
        "Duplicate meta tags with same scope, type and key are not allowed.",
        function (metas = []) {
          const seen = new Set();
          for (let i = 0; i < metas.length; i++) {
            const { attribute_scope, attribute_type, attribute_key } = metas[i];
            const combo =
              `${attribute_scope}-${attribute_type}-${attribute_key}`.toLowerCase();
            if (seen.has(combo)) {
              return this.createError({
                path: `metas.${i}.attribute_key`,
                message: "Already added meta key",
              });
            }
            seen.add(combo);
          }
          return true;
        }
      ),
  });

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      reference_type:
        type === "edit" && editData ? editData.reference_type : "",
      reference_id: type === "edit" && editData ? editData.reference_id : "",
      metas:
        type === "edit" && editData && editData.metas
          ? editData.metas.map((meta) => ({
              ...meta,
              is_content: meta.is_content !== false, // Default to true unless explicitly false
              image: meta.image ? [meta.image] : [],
            }))
          : [
              {
                attribute_scope: "general",
                attribute_type: "name",
                attribute_key: "",
                content: "",
                is_content: true,
                image: [],
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "metas",
  });

  // Watch for values to react to changes
  const refType = useWatch({ control, name: "reference_type" });
  const metas = useWatch({ control, name: "metas" });

  // For file management
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Initialize uploadedFiles from editData
  useEffect(() => {
    if (type === "edit" && editData && editData.metas) {
      const initialFiles = {};
      editData.metas.forEach((meta, index) => {
        if (meta.image) {
          initialFiles[`metas.${index}.image`] = [meta.image];
        }
      });
      setUploadedFiles(initialFiles);
    }
  }, [type, editData]);

  // Update form values when uploadedFiles changes
  useEffect(() => {
    Object.entries(uploadedFiles).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [uploadedFiles, setValue]);

  const { data: siteMapData = [] } = useQuery({
    queryKey: ["sitemap"],
    queryFn: () => getSiteMap(),
    enabled: !parent,
  });

  console.log(siteMapData);

  // Prepare reference options based on selected reference type
  const referenceOptions = (siteMapData?.rows || []).map((p) => ({
    label: p.label,
    value: p.url,
  }));

  // Update attribute_type based on attribute_scope
  useEffect(() => {
    metas?.forEach((meta, index) => {
      const expectedType = meta?.attribute_scope === "og" ? "property" : "name";
      if (meta?.attribute_type !== expectedType) {
        setValue(`metas.${index}.attribute_type`, expectedType);
      }
    });
  }, [metas, setValue]);

  // API mutations
  const addMutation = useMutation({
    mutationFn: addMeta,
    onSuccess: () => {
      queryClient.invalidateQueries("metas");
      reset();
      onClose?.();
    },
  });

  const editMutation = useMutation({
    mutationFn: (data) => editMeta(data, editData.id),
    onSuccess: () => {
      queryClient.invalidateQueries("metas");
      reset();
      onClose?.();
    },
  });

  const submitHandler = (data) => {
    const formData = new FormData();

    // Add reference data ONLY if not parent
    if (!parent) {
      formData.append("folder", "meta");
      formData.append("reference_type", data.reference_type);
      formData.append("reference_id", data.reference_id);
    }

    // Process meta entries
    data.metas.forEach((meta, index) => {
      formData.append(`metas[${index}][attribute_scope]`, meta.attribute_scope);
      formData.append(`metas[${index}][attribute_type]`, meta.attribute_type);
      formData.append(`metas[${index}][attribute_key]`, meta.attribute_key);
      formData.append(`metas[${index}][is_content]`, meta.is_content);

      if (meta.id) {
        formData.append(`metas[${index}][id]`, meta.id);
      }

      if (meta.is_content) {
        formData.append(`metas[${index}][content]`, meta.content || "");
      } else if (meta.image && meta.image[0]) {
        // Handle image file upload
        const imageFile = meta.image[0];
        // If the image is a File object, append it directly
        if (imageFile instanceof File) {
          formData.append(`metas[${index}][image]`, imageFile);
        } else {
          // If the image is a URL (from edit data), include it as is
          formData.append(`metas[${index}][image]`, imageFile);
        }
      }
    });

    // Submit to parent or API
    if (parent && parentSubmit) {
      parentSubmit(formData);
      return;
    }

    if (type === "add") {
      addMutation.mutate(formData);
    } else {
      formData.append("id", editData.id);
      editMutation.mutate(formData);
    }
  };

  return (
    <div className="bg-white pt-0 w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center border-b p-4 bg-primary rounded-t-md">
        <h2 className="text-xl font-semibold text-primary-foreground">
          {type === "add" ? "Add" : "Edit"} Meta Tags
        </h2>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="p-6 space-y-6">
        {/* Reference Selection - Only show if not in parent mode */}
        {!parent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="reference_type"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  {...field}
                  label="Reference Type"
                  options={[{ label: "Static Page", value: "page" }]}
                  errors={errors}
                  required
                />
              )}
            />

            <Controller
              name="reference_id"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  {...field}
                  label="Reference ID"
                  options={referenceOptions}
                  isSearchable
                  errors={errors}
                  required
                  placeholder="Select reference"
                  disabled={!refType}
                />
              )}
            />
          </div>
        )}

        <DividerWithText
          text="Meta Tags"
          className="col-span-full"
          showLines
          textClassName="text-primary"
          position="start"
          lineColor="border-primary"
        />

        {/* Dynamic Meta Tags Fields */}
        {fields.map((field, index) => {
          const isContent = watch(`metas.${index}.is_content`);

          return (
            <div key={field.id} className="border p-4 rounded-md space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Meta Tag #{index + 1}</h3>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      remove(index);
                      setUploadedFiles((prev) =>
                        shiftUploadedFileIndices(index, prev)
                      );
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <TrashIcon size={16} />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Controller
                  name={`metas.${index}.attribute_scope`}
                  control={control}
                  render={({ field }) => (
                    <MultiSelect
                      {...field}
                      label="Scope"
                      options={[
                        { label: "General", value: "general" },
                        { label: "Open Graph", value: "og" },
                        { label: "Twitter", value: "twitter" },
                      ]}
                      isMulti={false}
                      errors={errors?.metas?.[index]}
                      required
                    />
                  )}
                />

                <Controller
                  name={`metas.${index}.attribute_type`}
                  control={control}
                  render={({ field }) => (
                    <MultiSelect
                      {...field}
                      label="Type"
                      options={[
                        { label: "name", value: "name" },
                        { label: "property", value: "property" },
                        { label: "http-equiv", value: "http-equiv" },
                      ]}
                      isMulti={false}
                      disabled
                      errors={errors?.metas?.[index]}
                    />
                  )}
                />

                <Controller
                  name={`metas.${index}.attribute_key`}
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      label="Meta Key"
                      placeholder="e.g. title"
                      // errors={errors?.metas?.[index]}
                      errors={errors}
                      required
                    />
                  )}
                />

                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Content Type
                  </label>
                  <CustomToggle
                    options={[
                      {
                        name: `metas.${index}.is_content`,
                        label: "Text Content",
                      },
                    ]}
                    control={control}
                    errors={errors}
                    showLabel={false}
                  />
                </div>
              </div>

              {isContent ? (
                <Controller
                  name={`metas.${index}.content`}
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      label="Content"
                      placeholder="Meta content value"
                      errors={errors}
                      required={isContent}
                    />
                  )}
                />
              ) : (
                <div>
                  <CustomDropZone
                    name={`metas.${index}.image`}
                    label="Meta Image"
                    number_of_images={1}
                    errors={errors}
                    fileType="image"
                    image_size={1024 * 1024 * 2} // 2MB limit
                    uploadedFiles={uploadedFiles}
                    setUploadedFiles={setUploadedFiles}
                    required={!isContent}
                  />
                  {errors?.metas?.[index]?.image && (
                    <p className="text-sm text-end text-red-500 mt-1">
                      {errors.metas[index].image.message}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        <div className="flex justify-start">
          <Button
            type="button"
            onClick={() =>
              append({
                attribute_scope: "general",
                attribute_type: "name",
                attribute_key: "",
                content: "",
                is_content: true,
                image: [],
              })
            }
            variant="outline"
            className="border-primary text-primary"
          >
            <PlusIcon size={16} className="mr-2" /> Add Meta Tag
          </Button>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button
            onClick={() => reset()}
            type="reset"
            className="mr-2"
            variant="outline"
          >
            Reset
          </Button>
          <Button type="submit">{parent ? "Apply" : "Save"}</Button>
        </div>
      </form>
    </div>
  );
};

export default AddMeta;
