import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <section className="word-box">
        <h2>{props.results.word}</h2>

        {props.results.phonetics &&
          props.results.phonetics.map(function (phonetic, index) {
            return <Phonetics phonetic={phonetic} key={index} />;
          })}
      </section>

      {props.results.meanings &&
        props.results.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} key={index} />;
        })}
    </div>
  );
}
