"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { CustomDropZone } from "@/components/ui/FormInput/Inputs";
import { addGallery, editGallery } from "@/Services/Gallery/ApiGallery";
import { Loader2 } from "lucide-react";

const schema = yup.object().shape({
  image: yup.object({
    image: yup
      .array()
      .of(yup.mixed().required("Image is required"))
      .min(1, "Image is required")
      .required("Image is required"),
  }),
});

const AddGallery = ({ type = "add", editData, onClose }) => {
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
      image: { image: [] },
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
      setImageFile({ image: [editData.image] });
      setValue("image", { image: [editData.image] });
    }
  }, [type, editData, setValue]);

  const addMutation = useMutation({
    mutationFn: addGallery,
    onSuccess: () => {
      queryClient.invalidateQueries("gallery");
      reset();
      setImageFile({ image: [] });
      onClose?.();
    },
  });

  const editMutation = useMutation({
    mutationFn: (data) => editGallery(data, editData.id),
    onSuccess: () => {
      queryClient.invalidateQueries("gallery");
      reset();
      setImageFile({ image: [] });
      onClose?.();
    },
  });

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append("folder", "gallery");
    if (data.image?.image?.[0]) {
      formData.append("image", data.image.image[0]);
    }

    type === "add"
      ? addMutation.mutate(formData)
      : editMutation.mutate(formData);
  };

  return (
    <div className="bg-white pt-0 w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center border-b p-4 bg-primary rounded-t-md">
        <h2 className="text-xl font-semibold text-primary-foreground">
          {type === "add" ? "Add" : "Edit"} Gallery Image
        </h2>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomDropZone
            name="image"
            label="Gallery Image"
            number_of_images={1}
            errors={errors.image}
            fileType="image"
            image_size={1024 * 1024 * 2}
            uploadedFiles={imageFile}
            setUploadedFiles={setImageFile}
            showIcon={false}
            required
          />
        </div>

        <div className="flex justify-end">
          <Button
            onClick={() => {
              reset();
              setImageFile({ image: [] });
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

export default AddGallery;
