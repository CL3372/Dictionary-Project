import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  if (!props.meaning.definitions || props.meaning.definitions.length === 0) {
    return null;
  }

  let definition = props.meaning.definitions[0];

  return (
    <section className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{definition.definition}</p>

      {definition.example && <p className="example">"{definition.example}"</p>}

      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <p className="synonyms">
          <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
        </p>
      )}
    </section>
  );
}
