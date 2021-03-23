import React from 'react'
import {services } from '../datalist'

function Services() {
    return (
        <>
           <div className="servicesDiv" id="services">  
                <div className="grid5" style={{backgroundImage: "url('/images/service-bg.png')", backgroundSize: "cover"}}>
                    <div>
                        <h1 className="serviceHead">MY <br/>SERVICES</h1>
                    </div>
                </div>   
                <div className="grid6">
                    <div>
                        <div className="servicesGrid">
                            {services.map(service => {
                                return (
                                    <div key={service.alt}>
                                        <img alt={service.alt} src={service.image} className="serviceImg"/>
                                        <p className="subtitle">{service.subtitle}</p>
                                        <p className="body">{service.body}</p><br/><br/>
                                    </div >
                                )
                            })}
                            
                        </div >
                        
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Services
