import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Loading.css"


function Loading() {
  return (
    <div id="Loading_div">
    <ScaleLoader color="#36d7b7" height={60} width={5} />
    </div>
  )
}

export default Loading
