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
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// ✅ Schema
const schema = yup
  .object({
    name: yup.string().required("Name is required"),

    // ✅ Replace 'mobile' with global + branch
    global_mobile: yup.array().of(
      yup.object({
        value: yup.string().required("Mobile number is required"),
        is_active: yup.boolean(),
      })
    ),

    branch_mobile: yup.array().of(
      yup.object({
        value: yup.string().required("Mobile number is required"),
        is_active: yup.boolean(),
      })
    ),

    // ✅ Replace 'address' with global + branch
    global_address: yup.array().of(
      yup.object({
        address_line: yup.string().required("Address Line is required"),
        city: yup.string().required("City is required"),
        state: yup.string().required("State is required"),
        country: yup.string().required("Country is required"),
        pincode: yup.string().required("Pincode is required"),
        is_active: yup.boolean(),
      })
    ),

    branch_address: yup.array().of(
      yup.object({
        branch_number: yup.string().required("Branch number is required"),
        address_line: yup.string().required("Address Line is required"),
        city: yup.string().required("City is required"),
        state: yup.string().required("State is required"),
        country: yup.string().required("Country is required"),
        pincode: yup.string().required("Pincode is required"),
        is_active: yup.boolean(),
      })
    ),

    email: yup.string().email("Invalid email").nullable(),
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
    null,
    function (value) {
      const { app_name, app_email, app_password } = value;
      const anyProvided = !!(app_name || app_email || app_password);
      const errors = [];

      if (anyProvided) {
        if (!app_name) {
          errors.push(this.createError({ path: "app_name", message: "App Name is required" }));
        }
        if (!app_email) {
          errors.push(this.createError({ path: "app_email", message: "App Email is required" }));
        }
        if (!app_password) {
          errors.push(this.createError({ path: "app_password", message: "App Password is required" }));
        } else if (app_password.length !== 16) {
          errors.push(this.createError({ path: "app_password", message: "Password must be exactly 16 characters" }));
        }
      }

      if (errors.length) throw new yup.ValidationError(errors);
      return true;
    }
  );


export default function Settings({ type = "add" }) {
  const queryClient = useQueryClient();
  const { settings: initialSettings } = useSettings();
  const [tab, setTab] = useState("default");
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
      global_mobile: [{ value: "", is_active: true }],
      branch_mobile: [{ value: "", is_active: true }],
      global_address: [{ value: "", is_active: true }],
      branch_address: [{ value: "", is_active: true }],
      social_links: initialSettings?.social_links || [
        { platform: "", url: "" },
      ],
    },
  });

  const {
    fields: globalMobileFields,
    append: addGlobalMobile,
    remove: removeGlobalMobile,
  } = useFieldArray({ control, name: "global_mobile" });

  const {
    fields: branchMobileFields,
    append: addBranchMobile,
    remove: removeBranchMobile,
  } = useFieldArray({ control, name: "branch_mobile" });

  const {
    fields: globalAddressFields,
    append: addGlobalAddress,
    remove: removeGlobalAddress,
  } = useFieldArray({ control, name: "global_address" });
  const {
    fields: branchAddressFields,
    append: addBranchAddress,
    remove: removeBranchAddress,
  } = useFieldArray({ control, name: "branch_address" });

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
    { label: "LinkedIn", value: "linkedin" },
  ];

  useEffect(() => {
    setValue("logo", logoFile);
    setValue("icon", iconFile);
  }, [logoFile, iconFile, setValue]);

  useEffect(() => {
  console.log("Form errors", errors);
}, [errors]);


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

  // const onSubmit = (data) => {
  //    console.log("🟢 onSubmit called with:", data);
  //   const formData = new FormData();
  //   formData.append("folder", "settings");
  //   formData.append("global_mobile", JSON.stringify(data.global_mobile));
  //   formData.append("branch_mobile", JSON.stringify(data.branch_mobile));
  //   formData.append("global_address", JSON.stringify(data.global_address));
  //   formData.append("branch_address", JSON.stringify(data.branch_address));

  //   const keysHandledSeparately = ["logo", "icon", "global_mobile", "branch_mobile", "global_address", "branch_address", "social_links"];

  //   Object.entries(data).forEach(([key, value]) => {
  //     if (key === "logo" && value?.logo?.[0]) {
  //       formData.append("logo", value.logo[0]);
  //     } else if (key === "icon" && value?.icon?.[0]) {
  //       formData.append("icon", value.icon[0]);
  //     } else if (
  //       key === "social_links" ||
  //       key === "mobile" ||
  //       key === "address"
  //     ) {
  //       formData.append(key, JSON.stringify(value)); // ✅ Fix: stringify object/array
  //     } else {
  //       formData.append(key, value || "");
  //     }
  //   });

  //   console.log("FormData:", [...formData.entries()]);
  //   addSettingsMutation.mutate(formData);
  // };

  const onSubmit = (data) => {
  console.log("🟢 onSubmit called with:", data);
  const formData = new FormData();

  formData.append("folder", "settings");

  // ✅ Manually append complex fields
  formData.append("global_mobile", JSON.stringify(data.global_mobile));
  formData.append("branch_mobile", JSON.stringify(data.branch_mobile));
  formData.append("global_address", JSON.stringify(data.global_address));
  formData.append("branch_address", JSON.stringify(data.branch_address));
  formData.append("social_links", JSON.stringify(data.social_links));

  // ✅ Handle logo and icon files
  if (data.logo?.logo?.[0]) {
    formData.append("logo", data.logo.logo[0]);
  }

  if (data.icon?.icon?.[0]) {
    formData.append("icon", data.icon.icon[0]);
  }

  // ✅ Avoid overwriting complex fields
  const keysToSkip = [
    "logo",
    "icon",
    "global_mobile",
    "branch_mobile",
    "global_address",
    "branch_address",
    "social_links",
  ];

  Object.entries(data).forEach(([key, value]) => {
    if (keysToSkip.includes(key)) return;
    formData.append(key, value ?? "");
  });

  console.log("FormData:", [...formData.entries()]);
  addSettingsMutation.mutate(formData);
};

  return (
    <div className="bg-white pt-0 w-full border border-gray-200 rounded-md">
      <div className="flex justify-between items-center border-b p-4 bg-primary rounded-t-md">
        <h2 className="text-xl font-semibold text-primary-foreground">
          Settings
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
        {/* Tabs Section */}
        <Tabs
          defaultValue="default"
          value={tab}
          onValueChange={setTab}
          className="w-full"
        >
          {/* Mobile Dropdown Menu */}
          <div className="block md:hidden mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {tab === "default"
                    ? "Default Settings"
                    : tab === "address"
                    ? "Address"
                    : tab === "mail"
                    ? "Mail Details"
                    : "Social Links"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem onClick={() => setTab("default")}>
                  Default Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTab("address")}>
                  Address
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTab("social")}>
                  Social Links
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTab("mail")}>
                  Mail Details
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* <TabsList className="w-fit space-x-2 border mb-4 "> */}
          <TabsList className="hidden md:flex gap-2 border mb-4">
            <TabsTrigger value="default">Default Settings</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="mail">Mail Details</TabsTrigger>
          </TabsList>

          {/* Default Tab */}
          <TabsContent value="default">
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              {/* Global Mobile Numbers */}
              <div className="mb-3">
                <label className="font-semibold">Global Mobile Numbers</label>
                {globalMobileFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-4">
                    <Controller
                      name={`global_mobile.${index}.value`}
                      control={control}
                      render={({ field }) => (
                        <CustomInput
                          {...field}
                          label={`Global Mobile #${index + 1}`}
                          errors={errors}
                        />
                      )}
                    />
                    <Controller
                      name={`global_mobile.${index}.is_active`}
                      control={control}
                      render={({ field }) => (
                        <div className="flex items-center gap-2">
                          <span>Active</span>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </div>
                      )}
                    />
                    <Button
                      variant="destructive"
                      type="button"
                      onClick={() => removeGlobalMobile(index)}
                    >
                      -
                    </Button>
                    <Button
                      type="button"
                      onClick={() =>
                        addGlobalMobile({ value: "", is_active: true })
                      }
                    >
                      +
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="address">
            {/* Address */}

            {/* Global Addresses */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="font-semibold">Global Addresses</label>
              {globalAddressFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid md:grid-cols-3 gap-4 mt-4 border p-4 rounded-md"
                >
                  <Controller
                    name={`global_address.${index}.address_line`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        {...field}
                        label="Address Line"
                        errors={errors}
                      />
                    )}
                  />
                  <Controller
                    name={`global_address.${index}.city`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="City" errors={errors} />
                    )}
                  />
                  <Controller
                    name={`global_address.${index}.state`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="State" errors={errors} />
                    )}
                  />
                  <Controller
                    name={`global_address.${index}.country`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="Country" errors={errors} />
                    )}
                  />
                  <Controller
                    name={`global_address.${index}.pincode`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="Pincode" errors={errors} />
                    )}
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <span>Active</span>
                    <Controller
                      name={`global_address.${index}.is_active`}
                      control={control}
                      render={({ field }) => (
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => removeGlobalAddress(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() =>
                  addGlobalAddress({
                    address_line: "",
                    city: "",
                    state: "",
                    country: "",
                    pincode: "",
                    is_active: true,
                  })
                }
              >
                + Add Global Address
              </Button>
            </div>

            {/* Branch Addresses */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="font-semibold">Branch Addresses</label>
              {branchAddressFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid md:grid-cols-3 gap-4 mt-4 border p-4 rounded-md"
                >
                  <Controller
                    name={`branch_address.${index}.branch_number`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        {...field}
                        label="Branch Number"
                        errors={errors}
                      />
                    )}
                  />
                  <Controller
                    name={`branch_address.${index}.address_line`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        {...field}
                        label="Address Line"
                        errors={errors}
                      />
                    )}
                  />
                  <Controller
                    name={`branch_address.${index}.city`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="City" errors={errors} />
                    )}
                  />
                  <Controller
                    name={`branch_address.${index}.state`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="State" errors={errors} />
                    )}
                  />
                  <Controller
                    name={`branch_address.${index}.country`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="Country" errors={errors} />
                    )}
                  />
                  <Controller
                    name={`branch_address.${index}.pincode`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput {...field} label="Pincode" errors={errors} />
                    )}
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <span>Active</span>
                    <Controller
                      name={`branch_address.${index}.is_active`}
                      control={control}
                      render={({ field }) => (
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => removeBranchAddress(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() =>
                  addBranchAddress({
                    branch_number: "",
                    address_line: "",
                    city: "",
                    state: "",
                    country: "",
                    pincode: "",
                    is_active: true,
                  })
                }
              >
                + Add Branch Address
              </Button>
            </div>
          </TabsContent>

          {/* Mail Details Tab */}
          <TabsContent value="mail">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          </TabsContent>

          {/* Social Links Tab */}
          <TabsContent value="social">
            {/* <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-primary">
                Social Links
              </h3>
              <Button
                type="button"
                onClick={() => addSocial({ platform: "", url: "" })}
              >
                + Add Link
              </Button>
            </div> */}
            <div className="space-y-3">
              {socialFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex flex-col gap-2 border-b border-gray-100 pb-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-primary">
                      Link #{index + 1}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeSocial(index)}
                      className="text-red-500 cursor-pointer text-sm font-medium flex items-center gap-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

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
            </div>{" "}
            <Button
            variant="default"
              type="button"
              onClick={() => addSocial({ platform: "", url: "" })}
            >
              + Add Link
            </Button>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
         <Button type="submit" defaultVariants>Save</Button>
        </div>
      </form>
    </div>
  );
}
