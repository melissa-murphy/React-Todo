import React from "react";

export default function Todo(props) {
  let classNames = "item";
  if (props.item.completed) {
    classNames += " completed";
  }

  function taskDoneHere() {
    props.taskDone(props.item.id);
  }
  return (
    <div className={classNames} onClick={taskDoneHere}>
      <p>{props.item.taskName}</p>
    </div>
  );
}
