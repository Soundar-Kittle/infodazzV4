"use client";

import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import CustomInput from "@/components/ui/FormInput/CustomInput";
import { CustomDropZone, CustomToggle } from "@/components/ui/FormInput/Inputs";
import { Button } from "@/components/ui/button";
import MultiSelect from "@/components/ui/FormInput/MultiSelectNew";
import DividerWithText from "@/components/ui/FormInput/DividerWithText";

import { addBanner, editBanner } from "@/Services/Banner/ApiBanner";

import { getSiteMap } from "@/Services/SiteMap/ApiSiteMap";

import { Loader2 } from "lucide-react";

const schema = yup.object().shape({
  image: yup.object({
    image: yup
      .array()
      .of(yup.mixed().required("Image is required"))
      .min(1, "Image is required")
      .required("Image is required"),
  }),
  title: yup.string().nullable(),
  description: yup.string().nullable(),
  status: yup.string().default(true),
  show_button: yup.boolean().default(false),
  show_content: yup.boolean().default(false),
  show_description: yup.boolean().default(false),
  button_link: yup.string().nullable(),
  alignment: yup.number().default(0),
});

if (!String.prototype.toCapitalized) {
  String.prototype.toCapitalized = function () {
    return this.replace(/[-_]/g, " ")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
}

const AddBanner = ({ type = "add", editData, onClose }) => {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      show_button: false,
      show_content: true,
      show_description: false,
      status: 1,
      alignment: 0,
    },
  });

  const [imageFile, setImageFile] = useState({
    image: editData?.image ? [editData.image] : [],
  });

  useEffect(() => {
    setValue("image", imageFile);
  }, [imageFile, setValue]);

  useEffect(() => {
    if (type === "edit" && editData) {
      Object.keys(editData).forEach((key) => {
        if (key === "visibility" && typeof editData.visibility === "object") {
          const visibility = editData?.visibility;
          Object?.keys(visibility)?.forEach((vKey) => {
            setValue(vKey, visibility[vKey] ? true : false);
          });
        } else {
          setValue(key, editData[key]);
        }
      });

      if (editData.image) {
        setImageFile({ image: [editData.image] });
      }
    }
  }, [type, editData, setValue]);

  const { data: sitemap = [], isLoading: isSiteMapLoading } = useQuery({
    queryKey: ["sitemap"],
    queryFn: () => getSiteMap(),
  });

  const addMutation = useMutation({
    mutationFn: addBanner,
    onSuccess: () => {
      queryClient.invalidateQueries("banner");
      reset();
      setImageFile(false);
    },
  });

  const editMutation = useMutation({
    mutationFn: (data) => editBanner(data, editData.id),
    onSuccess: () => {
      queryClient.invalidateQueries("banner");
      reset();
      setImageFile(false);
      onClose();
    },
  });

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append("folder", "banner");
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image") {
        if (value?.image?.[0]) {
          formData.append("image", value.image[0]);
        } else {
          formData.append("image", JSON.stringify({ image: [] }));
        }
      } else {
        formData.append(key, value);
      }
    });

    type === "add"
      ? addMutation.mutate(formData)
      : editMutation.mutate(formData);
  };

  if (isSiteMapLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white pt-0 w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center border-b p-4 bg-primary rounded-t-md">
        <h2 className="text-xl font-semibold text-primary-foreground">
          {type === "add" ? "Add" : "Edit"} Banner
        </h2>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomDropZone
            name="image"
            label="Banner Image"
            number_of_images={1}
            errors={errors.image}
            fileType="image"
            image_size={1024 * 1024 * 2}
            uploadedFiles={imageFile}
            setUploadedFiles={setImageFile}
            showIcon={false}
            required
          />

          <DividerWithText
            text="Content Details"
            underline
            className="col-span-full"
            showLines
            textClassName="text-primary"
            position="start"
            lineColor="border-primary"
            component={
              <CustomToggle
                options={[{ name: "show_content", label: "Show Content" }]}
                control={control}
                errors={errors}
                showTooltip
                showLabel={false}
              />
            }
          />

          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <CustomInput
                type="textarea"
                maxLength={50}
                label="Banner Title"
                placeholder="Enter title"
                {...field}
                errors={errors}
                helperText="Maximum 50 characters"
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <CustomInput
                type="textarea"
                maxLength={70}
                label="Description"
                placeholder="Enter description"
                {...field}
                errors={errors}
                helperText="Maximum 70 characters"
                labelComponent={
                  <CustomToggle
                    options={[
                      { name: "show_description", label: "Show Description" },
                    ]}
                    control={control}
                    errors={errors}
                    showTooltip
                    showLabel={false}
                  />
                }
              />
            )}
          />

          <Controller
            name="alignment"
            control={control}
            render={({ field }) => (
              <MultiSelect
                {...field}
                label="Content Alignment"
                options={[
                  { value: 0, label: "Center" },
                  { value: 1, label: "Left" },
                  { value: 2, label: "Right" },
                ]}
                errors={errors}
              />
            )}
          />

          <Controller
            name="button_link"
            control={control}
            render={({ field }) => {
              const siteMapOptions = (sitemap?.rows || []).map((route) => ({
                // label: route.url?.toCapitalized?.() || route.url,
                label: route.label,
                value: route.url,
              }));

              const mergedOptions = [...siteMapOptions];

              return (
                <MultiSelect
                  {...field}
                  label="Button Link"
                  options={mergedOptions}
                  errors={errors}
                  isSearchable
                  placeholder="Select a page, collection or category"
                  showClearAll
                  labelComponent={
                    <CustomToggle
                      options={[{ name: "show_button", label: "Show Button" }]}
                      control={control}
                      errors={errors}
                      showTooltip
                      showLabel={false}
                    />
                  }
                />
              );
            }}
          />
        </div>

        <div className="flex justify-end">
          <Button
            onClick={() => {
              reset();
              setImageFile(false);
            }}
            type="reset"
            className="mr-2"
            variant="outline"
          >
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddBanner;
