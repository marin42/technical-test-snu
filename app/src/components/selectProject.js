import React from "react";

// eslint-disable-next-line react/display-name
export default ({ value, projectList, onChange, defaultText = "All projects", ...otherProps }) => {
  return (
    <div>
      <select
        className="w-[180px] bg-[#FFFFFF] text-[12px] text-[#212325] font-semibold py-[4px] px-[4px] rounded-[5px] border-r-[16px] border-[transparent] cursor-pointer shadow-sm"
        name="project"
        value={value || ""}
        onChange={(e) => {
          e.preventDefault();
          const f = projectList.find((f) => e.target.value === f.name) || "";
          onChange(f);
        }}
        {...otherProps}>
        <option disabled>Project</option>
        <option value={""}>{defaultText}</option>
        {projectList
          .sort(function (a, b) {
            if (a.name?.toLowerCase() < b.name?.toLowerCase()) return -1;
            if (a.name?.toLowerCase() > b.name?.toLowerCase()) return 1;
            return 0;
          })
          .map((e) => {
            return (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};
