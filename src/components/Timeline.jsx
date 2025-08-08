import React from "react";

const Timeline = ({ items }) => {
  return (
    <div className="relative pl-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-4 before:w-[3px] before:bg-gradient-to-b before:from-[#78a9ff]/40 before:to-transparent dark:before:from-[#78a9ff]/40">
      {items.map((item, idx) => (
        <div key={idx} className="mb-10 relative">
          <div className="absolute -left-[1.25rem] top-1 w-6 h-6 bg-[#78a9ff] rounded-full border-4 border-white dark:border-[#03051e]"></div>
          <h4 className="text-lg font-semibold relative z-10">{item.title}</h4>
          <span className="block text-xs text-slate-600 dark:text-slate-400 relative z-10">
            {item.subtitle} • {item.period}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
