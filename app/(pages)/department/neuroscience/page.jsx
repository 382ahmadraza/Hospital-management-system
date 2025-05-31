import Heading from "@/components/shared/common/heading";
import React from "react";

const Department = () => {
  return (
    <div className="font-montserrat px-4 lg:px-14 xl:px-20 py-10">
      <Heading level={1} CustomHeading={"Department of Neurosciences"} CustomHeadingStyle={'my-4 '}/>

      <p className="text-zinc-600">
        The Department of Neurosciences, encompassing Neurology and
        Neurosurgery, is overseen by esteemed Consultants Dr. Azam Aslam, a
        Neurologist, and Dr. Naeem ur Rahman, a Neurosurgeon. This department is
        the hospital’s cornerstone, addressing a wide spectrum of cerebral and
        neurological disorders. Patients receive thorough examinations and
        treatment from highly skilled Consultants, utilizing cutting-edge
        neuroimaging technology and advanced medical facilities such as MRI and
        CT-Scan (Multi Slice) for comprehensive investigations into neurological
        complications and rapid screening of various bodily regions. A fully
        equipped ICU/HDU with ventilators, Blood Gas Analyzer, and 24-hour
        cardiac and respiratory monitoring is available to cater to critically
        ill neurological patients. Additionally, under the umbrella of
        Neurosciences, the Department of Physiotherapy & Rehabilitation offers
        services provided by qualified Physiotherapists, focusing on
        rehabilitation and physiotherapy for patients in need.
      </p>
    </div>
  );
};

export default Department;
