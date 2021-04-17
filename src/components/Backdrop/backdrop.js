import React from "react";

const backdrop = (props) =>
  props.show ? <div className="backdrop" onClick={props.cancel}></div> : null;

export default backdrop;
