import React from 'react'

function Answer(props)
{
    
    return(
        <div className={`${props.cn} ${props.col === 'green' ? 'green' : 'red' }`}>
            <div><h1>{props.ans==='Correct'?<i className="fa fa-check" aria-hidden="true"></i>:<i className="fa fa-arrows-alt" aria-hidden="true"></i>} {props.ans}</h1></div>
            <div><h4>Muntiply Both the side by 3;</h4></div>
            <div id='eqnComp'>
                <div>1</div>
                <div>- x &#215; 3 = 5 = 15</div>
                <div>3</div>
            </div>
            <div>So, X = 15</div>
            <div><button onClick={props.fn}>Confirm</button></div>
        </div>
    )
}

export default Answer;