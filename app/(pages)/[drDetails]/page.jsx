"use client"
import React from "react";
import Button from "../../../components/shared/common/button";
import { useParams } from "next/navigation";
import {navItems1} from "@/data/index"

const page = () => {
  const param = useParams();

  const { drDetails } = param;

  const details = navItems1[0].fieldDoctors.find((a) => a.drDetails === drDetails);

  return (
    <div className="bg-primary h-96 w-full">
      {details.map((doc) => {
        return(
        <div key={doc.url}>
          <p>{doc.name}</p>
        </div>
     ) 
})} 
      
       
    </div>
  );
};

export default page;
