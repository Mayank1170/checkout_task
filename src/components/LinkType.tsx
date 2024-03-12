import React, { useState } from "react";
import Image from "next/image";
import s from "./Accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
export const Collapse = Accordion.Root;

const LinkType: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Main Account");

  const handleChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="flex flex-col gap-3 w-[40%] h-[75vh] p-8 overflow-scroll">
        <div>
          <h1 className="font-[490] text-[24px]">Choose Link Type</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center ps-4 py-2 border-[1px] rounded-[12px] border-[#85A0FF]">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <div className="flex flex-col py-2 ms-2 ">
              <label className="w-full text-[14px] font-[590] text-black">
                Products or Subscriptions
              </label>
              <label className="text-[12px] font-[300] text-black">
                Best for e-commerce or Software-as-a-Service{" "}
              </label>
            </div>
          </div>
          <div className="flex items-center ps-4 py-2 border-[1px] rounded-[12px] border-[#E0E0E0]">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />
            <div className="flex flex-col py-2 ms-2 ">
              <label className="w-full text-[14px] font-[590] text-black">
                Customers choose what to pay
              </label>
              <label className="text-[12px] font-[300] text-black">
                Best for tipping, donations or pay-what-you-want.
              </label>
            </div>
          </div>
        </div>
        <div
          className="w-full flex flex-row justify-between bg-[#EBEBEB] p-[2px] rounded-[48.89px]"
          style={{
            boxShadow:
              "0px 2.9629628658294678px 22.22222137451172px 0px #0000000D",
          }}
        >
          <p className="flex items-center justify-center w-[50%] p-2 bg-white rounded-[52.59px] text-[11.85px] text-[#6A7385]">
            Payment age
          </p>
          <p className="flex items-center justify-center w-[50%] p-2 text-[#6A7385] text-[11.85px]">
            After payment
          </p>
        </div>
        <h1 className="font-[490] text-[24px]">Product</h1>
        <div className="w-full flex items-center justify-between ps-4 py-2 border-[1px] rounded-[12px] border-[#E0E0E0]">
          <div className="flex justify-center items-center">
            <div className="w-[44px] h-[44px] flex justify-center items-center bg-[#F7F7F7]">
              <Image
                src={"/images/cube.svg"}
                width={"18"}
                height={"20"}
                alt="profile pic"
              />
            </div>
            <div className="flex flex-col py-2 ms-2 ">
              <label className="w-full text-[14px] font-[590] text-black">
                Landing Page
              </label>
              <label className="text-[12px] font-[300] text-black">
                $499.00
              </label>
            </div>
          </div>
          <div className="flex items-center mr-5">
            <Image
              src={"/images/3dots.svg"}
              width={"5"}
              height={"5"}
              alt="dots"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between ps-4 py-2 border-[1px] rounded-[12px] border-[#E0E0E0]">
          <div className="flex justify-center items-center">
            <div className="w-[44px] h-[44px] flex justify-center items-center bg-[#F7F7F7]">
              <Image
                src={"/images/cube.svg"}
                width={"18"}
                height={"20"}
                alt="profile pic"
              />
            </div>
            <div className="flex flex-col py-2 ms-2 ">
              <label className="w-full text-[14px] font-[590] text-black">
                UX Consultancy
              </label>
              <label className="text-[12px] font-[300] text-black">
                $900.00
              </label>
            </div>
          </div>
          <div className="flex items-center mr-5">
            <Image
              src={"/images/3dots.svg"}
              width={"5"}
              height={"5"}
              alt="dots"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center w-[148px] h-[24px] bg-[#3461FF1A] border-[0.83px] border-[#3461FF] px-3 py-1 rounded-[23.33px]">
            <p className="text-[11.66px] text-[#3461FF]">Add new Product +</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full items-start">
            <Collapse type="multiple" className={s.Container}>
              <Accordion.Item value="item-1" className={s.Item}>
                <Accordion.Header className={s.Header}>
                  <Accordion.Trigger
                    className={
                      "flex justify-start w-full text-black text-[24px] "
                    }
                  >
                    <span className="text-black font-[500]">Options</span>
                    <div className="bg-red-600">
                    <Image src={"/images/DownArrow.svg"} height={"10"} width={"10"} alt=""/>
                    </div>
                    {/* <ChevronDownIcon aria-hidden className={s.Icon} /> */}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={s.Content}>
                  <div className="flex flex-col gap-3 justify-start w-full">
                    <div className="flex items-center ">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                        Collect name
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                        Collect email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                        Collect Customer address
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                        Add a Custom Field
                      </label>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Collapse>
          </div>
          <div className="w-full items-start">
            <Collapse type="multiple" className={s.Container}>
              <Accordion.Item value="item-1" className={s.Item}>
                <Accordion.Header className={s.Header}>
                  <Accordion.Trigger
                    className={
                      "flex justify-start w-full text-black text-[24px] "
                    }
                  >
                    <span className="text-black font-[500]">Advanced</span>
                    {/* <ChevronDownIcon aria-hidden className={s.Icon} /> */}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={s.Content}>
                  <div className="flex flex-col w-full gap-4">
                    <div>
                      <div className="flex flex-col gap-3 justify-start w-full">
                        <p className="text-[#6A7385] text-[15px] font-[450]">
                          Label for Call-To-Action
                        </p>
                      </div>
                      <div className="w-full flex items-center justify-between ps-4 py-2 border-[1px] rounded-[8px] border-[#E0E0E0]">
                        <div className="flex justify-center items-center">
                          <div className="flex flex-col py-0 ms-0 ">
                            <label className="w-full text-[14px] font-[450] text-black">
                              Pay
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center mr-5">
                          <Image
                            src={"/images/3dots.svg"}
                            width={"5"}
                            height={"5"}
                            alt="dots"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                        Allow Promo codes
                      </label>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkType;
