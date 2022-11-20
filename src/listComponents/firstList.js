import React,{useState,useEffect} from 'react'
import './firstlist.css';
import 'animate.css';
const FirstList = (props) => {

    return (
    <div className='firtsList_con'>
        <div className='first_wrap  '>
            <img className={props.classN}  src= {props.img_one} ></img>
        </div>
        <div className='first_box '>
           <img className={props.classN} src= {props.img_two}></img>
        </div>
    </div>
  )
}

export default FirstList