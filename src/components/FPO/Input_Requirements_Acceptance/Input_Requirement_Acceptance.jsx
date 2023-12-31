import Navbar from "../../Farmer/Navbar";
import { useState } from "react";
import Input_Requirements_With_Federation from "./Tabs/Input_Requirements_With_Federation";
import Purchase_History from "./Tabs/Purchase_History";

const Input_Requirement_Acceptance = () => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Input_Requirements_With_Federation />;
  } else if (active === "tab2") {
    tab__UI = <Purchase_History />;
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <div className="flex gap-3 md:gap-5 justify-end mt-5">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Requirements
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Purchase History
        </button>
      </div>
      {tab__UI}
    </div>
  );
};

export default Input_Requirement_Acceptance;
