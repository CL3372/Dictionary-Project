import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  if (!props.meaning.definition) {
    return null;
  }

  return (
    <section className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>

      {props.meaning.example && (
        <p className="example">"{props.meaning.example}"</p>
      )}

      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <p className="synonyms">
          <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
        </p>
      )}
    </section>
  );
}
