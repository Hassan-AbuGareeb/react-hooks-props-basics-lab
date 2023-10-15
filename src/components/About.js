import React from "react";
import Links from "./Links.js";

function About(props) {

  function returnPElement(bio){
    if( bio === null || bio === "" || bio === undefined) 
      return null;
    return (
      <p>{props.bio}</p>
    );
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {returnPElement(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links text="Links" github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
