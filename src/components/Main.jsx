import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../routes/Homepage";
import BookingPage from "../routes/BookingPage";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Reservations" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
};

export default Main;
