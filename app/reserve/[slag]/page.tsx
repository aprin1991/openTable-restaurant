import Navbar from "@/app/components/navbar/Navbar";
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const Reservation = () => {
  return (
    <div className="border-t h-screen text-black">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Reservation;
