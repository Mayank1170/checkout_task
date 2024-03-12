import React from "react";
import Navbar from "../Navbar";
import SideNav from "../SideNav";
import  Main  from "../Main";

function Home() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex py-[12px] pr-[12px]"  style={{ height: "calc(100vh - 80px)" }}>
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default Home;
