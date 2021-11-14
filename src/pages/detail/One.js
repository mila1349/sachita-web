import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import InView from 'react-intersection-observer'


function One({img, }) {
   

    return (
            <InView threshold={0.9} triggerOnce={true}>
            {({ ref, inView }) => (
            <div className="second">
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

export default One
