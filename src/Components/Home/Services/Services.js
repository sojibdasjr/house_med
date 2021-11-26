import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';

import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('dactorsData.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className="container">
             <h1 className="text-center my-5">Bangladesh <span style={{color:"orange"}}>Doctors Lists</span> </h1>
            <Row xs={1} md={2} lg={3} className="g-4 ">
            {services.map(service=><Service
            key = {service.id}
            service = {service}
            ></Service>)}
            </Row>
            

               
        </div>
    );
};

export default Services;