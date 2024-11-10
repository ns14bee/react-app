import React, { FC } from "react";
import { IProfile } from "./common.types";

const Profile: FC<IProfile> = ({ isActive, data, handleSetProfile }) => {
  return (
    <div
      className={`flex flex-col gap-4 min-w-40 ${
        isActive
          ? " text-primary"
          : "cursor-pointer text-tertiary hover:bg-tertiary"
      }`}
      onClick={() => handleSetProfile(data)}
    >
      <div
        className={`flex items-center justify-center h-20 w-20 rounded-full  ${
          isActive ? " bg-custom-gradient" : ""
        }`}
      >
        <img
          src={"/dummy.png"}
          className={`rounded-full h-16 w-16 ${
            isActive ? "border-4 border-black" : ""
          }`}
          alt={data.name}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-lg font-semibold">{data.name}</div>
        <div className="text-base font-normal">{data.date}</div>
      </div>
    </div>
  );
};

export default Profile;
