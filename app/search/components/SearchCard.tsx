import Link from "next/link";
import React from "react";
import { IRestaurant } from "../page";
import Price from "@/app/components/restaurant/card/Price";
import { calculateReviewsAvg } from "@/utils/helper";

interface IProps {
  restaurant: IRestaurant;
}

const SearchCard = ({
  restaurant: { name, price, slug, main_image, cuisine, location, Reviews },
}: IProps) => {
  const renderReviewText = () => {
    const avg = calculateReviewsAvg(Reviews);
    if (avg > 4) return "Awesome";
    else if (avg <= 4 && avg > 3) return "Good";
    else if (avg <= 3 && avg > 2) return "Average";
  };

  return (
    <div className="border-b flex pb-5">
      <img src={main_image} alt={name} className="w-44 rounded" />
      <div className="pl-5  text-black">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">{renderReviewText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">
              <Price price={price} />
            </p>
            <p className="mr-4">{cuisine.name}</p>
            <p className="mr-4">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
