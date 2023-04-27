import Navbar from "@/app/components/navbar/Navbar";
import React from "react";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import { Item, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchMenuItemsBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Items: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }

  return restaurant.Items;
};

const RestaurantDetail = async ({ params }: { params: { slug: string } }) => {
  const menuItems = await fetchMenuItemsBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} /> {/* MENU */}
        {menuItems.length > 0 ? (
          <Menu menuItems={menuItems} />
        ) : (
          <div className="h-32 flex items-center">
            There Is No Menu Items for this restaurant
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantDetail;
