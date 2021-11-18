import React, {useEffect, useState} from 'react'
import InView from 'react-intersection-observer'
import {motion} from 'framer-motion'

function Two({img, trigger}) {
    
    function Comp(){
        return(
            <InView threshold={0.5} triggerOnce={true}>
        {({ ref, inView }) => (
        <div className="third">
            <motion.img src={img} alt="" 
                ref={ref}
                initial={{opacity:0, scale:0.8}}
                animate={inView&&{opacity:1, scale:[0.8, 1.1, 1]}}
            />
        </div>
        )}
        </InView>
        )
    }

    return (
        <div className="nah">
            {trigger&&<Comp/>}
        </div>
            
    )
}

export default Two
