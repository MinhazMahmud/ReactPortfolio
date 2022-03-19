import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import './Education.css'

const Education = () => {
    return (
        <Container className='my-3 px-6' style={{backgroundColor: 'white'}}>
            <h3><BsFillBriefcaseFill/> Experience</h3>
            <ul>
            <li>
                <p> <strong>Data Analyst</strong>
                <br />Quantigo AI (Remote)
                <br /> - Developing and maintaining web applications, managing servers and database, Image Annotation.
                <br /><span className="date-place">December 2022 - Current</span>
                <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

                <li>
                <p> <strong>Computer Operator</strong>
                <br />Assitant Perfect (Remote)
                <br /> Amazon Platform , Content Writter, SEO , Data Entry.
                <br /><span className="date-place">December 2021 - Current</span>
                <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

                <li>
                <p> <strong>Data Analyst</strong>
                <br />Quantigo AI
                <br /> - Developing and maintaining web applications, managing servers and database, Image Annotation.
                <br /><span className="date-place">December 2022 - Current</span>
                <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

            </ul>
            <h3><FaGraduationCap /> Education</h3>
            <ul>
                <li>
                <p> <strong>North South University</strong>
                <br />B.Sc in Computer Science & Engineering
                <br /><span className="date-place">January 2017 - May 2021</span>
                <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

                <li>
                <p> <strong>BCIC College</strong>
                <br />Higher Secondary School Certificate (HSC)
                <br /><span className="date-place">June 2014 - June 2016</span>
                <br /><span className="date-place">Mirpur-1 , Dhaka-1216 Bangladesh</span> </p>
                </li>

                <li>
                <p> <strong>Monipur High School & College</strong>
                <br />Secondary School Certificate
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
