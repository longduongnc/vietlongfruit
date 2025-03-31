import React from "react";
import "./ValuesTimeline.css";

export default function ValuesTimeline() {
  const items = [
    { year: "2022", label: "First profession" },
    { year: "2023", label: "Farmer connection" },
    { year: "2024", label: "Established" },
    { year: "2025", label: "Economic growth" , active: true},
  ];

  return (
    <div className="values-timeline">
      <div className="timeline">
        {items.map((item, i) => (
          <React.Fragment key={item.year}>
            <div className={`item${item.active ? " active" : ""}`}>
              <div className="year">{item.year}</div>
              <div className="dot" />
              <div className="label">{item.label}</div>
            </div>
            {i < items.length - 1 && <div className="connector" />}
          </React.Fragment>
        ))}
        <div className="arrow">→</div>
      </div>
    </div>
  );
}
