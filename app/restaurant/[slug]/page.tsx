import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

interface IRestaurant {
  images: Array<string>;
  name: string;
  description: string;
  id: number;
  slug: string;
  Reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<IRestaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      images: true,
      name: true,
      description: true,
      id: true,
      slug: true,
      Reviews: true,
    },
  });

  if (!restaurant) {
    throw new Error("there is no restaurant ");
  }
  return restaurant;
};

const Restaurant = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title title={restaurant.name} />
        <Rating reviews={restaurant.Reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.Reviews} />
      </div>
      <ReservationCard />
    </>
  );
};

export default Restaurant;
