import React from "react";
import InvoiceItem from "./InvoiceItem";

const Invoices = () => {
  return (
    <div className="p-4 px-5">
      <InvoiceItem
        image="/apple.png"
        title="Apple Store"
        subtitle="5hr ago"
        amount="$450"
      />
      <InvoiceItem
        image="/user.png"
        title="Michelle"
        subtitle="6hr ago"
        amount="$250"
      />
      <InvoiceItem
        image="/inv/tesla.png"
        title="Tesla"
        subtitle="5hr ago"
        amount="$82,450"
      />
      <InvoiceItem
        image="/user.png"
        title="William"
        subtitle="7hr ago"
        amount="$340"
      />
    </div>
  );
};

export default Invoices;
