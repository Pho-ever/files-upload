"use client"

import React, { ReactNode } from "react";

const LoadingView = (
  {
    className,
    title,
    desc,
    other
  }: {
    className?: string;
    title ?: string;
    desc?: string;
    other?: ReactNode
  }
) => {
  return (
    <div className={`w-full flex justify-center h-[calc(100vh-230px)] items-center flex-col ${className}`}>
      <div>
      <div className="loader" />
      </div>
      <p className="text-center text-sm font-medium text-gray-700 pt-4">{title ?? "Loading..."}</p>
      {desc && <p className="text-center text-sm font-medium text-gray-700">{desc}</p>}
      {
        other && 
        <div className="w-full flex justify-center pt-6">
{other}
        </div>
      }
    </div>
  );
};

export default LoadingView;
