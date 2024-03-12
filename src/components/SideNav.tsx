import React from "react";
import Image from "next/image";

const SideNav: React.FC = () => {
  return (
    <div className="w-fit h-full flex flex-col justify-between px-[12px]">
      <div>
        <div className="relative h-fit">
          <input
            type="search"
            id="default-search"
            className="relative h-[40px] w-[236px] bg-[#F1F1F1] p-4 ps-10 text-sm text-gray-900 rounded-[12px]"
            placeholder="Search"
            required
          />
          <div className="absolute top-[12px] left-[12px]">
            <Image
              alt="search"
              width={"14"}
              height={"14"}
              src="/images/Search.svg"
            />
          </div>
          <button
            type="submit"
            className="w-[24px] h-[24px] flex text-[#7B7B7B] bg-white absolute top-[8px] right-[8px] justify-center items-center font-400 rounded-[6px] text-[12px]"
          >
            /
          </button>
        </div>
        <div className="flex flex-col gap-0.5 mt-[34px]">
          <div className="flex flex-row gap-3 ml-2  p-[8px] rounded-[8px]">
            <Image width={16} height={16} alt="home" src={"/images/home.svg"} />
            <div className="text-[#6A7385] text-[14px] font-[450]">Home</div>
          </div>
          <div className="flex flex-row gap-3 ml-2 p-[8px] rounded-[8px]">
            <Image
              width={16}
              height={16}
              alt="home"
              src={"/images/Payments.svg"}
            />
            <div className="text-[#6A7385] text-[14px] font-[450]">
              Payments
            </div>
          </div>
          <div className="w-[220px] flex flex-row gap-3 ml-2 p-[8px] rounded-[8px] border border-[#BECCFF]">
            <Image width={16} height={16} alt="home" src={"/images/Link.svg"} />
            <div className="text-[#3461FF] text-[14px] font-[450]">
              Payment links
            </div>
          </div>
          <div className="flex flex-row gap-3 ml-2 p-[8px] rounded-[8px]">
            <Image
              width={16}
              height={16}
              alt="home"
              src={"/images/Billing.svg"}
            />
            <div className="text-[#6A7385] text-[14px] font-[450]">
              <p>Billing</p>
            </div>
            <div className="flex items-center px-2 py-[0] rounded-[19.8px]"
              style={{
                background: "linear-gradient(180deg, #85A0FF 0%, #577CFF 100%)",
              }}
            >
              <p className="text-white text-[7.2px]">COMMING SOON</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 ml-2 p-[8px] rounded-[8px]">
            <Image
              width={16}
              height={16}
              alt="home"
              src={"/images/Invoice.svg"}
            />
            <div className="text-[#6A7385] text-[14px] font-[450]">
              Invoices
            </div>
            <div className="flex items-center px-2 py-[0] rounded-[19.8px]"
              style={{
                background: "linear-gradient(180deg, #85A0FF 0%, #577CFF 100%)",
              }}
            >
              <p className="text-[7.2px]">COMMING SOON</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 ml-2 p-[8px] rounded-[8px]">
            <Image
              width={16}
              height={16}
              alt="home"
              src={"/images/Developer.svg"}
            />
            <div className="text-[#6A7385] text-[14px] font-[450]">
              Developer
            </div>
          </div>
          <div className="flex flex-row gap-3 ml-2 p-[8px] rounded-[8px]">
            <Image
              width={16}
              height={16}
              alt="home"
              src={"/images/settings.svg"}
            />
            <div className="text-[#6A7385] text-[14px] font-[450]">
              Settings
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between text-black bg-white rounded-[12px] p-3"
        style={{ boxShadow: "0px 4px 10px -8px #00000040" }}
      >
        <div>
          <Image
            src={"/images/Profile.svg"}
            width={"38"}
            height={"38"}
            alt="profile pic"
          />
        </div>
        <div>
          <p className="text-[14px] font-[450]">Mayank</p>
          <p className="text-[10px] font-[374] text-[#616060]">
            mayankaga1170@gmail.com
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src={"/images/3dots.svg"}
            width={"5"}
            height={"5"}
            alt="dots"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
