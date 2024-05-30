import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { img2, img3 } from './Constant'
import Answer from './Answer'
import Info from './Info'

function Game() {
    const [inpLeft, setInpLeft] = useState("")
    const [inpRight, setInpRight] = useState("")
    const [oprInpLeft, setOprInpLeft] = useState("")
    const [oprInpRight, setOprInpRight] = useState("")
    const [ans,setAns]=useState('')
    const [cs,setCs]=useState('')
    const [info,setInfo]=useState('hide')
    const [dis,setDis]=useState(true)
    const [show,setShow]=useState('hide')
    const [col,setCol]=useState('')
    const [black,setBlack]=useState(false)
    const [a,setA]=useState(false)
    const [b,setB]=useState(false)

    const fnCheck = () => {
        setShow('show')
        setCs('correct')
        setBlack(true)
        if(inpLeft===`×3`&&inpRight===`×3`)
        {
            setAns('Correct')
            setCol('green')
        }
        else {
            setAns('Incorrect') 
            setCol('red')
        }
        setA(false)
        setB(false)
    }
    const fn=()=>
    {
        setShow('hide')
        setBlack(false)
        reset()
    }
    function sum(e) {
        if (e.target.parentElement.id === 'leftbtn') {
                let x = '+' + oprInpLeft
                setInpLeft(x)
                setA(true)
        }
        else {
                let x = '+' + oprInpRight
                setInpRight(x)
                setB(true)
        }
    }
    function min(e) {
        if (e.target.parentElement.id === 'leftbtn') {
                let x = '-' + oprInpLeft
                setInpLeft(x)
                setA(true)
        }
        else {
                let x = '-' + oprInpRight
                setInpRight(x)
                setB(true)
        }
    }
    function mun(e) {
        let s=e.target.innerHTML
        if (e.target.parentElement.id === 'leftbtn') {
            let x = s + oprInpLeft
            setInpLeft(x)
            setA(true)
        }
        else {
                let x = s + oprInpRight
                setInpRight(x)
                setB(true)
        }
    }
    function divi(e) {
        let s=e.target.innerHTML
        if (e.target.parentElement.id === 'leftbtn') {
                let x = s + oprInpLeft
                setInpLeft(x)
                setA(true)
        }
        else {
                let x = s + oprInpRight
                setInpRight(x)
                setB(true)
        }
    }
    function reset() {
        setInpLeft("")
        setOprInpLeft("")
        setInpRight("")
        setOprInpRight("")
    }
    const leftChange = (e) => {
        setOprInpLeft(e.target.value)
                if(a)
                {
                    let x=inpLeft[0]+e.target.value
                    setInpLeft(x)
                }
                else{
                        setInpLeft(e.target.value)

                }
        }
    const rightChange = (e) => {
        setOprInpRight(e.target.value)
            if (b) 
            {
                let x=inpRight[0]+e.target.value
                setInpRight(x)
            }
            else {
                setInpRight(e.target.value)
            }
        }

        function fninfo()
        {
            info==='hide'?setInfo('info'):setInfo('hide')
            black?setBlack(false):setBlack(true)
        }

        useEffect(()=>
        {
            let check=document.getElementById('check')
            if(a&&b&&inpLeft.length>1&&inpRight.length>1)
            {
                    setDis(false)
                    check.style.opacity=1
            }
            else
            {
                setDis(true)
                check.style.opacity=0.4
            }
        },[inpLeft,inpRight])

        return (
            <>
            { black?<div id='black'></div>:null }
            <div id='game'>
                <div id='left'>
                    <div>To solve the given equation, make tyhe cofficient of variable 1 using the simplest method. To do this, select a suitable mathmatical opertor and a number for each side of the equation.
                    </div>
                    <button>X</button>
                </div>
                <div id='right'>
                    <div id='top'>
                        <div></div>
                        <div id='eqn'>Solve For x <span><div>1</div><div>- x = 5</div><div>3</div></span></div>
                        <div id='icon'>
                            <div title='Info' onClick={fninfo}><i className="fa fa-info-circle" aria-hidden="true"></i></div>
                            <div title='Reset' onClick={reset}><i className="fa fa-repeat" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div id='imgbtm'>
                        <img src={img2} />
                    </div>
                    <div id='tarazu'>
                        <img src={img3} />
                    </div>
                    <div id='leftbtn'>
                        <button onClick={sum}>+</button>
                        <button onClick={min}>-</button>
                        <button onClick={mun}>&#215;</button>
                        <button onClick={divi}>&#247;</button>
                        <div><input type="text" onChange={leftChange} value={oprInpLeft} maxLength={2}/></div>
                    </div>
                    <div id='rightbtn'>
                        <button onClick={sum}>+</button>
                        <button onClick={min}>-</button>
                        <button onClick={mun}>&#215;</button>
                        <button onClick={divi}>&#247;</button>
                        <div><input type="text" onChange={rightChange} value={oprInpRight} maxLength={2}/></div>
                    </div>
                    <div id='leftcal'>
                        <div id='a'>
                            <div> 1</div>
                            <div> - x</div>
                            <div> 3</div>
                        </div>
                        <div id='b'>{inpLeft}</div>
                    </div>
                    <div id='rightcal'>
                        <div id='c'>5</div>
                        <div id='d'>{inpRight}</div>
                    </div>
                </div>
                <div id='check'>
                    <button id='ch' disabled={dis}onClick={fnCheck}>Check</button>
                </div>
            </div>
                {info==='info'?<Info fn={fninfo}/>:null}
                {show==='show'?<Answer col={col} fn={fn} ans={ans} cn={cs}/>:null}
            </>
        )
    }

    let root = ReactDOM.createRoot(document.getElementById('main'))
    root.render(<Game />)