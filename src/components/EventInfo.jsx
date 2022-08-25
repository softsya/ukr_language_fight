import React from "react";
import "../css/EventInfo.css";

const EventInfo = ({yearValue, yearIndex}) => { // value - подія, яка відбувається в той рік

  let containerClassName = "";
  if (yearIndex % 2) {
    containerClassName = "right";
  } else {
    containerClassName = "left";
  }

  let contents;
  if (typeof yearValue === "string") {
    contents = <p>{yearValue}</p>;
  }
  // для тих років, де сталося багато подій
  if (Array.isArray(yearValue)) {
    contents = yearValue.map(item => {
      return (
        <div className="multipleEventsContainer"> 
          <span>
          {item.text}
          </span>
          {item.description ? <p className="description">{item.description}</p> : null}
          {item.explanation ? <p className="explanation">{item.explanation}</p> : null}
        </div>
      )
    })
  }

  return (
    <div className={`${containerClassName} eventsInfoContainer`}>
    <section className="eventsInfo">
      {contents}
    </section>
    </div>
  ); // реакт-компонента повертає то, шо можна відобразити (div, p, string, number etc.)
};

export default EventInfo;