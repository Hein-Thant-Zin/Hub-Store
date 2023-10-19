import React from "react";
import VariantSelector from "./variant-selector";
import AddToCart from "../cart/add-to-cart";

export default function ProductDescription() {
  return (
    <>
      <div className="flex flex-col py-6 mb-6 border-b">
        <h1 className="mb-5 text-5xl font-medium">Title</h1>
        <p>
          $200 <span className="inline ml-1">USD</span>
        </p>
      </div>
      <VariantSelector />
      <AddToCart />
    </>
  );
}
