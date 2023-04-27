import { PRICE } from "@prisma/client";
import React from "react";

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <>
            <span>$$</span>
            <span className="text-gray-500">$$</span>
          </>
        );
      case PRICE.REGULAR:
        return (
          <>
            <span>$$$</span>
            <span className="text-gray-500">$</span>
          </>
        );
      case PRICE.EXPENSIVE:
        return (
          <>
            <span>$$$$</span>
          </>
        );
    }
  };
  return <p className="flex mr-3">{renderPrice()}</p>;
};

export default Price;
