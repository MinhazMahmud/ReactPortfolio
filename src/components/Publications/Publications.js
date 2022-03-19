import React from 'react'
import { Container } from 'react-bootstrap'
import { IoIosPaper } from 'react-icons/io'
import { BiLinkExternal } from 'react-icons/bi'

const Publications = () => {
    return (
        <Container className='my-3 px-6' style={{backgroundColor: 'white'}}>
            <br />
            <h5><IoIosPaper /> Research Papers</h5>
            <ul>
                <li style={{textAlign: 'justify'}}>
                <p> <strong>"Bio-fuel Production Using Biodegradable Waste"</strong> </p>
                    <strong>Supervisor: Ahmed Fahmin (AFN1) Lecturer , North South University  </strong>

                    <p> The objective of our project is to utilize biodegradable waste such as kitchen wastes, food wastes, and so on. In this project, we have built up a small-scale biogas plant and a monitoring system to meet up the expectation of our cooking gas by producing biogas utilizing our own kitchen wastes and also monitor that biogas plant so that the proportion of raw materials remain exactly the amount needed and gas production is being continued. As a result, our project's ultimate aim is to create a prototype that containso Biogas Plant o Integrated monitoring system o Links to the house to provide gas o Devices to monitor the real data through WIFI. <br /> Link: <a style={{textDecoration: 'none'}} target="blank" href=" https://drive.google.com/file/d/1-OZoUBYrZKQODxg7w3njppZ844CH34sN/view?usp=sharing"><span style={{color: '#08B9CD', fontWeight: 'bold'}}>https://drive.google.com/file/d/1-OZoUBYrZKQODxg7w3njppZ844CH34sN/view?usp=sharing<BiLinkExternal/></span> PDF File </a></p>
                </li>
                <br />
               
            </ul> 
            <br />
            <br />
        </Container>
    )
}

export default Publications
