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

interface PropertyListProps {
  landlord_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    let url = "/api/properties/";

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    }
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
