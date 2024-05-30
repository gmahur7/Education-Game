import React from "react";

const Info = (props) =>
{
    return(
        <div id='info'>
            <div><h1><i class="fa fa-info-circle" aria-hidden="true"></i> Instructions</h1></div>
            <div>Choose a number that results in a cofficient of 1 for the given variable. Once the number is placed on one side of the balance, you will not be able to modify the corresponding mathematical operator and stepper. To select a different number, you must click the reset button.</div>
            <button onClick={props.fn}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
        </div>
    )
}

export default Info;