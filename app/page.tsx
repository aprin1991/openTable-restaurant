import { log } from "console";
import Header from "./components/header";
import Navbar from "./components/navbar/Navbar";
import RestaurantCard from "./components/restaurant/card";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

export interface IRestaurant {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  price: PRICE;
  Reviews: Review[];
}

const fetchRestaurant = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      Reviews: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurant();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants?.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}
