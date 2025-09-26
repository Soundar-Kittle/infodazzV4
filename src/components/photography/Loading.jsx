"use client";

import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <HashLoader color="#76ba1b" />
    </div>
  );
};

export default Loading;
