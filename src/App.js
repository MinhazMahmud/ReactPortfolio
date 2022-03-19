import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Publications from './components/Publications/Publications'
import SideBar from './components/SideBar/SideBar'


const App = () => {
  return (
    <Router>
        <Navbar />
     <Container>
    <Row>
                <Col md={9}>
                            <Route path="/" exact component={About} />
                            <Route path="/education" exact component={Education} />
                            <Route path="/skills" exact component={Skills} />
                            <Route path="/projects" exact component={Projects} />
                            <Route path="/publications" exact component={Publications} />
                </Col>
                <Col md={3}>
            <SideBar />
              </Col>
            </Row>
            </Container>
    </Router>
  )
}

export default App
