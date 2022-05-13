import { useState } from "react";

export const AccordionSummary = ({ text }) => {
  const [accordion, setAccordion] = useState(true);
  return (
    <summary
      onClick={() => {
        setAccordion((show) => !show);
      }}
    >
      <h1>{text}</h1>
      <i className={accordion ? "fas fa-plus" : "fas fa-minus"}></i>
    </summary>
  );
};
