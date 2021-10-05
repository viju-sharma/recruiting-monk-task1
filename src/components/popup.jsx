import React, {useState} from 'react';
import classes from './popup.module.css';
import { FcPrevious } from "react-icons/fc";
function Popup(props) {


  const [Value, setValue] = useState({name:"", email:"",mobile:""})

  console.log(Value);

  const handleSubmit = (e) => {
    alert(" Name : " + Value.name +"\n Email : " + Value.email + "\n Mobile : " + Value.mobile )
  }
  const handleChange = (e)=>{
    setValue({
      ...Value,
      [e.target.name] : e.target.value
    })
  };


    return  (
      <div className={props.showPopup ? [classes.popupWindow, classes.show].join(' ') : [classes.popupWindow, classes.hide].join(' ')}>
        <div className={classes.contactUsForm}>
          <p>Contact Us</p>
          <FcPrevious
            onClick={() => {
              props.setPopup(false);
            }}
            style={{
              float: "right",
              padding: ".5rem",
              marginBottom: "2rem",
              border: "2px solid rgb(43, 143, 224)",
              borderRadius: "50%",
              position: "absolute",
              right: "1rem",
              top: "1",
              display: "inline-block",
            }}
          />
          <form className={classes.floatContainer} onSubmit={handleSubmit}>
            <div className={classes.formGroup}>
              <div className={classes.labelInput}>
                <input
                  className={classes.inputFields}
                  id="name"
                  type="text"
                  required
                  name="name"
                  placeholder="vijender"
                  onChange={handleChange}

                ></input>
                <label className={classes.labels} htmlFor="name">
                  Your Name
                </label>
              </div>
              <div className={classes.labelInput}>
                <input
                  className={classes.inputFields}
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="vijender@mail.com"
                  onChange={handleChange}
                ></input>
                <label className={classes.labels} htmlFor="email">
                  Email
                </label>
              </div>
              <div className={classes.labelInput}>
                <input
                  className={classes.inputFields}
                  id="mobile"
                  type="tel"
                  pattern="[0-9]{9,14}"
                  name="mobile"
                  placeholder="9876543210"
                  minLength="9"
                  maxLength="14"
                  required
                  onChange={handleChange}
                ></input>
                <label className={classes.labels} htmlFor="mobile">
                  Mobile
                </label>
              </div>
              <div className={classes.buttonGroup}>
                <button
                  className={classes.contactMe}
                  type="submit"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Popup
