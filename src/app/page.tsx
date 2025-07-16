"use client";

import Loader from "@/components/loaders/Loader";
import dynamic from "next/dynamic";
import React from "react";

const HeavyIndexPage = dynamic(() => import("@/pages/home/NewIndex"), {
  loading: () => <Loader></Loader>,
  ssr: false,
});
const page = () => {
  return (
    <>
      <HeavyIndexPage />
    </>
  );
};
export default page;
