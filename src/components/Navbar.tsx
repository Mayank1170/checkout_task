import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 17.100000381469727px -12px #00000040" }}
      className="flex w-full justify-between bg-white h-[68px]"
    >
      <div className="flex h-full items-center ml-[30px]">
        <h1 className="text-black font-[Archivo SemiExpanded] text-[20px] font-[600]">
          CheckOut
        </h1>
      </div>
      <div className="flex gap-[4px] h-full items-center mr-[30px]">
        <Image width={"12"} height={"12"} alt="Help" src="/images/Vector.svg" />
        <h1 className="text-[#464F60] font-[SF Pro] text-[14px] font-[510]">
          Help & Support
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
