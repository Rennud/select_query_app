import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";
import "codemirror/theme/monokai.css";
import { Controlled as ControlledEditor } from "react-codemirror2";

/* Handling whole editor, set up classes, props, settings needed
for highlighting(SQL SYNTAX). Using CodeMirror. */
export default function Editor(props: any) {
  const { value, onChange, language } = props;

  function handleChange(editor: any, data: any, value: any) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      {/* Editor settings */}
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          mode: language,
          theme: "monokai",
          lineNumbers: true,
        }}
      />
      <div className="btn-container">
        <button className="btn-editor-run" onClick={props.sendQuery}>
          <i className="material-icons">play_arrow</i>Spustit kód
        </button>
        <button className="btn-editor-reset" onClick={props.cleanEditor}>
          <i className="material-icons">replay</i>
          Reset
        </button>
      </div>
    </div>
  );
}