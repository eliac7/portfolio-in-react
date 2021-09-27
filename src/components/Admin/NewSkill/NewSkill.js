import React from "react";
import "./NewSkill.css";
import Header from "../../Header/Header";

function NewSkill() {
  const HeaderArray = [
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
  ];
  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main">hi</div>
    </>
  );
}

export default NewSkill;
