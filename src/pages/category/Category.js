import React, {useEffect, useState, useRef} from 'react'
import Cat from './Cat'
import './style.scss'
import data from '../data.json'
import SplitText from '../../SplitText';


function Category() {
    const container=useRef(null)
    const p=useRef(null)
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    

    function scroll(){
        container.current.style.left=`-${window.scrollY}px`
        if(window.scrollY>=50){
            p.current.style.opacity=0
        }else{
            p.current.style.opacity=1
        }
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
            document.body.style.height=`unset`;
        }
    },[])

    return (
        <div className="wrapper">
        <div className="category" ref={container} >
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
        <p className="scroll-down" ref={p}>Scroll down to see</p>
        </div>
    )
}

export default Category
