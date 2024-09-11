import React from "react";

const AddCredit = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="py-3 pl-8 pr-5 sm:pr-16 text-blue-900 opacity-90 text-base text-justify">
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </div>
      <div>
        <form>
          <div className="flex flex-col sm:flex-row p-2 px-5 gap-4 sm:gap-8 ">
            <div className="flex-1 ">
              <div className="flex flex-col px-2">
                <label htmlFor="cardType" className="p-2 ">
                  Card Type
                </label>
                <input
                  type="text"
                  id="cardType"
                  name="cardType"
                  //   value={cardData.cardType}
                  //   onChange={handleChange}
                  placeholder="Classic"
                  className="border-2 border-solid border-blue-100  p-2 rounded-xl focus:outline-none focus:border-blue-300"
                  aria-required="true"
                />
              </div>
              <div className="flex flex-col px-2 ">
                <label htmlFor="balance" className="p-2 ">
                  Balance
                </label>
                <input
                  type="text"
                  id="balance"
                  name="balance"
                  //   value={cardData.balance}
                  //   onChange={handleChange}
                  placeholder="27,000$"
                  className="border-2 border-solid border-blue-100  p-2  rounded-xl focus:outline-none focus:border-blue-300"
                  aria-required="true"
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="passcode" className="p-2 ">
                  Passcode
                </label>
                <input
                  type="password"
                  id="passcode"
                  name="passcode"
                  //   value={cardData.passcode}
                  //   onChange={handleChange}
                  placeholder="••••••"
                  className="border-2 border-solid border-blue-100  p-2 rounded-xl focus:outline-none focus:border-blue-300"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col px-2 ">
                <label htmlFor="cardHolder" className="p-2 ">
                  Name On Card
                </label>
                <input
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  //   value={cardData.cardHolder}
                  //   onChange={handleChange}
                  placeholder="My Cards"
                  className="border-2 border-solid border-blue-100  p-2 rounded-xl focus:outline-none focus:border-blue-300"
                  aria-required="true"
                />
              </div>
              <div className="flex flex-col px-2">
                <label htmlFor="expiryDate" className="p-2 ">
                  Expiry Date
                </label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  //   value={cardData.expiryDate}
                  //   onChange={handleChange}
                  className="border-2 border-solid border-blue-100  p-2 rounded-xl focus:outline-none focus:border-blue-300"
                  aria-required="true"
                />
              </div>
            </div>
          </div>
          <div className="py-5 px-8">
            <div className="flex justify-center text-white font-semibold bg-blue-600 p-2.5 hover:bg-blue-700 w-full sm:w-1/5 rounded-lg">
              <button type="submit">Add Card</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCredit;
