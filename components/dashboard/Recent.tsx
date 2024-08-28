import React from "react";
import Image from "next/image";

const Recent = () => {
  return (
    <div className="bg-white rounded-2xl p-5 gap-3">
      <div className="flex">
        <Image src={"/credit.png"} alt="credit" width={27} height={27} />
        <div>
          <p>Deposit from my</p>
          <p>28 January 2024</p>
        </div>
        <p className="text-red-500">-$850</p>
      </div>
      <div className="flex">
        <Image src={"/paypal.png"} alt="paypal" width={27} height={27} />
        <div>
          <p>Deposit paypal</p>
          <p>18 February 2024</p>
        </div>
        <p className="text-green-500">+$2500</p>
      </div>
      <div className="flex">
        <Image src={"/cash.png"} alt="cash" width={27} height={27} />
        <div>
          <p>Jemi Wilson</p>
          <p>19 February 2024</p>
        </div>
        <p className="text-green-500">+5400</p>
      </div>
    </div>
  );
};

export default Recent;
