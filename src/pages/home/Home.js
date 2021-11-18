import React, {useState} from 'react'
import './style.scss'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'


function Home() {
    const [pulseOne, setPulseOne]=useState(false);
    const [pulseTwo, setPulseTwo]=useState(false);
    const [pulseThree, setPulseThree]=useState(false);

    const img1Variant={
        hidden:{
            translateX:"-100vw",
            translateY:"-50vw"
        },
        visible:{
            translateX:0,
            translateY:0,
            transition:{
                duration:2
            }
        }
    }

    const img2Variant={
        hidden:{
            translateX:"100vw",
            translateY:"-50vw"
        },
        visible:{
            translateX:0,
            translateY:0,
            transition:{
                duration:2
            }
        }
    }

    const img3Variant={
        hidden:{
            translateX:"100vw",
            translateY:"50vw"
        },
        visible:{
            translateX:0,
            translateY:0,
            transition:{
                duration:2
            }
        }
    }

    const img4Variant={
        hidden:{
            translateX:"-100vw",
            translateY:"50vw"
        },
        visible:{
            translateX:0,
            translateY:0,
            transition:{
                duration:2
            }
        }
    }

    return (
        <div className="home" >
            <motion.img src="images/Acrylic Painting/5.jpeg" alt="" className="img1"
                variants={img1Variant}
                initial="hidden"
                animate="visible"
            />
            <motion.img src="images/Acrylic Painting/2.jpeg" alt="" className="img2"
                variants={img2Variant}
                initial="hidden"
                animate="visible"
            />
            <motion.img src="images/Digital Design/1.jfif" alt="" className="img3"
                variants={img3Variant}
                initial="hidden"
                animate="visible"
            />
            <motion.img src="images/Digital Design/5.jfif" alt="" className="img4"
                variants={img4Variant}
                initial="hidden"
                animate="visible"
                onAnimationComplete={()=>setPulseOne(true)}
            />

            <motion.h1
                initial={{opacity:0}}
                animate={pulseOne&&{
                    opacity:1,
                    duration:2
                }}
                onAnimationComplete={()=>setPulseTwo(true)}
            >Sachita</motion.h1>
            

            <motion.h1
                 initial={{opacity:0}}
                 animate={pulseTwo&&{
                     opacity:1,
                     duration:2
                 }}
                onAnimationComplete={()=>setPulseThree(true)}
            >Kashyap</motion.h1>

            <motion.ul
            initial={{opacity:0}}
            animate={pulseThree&&{
                opacity:1,
                duration:2
            }}
            >
                <Link to="/category">
                    <li>Works</li>
                </Link>
                <Link to="/profile">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                
            </motion.ul>
            
        </div>
    )
}

export default Home
