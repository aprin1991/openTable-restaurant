import { IRestaurant } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Price from "./Price";
import { calculateReviewsAvg } from "@/utils/helper";

type IProps = {
  restaurant: IRestaurant;
};

const RestaurantCard = ({
  restaurant: { id, name, main_image, location, price, cuisine, slug, Reviews },
}: IProps) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`restaurant/${slug}`}>
        <img src={main_image} alt={slug} className="w-full h-36" />
        <div className="p-1 text-black">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">
              {Reviews.length} review{Reviews.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{cuisine.name}</p>
            {<Price price={price} />}
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
