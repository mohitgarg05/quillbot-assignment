import React,{useState,useEffect} from 'react'
import Button from './button';
import List from './list';
import FirstList from '../listComponents/firstList';
import '../css/section1.css';
import '../css/section1mobile.css';

const Section1 = () => {

    const [SelectedIndex, setSelectedIndex] = useState(0)

    var width = window.innerWidth;
    useEffect(() => {
    
      if(width > 700){
        setTimeout(() => {
          setSelectedIndex((SelectedIndex+1)%4);
        }, 7000);
        return()=>clearInterval();

      }
      
    
    }, [SelectedIndex])
   
    
    const handleClick = (key,e)=>{
      e.preventDefault();
      setSelectedIndex(key);
    }



  return (
    <div className='conatiner_section1'>
      <div className='wrap'>
        <div className='heading_section1'>
          <h1>Aim High With Brilliant Writing</h1>
          <Button />
        </div>
        <div className='section1_wrapper'>
          <div className='section1_listcontent'>
            <ul>
                { width>900?
                  List.map((item,key)=>{
                  return(
                      <li onClick={(e)=>handleClick(key,e)}>
                        <h2  
                        style={{color:SelectedIndex===key?"black":""}} 
                        className={SelectedIndex===key?'border head': 'head'}>{item.heading}</h2>
                        <p className='par'>{item.para}</p>
                      </li>
                  )
                })
                :
                List.map((item,key)=>{
                  return(
                      <li onClick={(e)=>handleClick(key,e)}>
                        <FirstList img_one = {item.img1} img_two = {item.img2} />
                        <div className='mobile'>
                          <h2 className='head'>{item.heading}</h2>
                          <p className='par'>{item.para}</p>
                        </div>
                      </li>
                  )
                })
                }
            </ul>
          </div>
          <div className='section1_img'>
               { width>700?<FirstList img_one = {List[SelectedIndex].img1} img_two = {List[SelectedIndex].img2} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1