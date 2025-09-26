"use client";

import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import CustomInput from "@/components/ui/FormInput/CustomInput";
import { CustomDropZone, CustomToggle } from "@/components/ui/FormInput/Inputs";
import { Button } from "@/components/ui/button";
import {
  addTestimonial,
  editTestimonial,
} from "@/Services/Testimonial/ApiTestimonial";
import { Loader2 } from "lucide-react";
import MultiSelect from "@/components/ui/FormInput/MultiSelectNew";
const schema = yup.object().shape({
  name: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  rating: yup.number().nullable(),
  designation: yup.string().nullable(),
  image: yup.mixed().nullable(),
  show_rating: yup.boolean().default(true),
  show_description: yup.boolean().default(true),
  show_image: yup.boolean().default(true),
  show_designation: yup.boolean().default(false),
  show_product: yup.boolean().default(false),
});

const AddTestimonial = ({ type = "add", editData, onClose }) => {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // rating: 5,
      show_rating: true,
      show_description: true,
      show_designation: false,
      show_image: true,
      show_product: false,
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
          const visibility = editData.visibility;
          Object.keys(visibility).forEach((vKey) => {
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

  const addMutation = useMutation({
    mutationFn: addTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials");
      reset();
      setImageFile({ image: [] });
    },
    onError: () => {},
  });

  const editMutation = useMutation({
    mutationFn: (data) => editTestimonial(data, editData.id),
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials");
      reset();
      setImageFile({ image: [] });
      onClose();
    },
    onError: () => {},
  });

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append("folder", "testimonials");
    Object.entries(data).forEach(([key, value]) => {
      if (key === "image" && value?.image?.[0]) {
        formData.append("image", value.image[0]);
      } else {
        formData.append(key, value);
      }
    });
    // console.log("Add ***** FormData:", [...formData.entries()]);

    type === "add"
      ? addMutation.mutate(formData)
      : editMutation.mutate(formData);
  };

  const toggleOptions = [
    { name: "show_description", label: "Show Description" },
    { name: "show_designation", label: "Show Designation" },
    // { name: "show_rating", label: "Show Rating" },
    // { name: "show_image", label: "Show Image" },
    // { name: "show_product", label: "Show Product" },
  ];

  return (
    <div className="bg-white pt-0 w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center border-b p-4 bg-primary rounded-t-md">
        <h2 className="text-xl font-semibold text-primary-foreground">
          {type === "add" ? "Add" : "Edit"} Testimonial
        </h2>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Title"
                  type="text"
                  value={field.value}
                  errors={errors}
                  placeholder="Enter title"
                  required
                />
              )}
            />
          </div>
          {/* <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <MultiSelect
                {...field}
                label="Rating"
                options={[1, 2, 3, 4, 5].map((r) => ({
                  label: `${r} Star${r > 1 ? "s" : ""}`,
                  value: r,
                }))}
                errors={errors}
                labelComponent={
                  <CustomToggle
                    options={[{ name: "show_rating", label: "Show Rating" }]}
                    control={control}
                    errors={errors}
                    showTooltip
                    showLabel={false}
                    isSearchable={true}
                  />
                }
              />
            )}
          /> */}
          <CustomDropZone
            name={"image"}
            label="Reviewer Image"
            number_of_images={1}
            errors={errors}
            fileType={"image"}
            image_size={1024 * 1024 * 2}
            uploadedFiles={imageFile}
            setUploadedFiles={setImageFile}
            showIcon={false}
            labelComponent={
              <CustomToggle
                options={[{ name: "show_image", label: "Show Image" }]}
                control={control}
                errors={errors}
                showTooltip
                showLabel={false}
              />
            }
          />

          {/* <Controller
            name="designation"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Designation"
                placeholder="Ex: Customer, CEO"
                {...field}
                errors={errors}
                labelComponent={
                  <CustomToggle
                    options={[
                      {
                        name: "show_designation",
                        label: "Show Designation",
                      },
                    ]}
                    control={control}
                    errors={errors}
                    showTooltip
                    showLabel={false}
                  />
                }
              />
            )}
          /> */}
        </div>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <CustomInput
              type="textarea"
              label="Review Description"
              placeholder="Enter review details"
              {...field}
              errors={errors}
              required
            />
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button
            onClick={() => reset()}
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

export default AddTestimonial;
