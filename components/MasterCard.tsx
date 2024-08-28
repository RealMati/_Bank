import React from "react";
import Image from "next/image";

const MasterCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#4C49ED] to-[#0A06F4] text-white rounded-2xl w-full">
      <div className="flex justify-between px-5 pt-4 pb-2">
        <div>
          <p>Balance</p>
          <p>$5,756</p>
        </div>
        <Image src={"/Chip_Card.png"} alt="chip" width={27} height={27} />
      </div>
      <div className="flex justify-between px-5 py-2 pb-3 pr-7">
        <div>
          <p>CARD HOLDER</p>
          <p>Eddy Cusuma</p>
        </div>

        <div>
          <p>VALID THRU</p>
          <p>12/26</p>
        </div>
      </div>
      <div className="flex justify-between bg-gradient-to-b from-[#ffffff29] to-[#ffffff00] px-5 py-5 pr-6">
        <p>3778 **** **** 0974</p>
        <Image src={"/master.png"} alt="chip" width={27} height={27} />
      </div>
    </div>
  );
};

export default MasterCard;
