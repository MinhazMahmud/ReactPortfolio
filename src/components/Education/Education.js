import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import './Education.css'

const Education = () => {
    return (
        <Container className='my-3 px-6' style={{ backgroundColor: 'white' }}>
            <h3><BsFillBriefcaseFill /> Experience</h3>
            <ul>

                
                <li>
                    <p> <strong>Executive</strong>
                        <br />SEBPO 
                        <br /> - Google Ad Manager (GAM) , Ad Trafficking and Billing , SS Perform.
                        <br /><span className="date-place">Aprill 2022 - Current</span>
                        <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>
    

                <li>
                    <p> <strong>Data Operator /SEO </strong>
                        <br />Assitant Perfect (Remote)
                        <br /> Data Operation , Amazon Platform , Content Writting , Data Entry.
                        <br /><span className="date-place">December 2021 - Aprill 2022</span>
                        <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

                <li>
                    <p> <strong>Data Analyst</strong>
                        <br />Quantigo AI
                        <br /> - Managing servers and database , Image Annotation , Image Tagging.
                        <br /><span className="date-place">January 2022 - March 2022</span>
                        <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

            </ul>

            <h3> <BsFillBriefcaseFill /> Tranning </h3>
            <ul>
                <li>
                    <p> <strong> UY Lab </strong>
                        <br />Graphics Course
                        <br /><span className="date-place">January 2018 - Aprill 2018</span>
                        <br /><span className="date-place">Mohakhali , Dhaka </span></p>


                </li>
            </ul>




            <h3><FaGraduationCap /> Education</h3>
            <ul>
                <li>
                    <p> <strong>North South University</strong>
                        <br />B.Sc in Computer Science And Engineering
                        <br /><span className="date-place">January 2017 - December 2021</span>
                        <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

                <li>
                    <p> <strong>BCIC College</strong>
                        <br />Higher Secondary School Certificate (HSC)
                        <br /><span className="date-place">June 2014 - June 2016</span>
                        <br /><span className="date-place">Mirpur-1 , Dhaka-1216 Bangladesh</span> </p>
                </li>

                <li>
                    <p> <strong>Monipur High School And College</strong>
                        <br />Secondary School Certificate (SSC)
                        <br /><span className="date-place">January 2004 - December 2014</span>
                        <br /><span className="date-place">Mirpur-2 , Dhaka-1216 Bangladesh</span></p>
                </li>
            </ul>
            <br />
            <br />
        </Container>
    )
}

export default Education
