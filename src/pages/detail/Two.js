import React from 'react'
import InView from 'react-intersection-observer'
import {motion} from 'framer-motion'
import ImageZoom from "react-image-zooom";


function Two({img, trigger}) {
    
    function Comp(){
        return(
            <InView threshold={0.5} triggerOnce={true}>
        {({ ref, inView }) => (
        <div className="third">
            <motion.div className="img-zoom"
                ref={ref}
                initial={{opacity:0, scale:0.8}}
                animate={inView&&{opacity:1, scale:[0.8, 1.1, 1]}}
            >
               <ImageZoom
                    src={img} 
                    alt=""
                    zoomStyle='opacity:0.1;'
                /> 
            </motion.div>
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
