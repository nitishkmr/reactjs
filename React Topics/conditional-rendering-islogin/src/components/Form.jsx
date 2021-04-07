import React from "react";
import Input from "./Input";

// run the app
// always remember that whenever any eventlistener is called then "event" is also sent and values can be tapped by "event.target."

function Form(props) {
    const [headingName, setHeadingText] = React.useState("");
    const [isMousedOver, setbuttonBgColor] = React.useState(false);
    const [name, setName] = React.useState("");

    function handleClick(event) {           // we can send event as a parameter which has all the details - which button called it, name, value, placeholder etc
        setHeadingText(name);
    }
    function handleMouseOver() {
        setbuttonBgColor(true);
    }
    function handleMouseOut() {
        setbuttonBgColor(false);
    }
    function handleChange(event){
        setName(event.target.value);
    }

    return (
        <div>
            <h1>Hello {headingName}</h1>
            <form className="form">
                {/* <Input type="text" placeholder="Type here and press EL Button" /> */}
                {/* <Input type="password" placeholder="Password" /> */}
                <input
                    onChange={handleChange}
                    name="username" type="text" placeholder="Type here and press EL Button" />
                <input type="password" placeholder="Password" />

                {props.isRegistered ? null : <Input type="password" placeholder="Confirm Password" />}

                {props.isRegistered ? <button >Login</button>
                    :
                    <button >Register</button>} <br /> <br />

                {<button
                    type="button"
                    style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleClick}>
                    EventListener Button</button>}
            </form>
        </div>
    )
}

export default Form;
