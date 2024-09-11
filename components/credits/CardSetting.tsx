import React from "react";
import SettingList from "./SettingList";

const CardSetting = () => {
  return (
    <div className="flex flex-col gap-3 px-3 py-5">
      <SettingList
        icon="/credit1.png"
        name="Block Card"
        desc="Instantly block your card"
      />
      <SettingList
        icon="/lock.png"
        name="Change Pin"
        desc="Change your card's pin"
      />
      <SettingList
        icon="/googlePay.png"
        name="Add to Google Pay"
        desc="Add your card to Google Pay"
      />
      <SettingList
        icon="/apple.png"
        name="Add to Apple Pay"
        desc="Add your card to Apple Pay"
      />
      <SettingList
        icon="/apple.png"
        name="Add to Apple Store"
        desc="Add your card to Apple Store"
      />
    </div>
  );
};

export default CardSetting;
