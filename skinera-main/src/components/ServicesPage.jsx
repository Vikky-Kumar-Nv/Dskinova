import React from "react";
import { getAllServices } from "../data/mockData";
import Header from "./Header";
import Footer from "./Footer";
import ServiceDetail from "./ServiceDetail";

const ServicesPage = () => {
  // For now, we'll show the anti-aging service detail directly
  // Later you can add routing to show different services or a services list

  return (
    <div>
      <ServiceDetail serviceId="anti-aging" />
    </div>
  );
};

export default ServicesPage;
