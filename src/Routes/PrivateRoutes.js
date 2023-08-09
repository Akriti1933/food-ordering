import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ListingSkeleton from "../Component/ListingSkeleton/ListingSkeleton";
import LoginForm from "../Page/Login/Component";

const Homepage = lazy(() => import("../Page/Home"));
const Contact = lazy(() => import("../Page/Contact"));
const Categories = lazy(() => import("../Page/Categories"));
const Foods = lazy(() => import("../Page/Foods"));

const PrivateRoute = () => {
  return (
    <Suspense fallback={<ListingSkeleton />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Register" element={<registerForm />} />

      </Routes>
    </Suspense>
  );
};

export default PrivateRoute;
