import React from "react";

const HeaderContacts = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="flex flex-col text-sm">
        <span className="text-darkGray">{label}</span>
        <span className="text-para">{value}</span>
      </div>
    </div>
  );
};

export default HeaderContacts;
