"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import LinkCustom from "./link-custom";
import { useState } from "react";
import Container from "./container";

// Dynamically import Map components with SSR disabled
const Map = dynamic(() => import("pigeon-maps").then((mod) => mod.Map), {
  ssr: false,
});
const Marker = dynamic(() => import("pigeon-maps").then((mod) => mod.Marker), {
  ssr: false,
});
const Overlay = dynamic(
  () => import("pigeon-maps").then((mod) => mod.Overlay),
  { ssr: false }
);

const PigeonMap = () => {
  const anchor = [31.4273, 73.1166];
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = () => {
    setShowPopup(!showPopup);
  };

  return (
      <div
        className=" h-[80vh] lg:h-[40rem] w-full relative my-2"
        onMouseLeave={() => setShowPopup(false)}
      >
        <Map
          defaultCenter={anchor}
          defaultZoom={13}
          metaWheelZoom
          className="h-full w-full"
        >
          <Marker
            anchor={anchor}
            className="text-red-600"
            onMouseOver={handleMarkerClick}
          />

          {/* show a card of hospital  */}
          {showPopup && (
            <Overlay anchor={anchor} offset={[-10, 35]}>
              <div className="bg-white p-4 rounded-lg shadow-lg w-[220px] ">
                <LinkCustom url="/">
                  <Image
                    src="/assets/hospital.jpg"
                    width={200}
                    height={300}
                    alt="Hospital"
                    className="cursor-pointer"
                  />
                </LinkCustom>
                <h3 className="font-bold text-md md:text-lg mb-1">
                  Al Raza Hospital
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Expert orthopedic care and diagnostics.
                </p>
              </div>
            </Overlay>
          )}
        </Map>
      </div>
  );
};

export default PigeonMap;
