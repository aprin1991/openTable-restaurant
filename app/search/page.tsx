import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchCard from "./components/SearchCard";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
import { equal } from "assert";

export interface ISearchParams {
  city?: string;
  cuisine?: string;
  price: PRICE;
}

export interface IRestaurant {
  id: number;
  name: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  main_image: string;
  Reviews: Review[];
}

const prisma = new PrismaClient();
const fetchRestaurantByLocation = async (searchParams: ISearchParams) => {
  const { city, cuisine, price } = searchParams;

  const where: Partial<{}> = {
    ...(city && {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    }),
    ...(cuisine && {
      cuisine: {
        name: {
          equals: cuisine.toLocaleLowerCase(),
        },
      },
    }),
    ...(price && {
      price: {
        equals: price,
      },
    }),
  };

  const restaurants = await prisma.restaurant.findMany({
    where,
    select: {
      id: true,
      price: true,
      name: true,
      cuisine: true,
      location: true,
      slug: true,
      main_image: true,
      Reviews: true,
    },
  });

  return restaurants;
};

const fetchLocations = async () => {
  const locations = prisma.location.findMany();
  return locations;
};
const fetchCuisines = async () => {
  const cuisines = prisma.cuisine.findMany();
  return cuisines;
};

const Search = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const restaurants = await fetchRestaurantByLocation(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
        <Sidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <SearchCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <div className="">
              Sorry, we couldnt find any restaurant in {searchParams.city}{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
