import React from "react";

const PercentsLine = ({ skill, level }: any) => {
  return (
    <div key={skill}>
      <div className="percents__titles">
        <h3 className="percents__name">{skill}</h3>
        <span className="percents__number">{level}%</span>
      </div>
      <div className="percents__bar">
        <span
          className="percents__percentage"
          style={{ width: `${level}%` }}
        ></span>
      </div>
    </div>
  );
};

const SkillsPercents = ({ currentSkill }: any) => {
  const percentsGroup = currentSkill.map((item: any) => (
    <PercentsLine key={item.skill} {...item} />
  ));

  return (
    <>
      <div className="percents__list">{percentsGroup}</div>
    </>
  );
};

export default SkillsPercents;
