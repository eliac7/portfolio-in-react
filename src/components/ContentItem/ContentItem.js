import React from "react";

function ContentItem(props) {
  return (
    <li data-aos="fade-up">
      <div className="skillsItem">
        <img src={props.src} alt={"Logo of " + props.name} loading="lazy" />
        <p>{props.name}</p>
      </div>
    </li>
  );
}

export default ContentItem;
