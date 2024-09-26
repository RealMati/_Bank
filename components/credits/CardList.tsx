import React from "react";
import CardListItem from "./CardListItem";

const CardList = () => {
  return (
    <div className="flex flex-col gap-3 p-1">
      <CardListItem
        icon="/creditBlue.png"
        name="William"
        no={1234}
        bank="Bank of America"
        type="Primary"
      />
      <CardListItem
        icon="/creditRed.png"
        name="Abed"
        no={1234}
        bank="Bank of America"
        type="Primary"
      />
      <CardListItem
        icon="/creditGold.png"
        name="Julia"
        no={1234}
        bank="Bank of America"
        type="Primary"
      />
    </div>
  );
};

export default CardList;
