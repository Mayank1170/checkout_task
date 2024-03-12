import React from "react";
import Image from "next/image";

interface PaymentDetailsProps {
  triggerItemDetails: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  triggerItemDetails,
}) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="flex items-center justify-between h-[25px] w-[90%] bg-white rounded-t-[7.14px]">
        <div className="flex flex-row items-center">
          <div className="flex gap-2 items-center mx-3">
            <p className="w-[7.36px] h-[7.36px] rounded-full bg-[#ED6B5D]"></p>
            <p className="w-[7.36px] h-[7.36px] rounded-full bg-[#F4BE50]"></p>
            <p className="w-[7.36px] h-[7.36px] rounded-full bg-[#61C554]"></p>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={"/images/LeftArrow.svg"}
              width={"6"}
              height={9}
              alt="back"
            />
            <Image
              src={"/images/RightArrow.svg"}
              width={"6"}
              height={9}
              alt="back"
            />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex h-[12px] w-full justify-center items-center gap-2 bg-[#F1F1F1] rounded-[3.57px] py-2">
            <div className="w-full flex gap-2 justify-end">
              <Image
                src={"/images/Lock.svg"}
                width={"6"}
                height={"10"}
                alt="Lock"
              />
              <p className="text-[6.93px] font-[400]">figma.com</p>
            </div>
            <div className="w-[60%] flex justify-end pr-3">
              {" "}
              <Image
                src={"/images/Reload.svg"}
                width={"9"}
                height={"9"}
                alt="Lock"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mr-5">
          <Image
            src={"/images/Share.svg"}
            width={"10"}
            height={"10"}
            alt="Lock"
          />
          <Image
            src={"/images/Add.svg"}
            width={"10"}
            height={"10"}
            alt="Lock"
          />
        </div>
      </div>

      <div className="h-[80%] w-[90%] bg-white p-[4.46px]">
        <div className="flex h-full w-full bg-[#F8F8F8]">
          <div className="w-full bg-[#F8F8F8] h-full pt-[10%] pl-[30px]">
            <div className="flex flex-rofullw gap-2">
              <Image
                src="/images/BackArrow.svg"
                width="10"
                height="10"
                alt=""
              />
              <div className="flex gap-1 items-center bg-white w-[83px] h-[21px] rounded-[18px] px-[3.57px] py-[5.36px">
                <Image
                  src={"/images/Profile.svg"}
                  width={"14"}
                  height={"14"}
                  alt="Profile"
                  className="rounded-[29px]"
                />
                <p className="text-[7.14px] font-[510]">Mayank Studios</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[10.72px] text-[#A2A2A2] font-[510] mt-4">
                Pay
              </p>
              {triggerItemDetails == "CustomerClicked" && (
                <input
                  className="w-[90%] bg-white border-[0.45px] border-[#D2D2D2] h-[37px] p-2 rounded-[4.46px]"
                  id="grid-first-name"
                  type="text"
                  placeholder="$0.00"
                />
              )}
              {triggerItemDetails == "productClicked" && (
                <div>
                  <p className="text-[25.39px] font-[450]">$1399</p>
                  <p className="text-[10.72px] text-[#A2A2A2] font-[510] my-4">
                    Items
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center gap-2">
                      <div className="flex gap-2">
                        <div className="bg-white p-1 w-fit text-[5.36px] rounded-[2.14px] border-[0.54px]">
                          1
                        </div>
                        <p className="text-[8.93px] font-[500]">Landing Page</p>
                      </div>
                      <p className="text-[8.93px] font-[500] pr-8">$499.00</p>
                    </div>
                    <div className="w-full flex justify-between items-center gap-2">
                      <div className="flex gap-2">
                        <div className="bg-white p-1 w-fit text-[5.36px] rounded-[2.14px] border-[0.54px]">
                          2
                        </div>
                        <p className="text-[8.93px] font-[500]">
                          UX Consultancy
                        </p>
                      </div>
                      <p className="text-[8.93px] font-[500] pr-8">$900.00</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full bg-[#F8F8F8] p-[8.93px] h-full">
            <div
              className="w-full h-full bg-white rounded-[8.93px]"
              style={{
                boxShadow:
                  "0px 1.7859007120132446px 12.992424964904785px -5.357702732086182px #00000040",
              }}
            >
              <div className="flex items-center px-3 h-[32.59px] bg-[#F9F9F9] rounded-t-[8.39px]">
                <p className="text-[12.5px] font-[500]">Payment Details</p>
              </div>
              <div className="flex justify-center ">
                <form className="w-[90%] px-1 mt-[20px]">
                  <div className="flex">
                    <div className="w-full">
                      <label className="text-[8.04px] font-[510] text-[#6A7385]">
                        Email
                      </label>
                      <input
                        className="w-full bg-white border-[0.45px] border-[#D2D2D2] h-[24px] p-2 rounded-[4.46px]"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-[8.04px] font-[510] text-[#6A7385]">
                      Billing Address
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      className="h-[24.11px] appearance-none w-full bg-white border-x border-t border-gray-200 text-gray-700 text-[8.93px] px-3 rounded rounded-b-none"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-3 w-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 ">
                      <input
                        className="w-full bg-white text-[8.92px] border-[0.45px] border-x-[#D2D2D2] p-2"
                        id="grid-first-name"
                        type="text"
                        placeholder="Address line 1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 ">
                      <input
                        className="w-full bg-white text-[8.92px] border-[0.45px] border-x-[#D2D2D2] p-2"
                        id="grid-first-name"
                        type="text"
                        placeholder="Address line 2"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-wrap -mx-3 ">
                      <div className="w-full px-3 ">
                        <input
                          className="w-full bg-white text-[8.92px] border-[0.45px] border-x-[#D2D2D2] p-2"
                          id="grid-first-name"
                          type="text"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3 ">
                        <input
                          className="w-full bg-white text-[8.92px] border-[0.45px] border-x-[#D2D2D2] p-2"
                          id="grid-first-name"
                          type="text"
                          placeholder="Zip"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 ">
                      <input
                        className="w-full bg-white text-[8.92px] border-[0.45px] border-x-[#D2D2D2] p-2 rounded-b-[4.46px]"
                        id="grid-first-name"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full text-[10.72px] py-2 text-white rounded-[29.47px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #3C52ED 0%, #2943E9 100%)",
                    }}
                  >
                    Play
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
