import React from "react";

const Timeline = ({ items }) => {
  return (
   <div className="relative pl-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-5 before:w-[2px] before:bg-gradient-to-b before:from-[#78a9ff]/50 before:to-transparent dark:before:from-[#78a9ff]/40">
  {items.map((item, idx) => (
    <div key={idx} className="mb-8 relative group">
      {/* Dot */}
      <div className="absolute -left-[0.55rem] top-1 w-4 h-4 bg-[#78a9ff] rounded-full shadow-md border-2 border-white dark:border-[#03051e] transition-transform duration-300 group-hover:scale-110"></div>
      
      {/* Content */}
      <h4 className="ml-3 text-base  font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300 group-hover:text-[#78a9ff]">
        {item.title}
      </h4>
      <span className="ml-3 block text-xs text-slate-500 dark:text-slate-400">
        {item.subtitle} • {item.period}
      </span>
    </div>
  ))}
</div>

  );
};

export default Timeline;
