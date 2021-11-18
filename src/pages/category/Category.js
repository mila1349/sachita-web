import React, {useEffect, useState, useRef} from 'react'
import Cat from './Cat'
import './style.scss'
import data from '../data.json'
import SplitText from '../../SplitText';


function Category() {

    return (
        <div className="category" >
            {
                data.map((item,index)=>(
                    <Cat
                        name={item.name}
                        folder={item.folder}
                        format={item.format}
                        show={item.show}
                        index={index}
                    />
                ))
            }
            
        </div>
    )
}

export default Category
