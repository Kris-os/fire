import React from "react";

function YearsMonthsDays({ yearsMonthsDays }) {
  return (
    <div>
      <text className="bold">{yearsMonthsDays?.years} </text>
      years&#160;&#160;
      <text className="bold">{yearsMonthsDays?.months} </text>
      months&#160;&#160;
      <text className="bold">{yearsMonthsDays?.days} </text> days.
    </div>
  );
}

export default YearsMonthsDays;
