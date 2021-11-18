import React, {useRef, useEffect, useState} from 'react'
import mapboxgl from 'mapbox-gl';
import apiKey from './EmailKey'
import * as emailjs from "emailjs-com";
//eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import './style.scss'

// mapboxgl.workerClass = MapboxWorker;
// mapboxgl.accessToken = "pk.eyJ1IjoibWlsYXJvemkiLCJhIjoiY2txdDM1M2JvMDQzejJ2cDh4MDdwMGpkeSJ9.LlwSpBpanxvRXROAbS1ZrA";

function Contact() {
    // const mapContainerRef = useRef(null);

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [company, setCompany]=useState("")
    const [subject, setSubject]=useState("")
    const [message, setMessage]=useState("")


    // initialize map when component mounts
    // useEffect(() => {
    //     const map = new mapboxgl.Map({
    //         container: mapContainerRef.current,
    //         // See style options here: https://docs.mapbox.com/api/maps/#styles
    //         style: 'mapbox://styles/milarozi/ckssvcwbj3lhs17qivg0mgcdo',
    //         center: [107.621035, -6.883534],
    //         zoom: 15,
    //     });

    //     // add navigation control (the +/- zoom buttons)
    //     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    //     // clean up on unmount
    //     return () => map.remove();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function handleSubmit(e){
        e.preventDefault();
        console.log("masukkk")
        emailjs.send(apiKey.SERVICE_ID,apiKey.TEMPLATE_ID,{
            subject: subject,
            from_name: name,
            email:email,
            company: company,
            message: message,
        },apiKey.USER_ID).then((result)=>{
            alert("Message Sent", result.text);
        })

    }
    return (
        <div className="contact">

            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <h3>Interested Working With Me?</h3>
                    <div className="input-box">
                        <span>
                            <h3>Name</h3>
                            <input type="text" onChange={e=>setName(e.target.value)} required/>
                        </span>
                        <span>
                            <h3>Company</h3>
                            <input type="text" onChange={e=>setCompany(e.target.value)}/>
                        </span>
                    </div>

                    <div className="input-box">
                        <span>
                            <h3>Email</h3>
                            <input type="email" onChange={e=>setEmail(e.target.value)} required/>
                        </span>
                        <span>
                            <h3>Subject</h3>
                            <input type="text" onChange={e=>setSubject(e.target.value)}/>
                        </span>
                    </div>

                    <div className="message">
                        <h3>Message</h3>
                        <input type="text" onChange={e=>setMessage(e.target.value)} required/>
                    </div>

                    <button>
                        <h3>Send</h3>
                    </button>
                </form>

                {/* <div className="contact-box" >
                    <div className="map" ref={mapContainerRef}></div>
                </div> */}
            </div>
        </div>
    )
}

export default Contact