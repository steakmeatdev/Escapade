"use client";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

// Specifying properties types for Property
export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
};
const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const url = "/api/properties/";
    const tmpProperty = await apiService.get(url);

    setProperties(tmpProperty.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return (
          <>
            <PropertyListItem key={property.id} property={property} />
          </>
        );
      })}
    </>
  );
};
export default PropertyList;
