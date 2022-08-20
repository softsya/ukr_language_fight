import React, { useState } from "react";
import EventInfo from './EventInfo';

const Timeline = ({timelineItems}) => {
  const years = Object.keys(timelineItems); // Object.keys returns an array [] of keys 

  const [selectedYear, selectYear] = useState();
  
  const yearsWrap = years.map(year => {
    return (
        <div className="yearWrap"
          key={year}
          onClick={ () => selectYear(year)}>
        { /* displays separate div for each mapped year */ }
          <time><p>{year}</p></time>
        </div>
    )
  });

  return (
    <section className="timeline">
      <div className="yearsWrap">
        {yearsWrap}
      </div>
      <EventInfo yearValue={timelineItems[selectedYear]}/> {/* їрІвент - то пропса нахуй */}
    </section>
  );
};

export default Timeline;
