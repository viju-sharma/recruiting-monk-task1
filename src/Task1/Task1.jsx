import React from "react";
import { useState } from "react";
import Popup from "../components/popup";
import classes from './task1.module.css';

function Task1() {

    const [popup, showPopup] = useState(false)


    function handleClick(e) {
        console.log(popup)
        showPopup(true)
    }

    return (
      <div className={classes.background}>
        <button className={classes.contactUsBtn} onClick={handleClick}>
          Get in touch
        </button>
       <Popup showPopup={popup} setPopup={showPopup} />
      </div>
    );
}

export default Task1;