import React from 'react'
import './style.scss'

export default function Profile(){
return(
    <div className="profile">
        <section className="tentang" style={{backgroundImage:"url(sky.jpg)"}}>
            <div className="about">
                <div className="gambar">
                    <img src="sachi.jpg" alt="" />
                </div>
                <h1>Sachita Kashyap</h1>
                <h2>Problem solver, visual storyteller and aspiring UX designer.</h2>
                <p>Hi! My name is Sachita Kashyap and I am a junior at Monta Vista High School. At school, I currently play on the Field Hockey Team and I am an officer for the MV App and Web Development Club. In my free time, I love to dance Classical Indian Dance which I have been learning for the last nine years, take polaroid pictures and photography, and paint with acrylic on canvas. One of my favorite memories from dance includes competing at the Grand Prix Italia in Barcelona in the summer of 2019. My career interests explore the intersections between computer science, business, and using art through marketing and design. I'm interested in pursuing business-oriented and web design degrees. Thanks for visiting my website! If you're interested in messaging me directly, head over to the Contact Me page.</p>
            </div>
            <img src="sachi.jpg" alt="" className="main-img"/>
        </section>

        
    </div>
)
}
