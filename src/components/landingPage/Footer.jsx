import React from 'react';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className=" mt-auto py-2 flex justify-center items-center bg-white shadow-inner">
      <h1 className="text-base font-poppins font-semibold">
        © {date} Developed by Binod Budhathoki
      </h1>
    </div>
  );
}
