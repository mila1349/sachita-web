import React, {useEffect, useState, useRef} from 'react'
import Cat from './Cat'
import './style.scss'
import data from '../data.json'
import SplitText from '../../SplitText';


// const dataCategory=[
//     {
//         name:"Acrylic Paintings",
//         folder:"images/Acrylic Painting/",
//         format:"jpeg",
//         show:"5"
//     },
//     {
//         name:"Digital Design",
//         folder:"images/Digital Design/",
//         format:"JFIF",
//         show:"4"
//     },
//     {
//         name:"Pencil Drawings",
//         folder:"images/Pencil Drawings/",
//         format:"JPG",
//         show:"5"
//     },
//     {
//         name:"Water Color Paintings",
//         folder:"images/Water Color Paintings/",
//         format:"jpg",
//         show:"7"
//     },
    
// ]
function Category() {
    const container=useRef(null)
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    

    function scroll(){
        container.current.style.left=`-${window.scrollY}px`
    }

    useEffect(()=>{
        const top=(50*window.innerHeight/100)-(container.current.clientHeight/2);
        container.current.style.top=`${top}px`
        // document.body.style.height=`${width}px`;
        document.body.style.height=`${container.current.clientWidth}px`;
        // window.onscroll=()=>{
        //     container.current.style.left=`-${window.scrollY}px`
            
        // }
        
        window.addEventListener('scroll',scroll)

        return ()=>{
            window.removeEventListener('scroll',scroll)
        }
    },[])

    return (
        <div className="category" ref={container} >
            <div className="text">
                <span>
                    <h2>
                    <SplitText
                        initial={{ y: "100%" }}
                        animate="visible"
                        variants={{
                        visible: (i) => ({
                            y: 0,
                            transition: {
                            delay: i * 0.1,
                            duration: 0.2
                            }
                        })
                        }}
                        onAnimationComplete={()=>setFirst(true)}
                    >
                        Creative
                    </SplitText>
                    </h2>
                    <h2>
                    <SplitText
                        initial={{ y: "100%" }}
                        animate="visible"
                        variants={{
                        visible: (i) => ({
                            y: 0,
                            transition: {
                            delay: i * 0.1,
                            duration: 0.2
                            }
                        })
                        }}
                    >
                        Mind
                    </SplitText>   
                    </h2>
                </span>
                <span>
                    <h2>
                    <SplitText
                        initial={{ y: "100%" }}
                        animate={first&&"visible"}
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
                        Great
                    </SplitText>  
                    </h2>
                    <h2>
                    <SplitText
                        initial={{ y: "100%" }}
                        animate={first&&"visible"}
                        variants={{
                        visible: (i) => ({
                            y: 0,
                            transition: {
                            delay: i * 0.1,
                            duration: 1
                            }
                        })
                        }}
                        onAnimationComplete={()=>setSecond(true)}
                    >
                        Skill
                    </SplitText>  
                    </h2>
                </span>
            </div>
            
            {
                data.map((item,index)=>(
                    <Cat
                        name={item.name}
                        folder={item.folder}
                        format={item.format}
                        show={item.show}
                        index={index}
                        start={second}
                    />
                ))
            }
            
        </div>
    )
}

export default Category
