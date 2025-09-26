"use client";

import { useEffect, useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Trash2 } from "lucide-react";

import { useSettings } from "@/context/SettingsContext";
import { addSettings } from "@/Services/Settings/ApiSettings";
import { CustomDropZone } from "@/components/ui/FormInput/Inputs";
import CustomInput from "@/components/ui/FormInput/CustomInput";
import MultiSelect from "@/components/ui/FormInput/MultiSelectNew";
import DividerWithText from "@/components/ui/FormInput/DividerWithText";
import { Button } from "@/components/ui/button";


// ✅ Schema
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    address: yup.string().nullable(),
    email: yup.string().email("Invalid email").nullable(),
    mobile: yup.string().nullable(),
    website: yup.string().nullable(),

    app_name: yup.string().nullable(),
    app_email: yup.string().email("Invalid email").nullable(),
    app_password: yup.string().nullable(),

    logo: yup.mixed().required("Logo is required"),
    icon: yup.mixed().required("Icon is required"),
    social_links: yup.array().of(
      yup.object().shape({
        platform: yup.string().required("Platform required"),
        url: yup.string().url("Enter valid URL").required("URL required"),
      })
    ),
  })
  .test(
    "mail-credentials-validation",
    null, // No generic error message here; we use `this.createError`
    function (value) {
      const { app_name, app_email, app_password } = value;

      const anyProvided = !!(app_name || app_email || app_password);
      const errors = [];

      if (anyProvided) {
        if (!app_name) {
          errors.push(
            this.createError({
              path: "app_name",
              message: "App Name is required",
            })
          );
        }
        if (!app_email) {
          errors.push(
            this.createError({
              path: "app_email",
              message: "App Email is required",
            })
          );
        }
        if (!app_password) {
          errors.push(
            this.createError({
              path: "app_password",
              message: "App Password is required",
            })
          );
        } else if (app_password.length !== 16) {
          errors.push(
            this.createError({
              path: "app_password",
              message: "Password must be exactly 16 characters",
            })
          );
        }
      }

      if (errors.length) throw new yup.ValidationError(errors);
      return true;
    }
  );

export default function Settings({ type = "add" }) {
  const queryClient = useQueryClient();
  const { settings: initialSettings } = useSettings();

  const [logoFile, setLogoFile] = useState({ logo: [initialSettings?.logo] });
  const [iconFile, setIconFile] = useState({ icon: [initialSettings?.icon] });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      social_links: initialSettings?.social_links || [
        { platform: "", url: "" },
      ],
    },
  });

  const {
    fields: socialFields,
    append: addSocial,
    remove: removeSocial,
  } = useFieldArray({ control, name: "social_links" });

  const socialOptions = [
    { label: "Instagram", value: "instagram" },
    { label: "Facebook", value: "facebook" },
    { label: "Twitter", value: "twitter" },
    { label: "YouTube", value: "youtube" },
  ];

  useEffect(() => {
    setValue("logo", logoFile);
    setValue("icon", iconFile);
  }, [logoFile, iconFile, setValue]);

  useEffect(() => {
    if (initialSettings) {
      reset(initialSettings);

      if (initialSettings.logo) {
        setLogoFile({ logo: [initialSettings.logo] });
        setValue("logo", { logo: [initialSettings?.logo] });
      }
      if (initialSettings.icon) {
        setIconFile({ icon: [initialSettings?.icon] });
        setValue("icon", { icon: [initialSettings?.icon] });
      }
    }
  }, [initialSettings, reset, setValue]);

  const addSettingsMutation = useMutation({
    mutationFn: addSettings,
    onSuccess: () => {
      queryClient.invalidateQueries("settings");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Error saving settings");
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("folder", "settings");

    Object.entries(data).forEach(([key, value]) => {
      if (key === "logo" && value?.logo?.[0]) {
        formData.append("logo", value.logo[0]);
      } else if (key === "icon" && value?.icon?.[0]) {
        formData.append("icon", value.icon[0]);
      } else if (key === "social_links") {
        formData.append("social_links", JSON.stringify(value));
      } else {
        formData.append(key, value || "");
      }
    });

    console.log("FormData:", [...formData.entries()]);
    addSettingsMutation.mutate(formData);
  };

  return (
    <div className="bg-white pt-0 w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center border-b p-4 bg-primary/5">
        <h2 className="text-xl font-semibold text-primary">Settings</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Name */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="Name"
                type="text"
                value={field.value}
                errors={errors}
                required
              />
            )}
          />

          {/* Mobile */}
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="Mobile"
                type="number"
                value={field.value}
                errors={errors}
                required
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="Email"
                type="email"
                value={field.value}
                errors={errors}
                required
              />
            )}
          />

          {/* Website */}
          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="Website"
                type="text"
                value={field.value}
                errors={errors}
                required
              />
            )}
          />

          {/* Logo */}
          <CustomDropZone
            name="logo"
            label="Logo"
            number_of_images={1}
            type={type}
            errors={errors}
            fileType="image"
            image_size={5 * 1024 * 1024}
            uploadedFiles={logoFile}
            setUploadedFiles={setLogoFile}
            showIcon={false}
            required
          />

          {/* Icon */}
          <CustomDropZone
            name="icon"
            label="Icon"
            number_of_images={1}
            type={type}
            errors={errors}
            fileType="image"
            image_size={5 * 1024 * 1024}
            uploadedFiles={iconFile}
            setUploadedFiles={setIconFile}
            showIcon={false}
            required
          />

          {/* Address */}
          <div className="md:col-span-2 lg:col-span-3">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Address"
                  type="textarea"
                  value={field.value}
                  errors={errors}
                  required
                />
              )}
            />
          </div>
          {/* Mail Details */}
          <DividerWithText
            text="Mail Details"
            className="col-span-full"
            underline
            textClassName="text-primary"
          />
          <Controller
            name="app_name"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="App Name"
                placeholder="Enter App Name"
                type="text"
                value={field.value}
                errors={errors}
              />
            )}
          />
          <Controller
            name="app_email"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="App Email"
                type="email"
                placeholder="Enter App Email"
                value={field.value}
                errors={errors}
              />
            )}
          />
          <Controller
            name="app_password"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                label="App Password"
                type="password"
                placeholder="Enter App Password"
                value={field.value}
                errors={errors}
                enablePasswordToggle
              />
            )}
          />

          {/* Social Links */}
          <DividerWithText
            text="Social Links"
            className="col-span-full"
            underline
            textClassName="text-primary"
            component={
              <Button
                className="ml-5"
                type="button"
                onClick={() => addSocial({ platform: "", url: "" })}
              >
                + Add Link
              </Button>
            }
          />

          <div className="md:col-span-2 lg:col-span-3 space-y-3">
            {socialFields.map((field, index) => (
              <div
                key={field.id}
                className="flex flex-col gap-2 border-b border-gray-100 mb-2"
              >
                {/* Header Row with Title and Delete */}
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-primary">
                    Links #{index + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeSocial(index)}
                    className="text-red-500 text-sm font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Inputs Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Controller
                    name={`social_links.${index}.platform`}
                    control={control}
                    render={({ field }) => (
                      <MultiSelect
                        {...field}
                        label="Platform"
                        options={socialOptions}
                        errors={errors}
                        required
                      />
                    )}
                  />
                  <Controller
                    name={`social_links.${index}.url`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        {...field}
                        label="URL"
                        type="url"
                        value={field.value}
                        errors={errors}
                        required
                      />
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
