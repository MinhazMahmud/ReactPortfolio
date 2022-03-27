import React from 'react'
import { Container } from 'react-bootstrap'
import { AiTwotoneSetting } from 'react-icons/ai'
import { GiThink, GiSkills } from 'react-icons/gi'


const Skills = () => {
    return (
        <Container className='my-3 px-6' style={{ backgroundColor: 'white' }}>
            <br />
            <h5><AiTwotoneSetting /> Skills</h5>
            <ul>

                <li><strong>SQA Testing:</strong> </li>

                <li> Basic knowledge of SDLC and STLC methodologies.</li>
                <li> Knowledge of Manual Testing and basic automation testing. </li>
                <li> Knowledge of writing test plan, test cases, test scenarios. </li>

                <li><strong>Programming Languages:</strong> Javascript, C ,C++</li>
                <li><strong>Frontend:</strong> HTML, CSS, Bootstrap.</li>
                <li><strong>Backend:</strong> C, Java, PHP, Python, ML.</li>
                <li><strong>Database:</strong> MYSQL, Django, Firebase.</li>
                <li><strong>Others:</strong> Git, Github , Bitbucket , Netlify, Heroku , Adobe Photoshop , Adobe illustrator , InDesign , Sketchup , Microsoft Office etc.</li>
                <br />
            </ul>

            <h5><GiThink /> Competitive Programming/Problem Solving</h5>
            <ul>
                <li>Solved 100+ coding problems from various online judges like codeforces, codechef, CSES etc.</li>
                <li>Participated in 5+ codeforces, codechef contests.</li>
                <li>Skilled in Data Structure, Algorithm, OOP etc.</li>
            </ul>
            <br />
            <h5><GiSkills /> Personal Skills</h5>
            <ul>
                <li>Have leadership skill.</li>
                <li>Experience with team work.</li>
                <li>Can learn and implement any technology within the shortest possible time.</li>
                <li>Ability to take initiative to solve problems.</li>
                <li>Ability to work under pressure.</li>
                <br />
            </ul>
            <br />
            <br />
        </Container>
    )
}

export default Skills
