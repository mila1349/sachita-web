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
                <p>Hi! My name is Sachita Kashyap and I am a junior at Monta Vista High School. At school, I currently play on the Field Hockey Team and I am an officer for the MV App and Web Development Club. In my free time, I love to dance Classical Indian Dance which I have been learning for the last nine years, take polaroid pictures and photography, and paint with acrylic on canvas. One of my favorite memories from dance includes competing at the Grand Prix Italia in Barcelona in the summer of 2018. My career interests explore the intersections between computer science, business, and using art through marketing and design. I'm interested in pursuing business-oriented and web design degrees. Thanks for visiting my website! If you're interested in messaging me directly, head over to the Contact Me page.</p>
            </div>
            <img src="sachi.jpg" alt="" className="main-img"/>
        </section>

        <section className="activities">
            <h1>My <b>Activities</b></h1>
            <div className="activity-container">
            <div className="activity">
                <h2>Techie Teen</h2>
                <h3>4 Hours a week</h3>
                <h3>Volunteer</h3>
                <p>Work with Senior citizens to teach them about technology and answer their questions. I also work with Seniors to help create websites for their art ranging from calligraphy to Chinese brush paintings.</p>
            </div>

            <div className="activity">
                <h2>Indian Classical Dance</h2>
                <h3>10 Hours a week</h3>
                <h3>Professional Company Dancer, Class Representative</h3>
                <p>Responsibilities include attending weekly classes to learn and being a teacher’s assistant for less experienced classes. Representatives must volunteer to communicate schedules and workshop timings to other students, and collect fees, costume measurements, and take attendance during every class.</p>
            </div>

            <div className="activity">
                <h2>Field Hockey</h2>
                <h3>5 Hours a week</h3>
                <h3>Team Player</h3>
                <p>Work in a team environment and condition, strategize, and practice with my team every day during season.</p>
            </div>

            <div className="activity">
                <h2>Tech Museum Volunteering</h2>
                <h3>4 Hours a week</h3>
                <h3>Volunteer, head of ticketing</h3>
                <p>Work with young kids and ticket in adults. I am also a robotics helper, where I help rewire the robots in the museum.</p>
            </div>
            </div>
        </section>

        <section className="courses">
            <h1>Highlited <b>Courses</b></h1>
            <div className="activity-container">
                <div className="course">
                    <h3>Advanced Principles of Engineering Design</h3>
                    <p>This course is the follow up course to Intro to Engineering Design which I took Sophomore year. Through this class, I learnt many valuable skills like AutoDesk Inventor which is a tool to CAD automata pieces like pulleys, screws, and . We also learnt about the design process and worked in groups to simulate a real world engineering environment.</p>
                </div>

                <div className="course">
                    <h3>STEM</h3>
                    <p>This course was a hand-on research class where all the students brainstorm and create their own experiment with all of the procedural steps and means of data collection are identified. My project was the "Efficiency of the bacteria Lactobacillus Acidophilus and fermented milk in repopulating the microbiome post-antibiotic regimen". I collected my data by growing bacteria cultures and performing statistical tests on them, and presented my findings at the Synopsis Science Fair.</p>
                </div>

                <div className="course">
                    <h3>Commercial Art & Design</h3>
                    <p>This art class explores UI/UX and real world applications of digital art and design and the implications of good design. We will build a fully functioning product at the end of the course, including a marketing plan.</p>
                </div>

                <div className="course">
                    <h3>AP Comupter Science Principles</h3>
                    <p>APCSP focuses on the design process and how computer products can be designed to help people with different needs. We will design a tangible product at the end of the year that targets a person's needs through coding.</p>
                </div>

                <div className="course">
                    <h3>JAVA</h3>
                    <p>This class taught me not only how to code in JAVA, but about software and hardware inputs and ouputs, GUI, user security, and privacy. Sophomore year I coded a game from scratch using GUI and JAVA about natural disasters to educate students about the different types and conditions of natural disasters.</p>
                </div>
            </div>
        </section>
    </div>
)
}
