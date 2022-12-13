import React from "react";

const SkillsData = ({ skill }: any) => {
  const skillsItem = skill.map((item: any) => (
    <div className="skills__data" key={item.skill}>
      <div className="skills__titles">
        <h3 className="skills__name">{item.skill}</h3>
        <span className="skills__number">{item.level}%</span>
      </div>
      <div className="skills__bar">
        <span
          className="skills__percentage"
          style={{ width: `${item.level}%` }}
        ></span>
      </div>
    </div>
  ));

  return (
    <>
      <div className="skills__list">{skillsItem}</div>
    </>
  );
};

export default SkillsData;
