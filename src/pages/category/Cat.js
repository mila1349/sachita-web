import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import InView from 'react-intersection-observer'



function Cat({name, folder, format, show, index, start}) {
    const [text, setText]=useState(false)
    return (
        <div className="cat">
            <motion.div className="img"
            
            >
                <Link
                    to={{
                    pathname:"/detail",
                    state:{
                        index:`${index}`,
                    }
                    }}
                >
                <InView threshold={0.5} triggerOnce={true}>
        {({ ref, inView }) => (
                <motion.img src={folder+show+"."+format} alt="" 
                    ref={ref}
                    initial={{opacity:0, scale:0.8}}
                    animate={inView&&{opacity:1, scale:[0.8, 1.1, 1]}} 
                    onAnimationComplete={()=>setText(true)}
                />
        )}
        </InView>

                </Link>
                <motion.h3
                    initial={{opacity:0}}
                    animate={text&&{opacity:1}}
                >{name}</motion.h3>
            </motion.div>
            
        </div>
    )
}

export default Cat
