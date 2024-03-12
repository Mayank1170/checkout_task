import React, { useState } from "react";
import Image from "next/image";
import s from "./Accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import PaymentDetails from "./PaymentDetails";
export const Collapse = Accordion.Root;

const Main: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<boolean>(true);
  const [triggerItemDetails, setTriggerItemDetails] =
    useState<string>("productClicked");
  const [paymentMethod, setPaymentMethod] = useState<string>("PaymentPage");

  const handleChange = (option: boolean) => {
    setSelectedOption(option);
  };
  const handleItemClick = (option: string) => {
    setTriggerItemDetails(option);
  };
  const handlePayment = (option: string) => {
    setPaymentMethod(option)
  };
  return (
    <div
      style={{ boxShadow: "0px 4px 17.100000381469727px -12px #00000040" }}
      className="flex flex-col w-full bg-white h-full rounded-[20px]"
    >
      <div className="w-full flex gap-4 px-8 h-[72px] items-center justify-between linear-gradient(180deg, #6A8BFF 0%, #3461FF 100%) border-b-[1px]">
        <div className="flex gap-4">
          <Image
            width={"12"}
            height={"12"}
            alt="close"
            src={"/images/Close.svg"}
          />
          <p className="font-[SF Pro] text-[24px] font-[510] text-[#13171F]">
            Create Payment Link
          </p>
        </div>
        <button
          className="px-[12px] py-[8px] rounded-[8px]"
          style={{
            background: "linear-gradient(180deg, #6A8BFF 0%, #3461FF 100%)",
          }}
        >
          Create Link
        </button>
      </div>
      <div className="flex flex-row h-full text-black ">
        <div className="flex flex-col gap-3 w-[40%] h-[75vh] p-8 overflow-scroll">
          <div>
            <h1 className="font-[490] text-[24px]">Choose Link Type</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center ps-4 py-2 border-[1px] rounded-[12px] "
              style={{
                borderColor: `${
                  selectedOption == true ? "#85A0FF" : "#E0E0E0"
                }`,
              }}
              onClick={() => {
                handleChange(true);
                handleItemClick("productClicked");
              }}
            >
              <input
                checked={selectedOption == true}
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={() => handleChange(true)}
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
            <div
              className="flex items-center ps-4 py-2 border-[1px] rounded-[12px]"
              style={{
                borderColor: `${
                  selectedOption == false ? "#85A0FF" : "#E0E0E0"
                }`,
              }}
              onClick={() => {
                handleChange(false);
                handleItemClick("CustomerClicked");
              }}
            >
              <input
                checked={selectedOption == false}
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-6 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={() => handleChange(false)}
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
            className="relative w-full flex flex-row justify-between bg-[#EBEBEB] p-[2px] rounded-[48.89px]"
            style={{
              boxShadow:
                "0px 2.9629628658294678px 22.22222137451172px 0px #0000000D",
            }}
          >
            <div className="absolute w-[50%] h-[31px] bg-white rounded-[55.59px] mt-[1px] ml-[1px] "></div>
            {/* left-[49%] */}
            <p className="flex items-center justify-center w-[50%] p-2 z-[1] rounded-[52.59px] text-[11.85px]">
              Payment age
            </p>
            <p
              className="flex items-center justify-center w-[50%] p-2 text-[#6A7385] text-[11.85px]"
            >
              After payment
            </p>
          </div>
          <div className="h-full">
            <div className="mb-4 w-full flex flex-col gap-3">
              {selectedOption && (
                <>
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
                </>
              )}
            </div>
            <div className="w-full flex justify-center">
              <div className="flex items-center justify-center w-[148px] h-[24px] bg-[#3461FF1A] border-[0.83px] border-[#3461FF] px-3 py-1 rounded-[23.33px]">
                <p className="text-[11.66px] text-[#3461FF]">
                  Add new Product +
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full items-start">
                <Collapse type="multiple" className={s.Container}>
                  <Accordion.Item value="item-1" className={s.Item}>
                    <Accordion.Header className={s.Header}>
                      <Accordion.Trigger
                        className={
                          "flex justify-between w-full text-black text-[24px] "
                        }
                      >
                        <span className="text-black font-[500]">Options</span>
                        <Image
                          src={"/images/DownArrow.svg"}
                          width={"10"}
                          height={"10"}
                          alt="Lock"
                        />
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
                          "flex justify-between w-full text-black text-[24px] "
                        }
                      >
                        <span className="text-black font-[500]">Advanced</span>
                        <Image
                          src={"/images/DownArrow.svg"}
                          width={"10"}
                          height={"10"}
                          alt="Lock"
                        />
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
        <div className="w-[60%] h-full p-[12px]">
          <div
            className="flex justify-center items-center h-full w-full bg-[#F5F5F5] rounded-[10.55px]"
            style={{
              boxShadow:
                "0px 3.8365895748138428px 20.046180725097656px -11.50976848602295px #00000040 inset",
            }}
          >
            <PaymentDetails triggerItemDetails={triggerItemDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
