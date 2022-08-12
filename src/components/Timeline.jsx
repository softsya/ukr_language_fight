import React from "react";
import {timelineItems} from "../timelineItems";
// import {FormattedMessage} from "react-intl";

const years = Object.keys(timelineItems); // Object.keys returns an array [] of keys 

const Timeline = () => {
  const yearsWrap = years.map(year => {
    return (
      <li key={year}>
        <div>
        { /* displays separate li for each mapped year */ }
          <time>{year}</time>
        </div>
      </li>
    )
  });

  return (
    <section class="timeline">
      <ul>
        {yearsWrap}
      </ul>
    </section>
  );
};

export default Timeline;
