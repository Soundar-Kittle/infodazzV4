import React from "react";

const page = () => {
  return (
    <div>
      {/* <MetalSettings /> */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-200">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-4 ">Welcome to the admin dashboard!</p>
        <p className="mt-2">You can manage your settings here.</p>
      </div>
    </div>
  );
};

export default page;
