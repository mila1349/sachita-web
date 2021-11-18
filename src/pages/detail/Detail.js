import React,{useEffect, useState} from 'react'
import './style.scss'
import { useLocation } from "react-router-dom"
import data from '../data.json'
import One from './One'
import Two from './Two'
import SplitText from '../../SplitText';
import {motion} from 'framer-motion'
import Nav from '../../pages/Nav' 
import ImageZoom from "react-image-zooom";

export default function Deatil(){
    const location = useLocation()
    const index=location.state.index
    const [trigger, setTrigger]=useState(false)

    return(
        <div className="detail">
            <Nav/>
            <h1>
                <SplitText
                    initial={{ y: "100%" }}
                    animate="visible"
                    variants={{
                    visible: (i) => ({
                        y: 0,
                        transition: {
                        delay: i * 0.1,
                        duration: 1
                        }
                    })
                    }}
                >
                    {data[index].name}
                </SplitText>
            </h1>
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
            >- Sachita Kashyap -</motion.p>
            <div className="img-wrapper">
                <div className="center">
                <motion.div className="img-zoom"
                    initial={{opacity:0, scale:0.8}}
                    animate={{opacity:1, scale:[0.8, 1.1, 1]}}
                    onAnimationComplete={()=>setTrigger(true)}
                >
                   <ImageZoom
                        src={data[index].folder+"1"+"."+data[index].format} 
                        alt=""
                        className="zoom"
                    /> 
                </motion.div>
                

                    {/* <motion.img src={data[index].folder+"1"+"."+data[index].format} alt=""
                       initial={{opacity:0, scale:0.8}}
                         animate={{opacity:1, scale:[0.8, 1.1, 1]}}
                         onAnimationComplete={()=>setTrigger(true)}
                     /> */}
                </div>

                {
                    data[index].img.map(item=>{
                        if (item%2===0) {
                            return(
                                <Two
                                    img={data[index].folder+item+"."+data[index].format}
                                   trigger={trigger}
                                />
                            )
                        }else{
                            return(
                                <One
                                    img={data[index].folder+item+"."+data[index].format}
                                   trigger={trigger}
                                />
                            )
                        }
                    })
                }
            </div>
        
        </div>
    )
}