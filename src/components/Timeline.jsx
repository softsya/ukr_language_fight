import React, { useState } from "react";
import {timelineItems} from "../timelineItems";
// import {FormattedMessage} from "react-intl";

const years = Object.keys(timelineItems); // Object.keys returns an array [] of keys 

const Timeline = () => {
  const [selectedYear, selectYear] = useState(years[0]);
  
  const yearsWrap = years.map(year => {
    return (
        <div key={year}>
        { /* displays separate div for each mapped year */ }
          <time>{year}</time>
        </div>
    )
  });

  return (
    <section className="timeline">
      <div className="yearsWrap">
        {yearsWrap}
      </div>
    </section>
  );
};

export default Timeline;
