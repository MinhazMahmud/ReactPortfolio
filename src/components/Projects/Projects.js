import React from 'react'
import { Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap'
import project1 from './images/project1.PNG'
import project2 from './images/project2.PNG'
import project3 from './images/project3.PNG'

import project5 from './images/project5.PNG'
import { AiTwotoneHeart, AiTwotoneTag } from 'react-icons/ai'

const Projects = () => {
    return (
      <Container>
          <br />
        <h5 style={{paddingBottom: '10px'}}>Projects <AiTwotoneHeart style={{color: '#D22633'}} /></h5> 
        {/***************project 1***********/}
      <CardGroup style={{maxHeight: '100%'}}>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>

        <Card.Title> Breast Cancer Prediction </Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>

          In our Web-App, We can accurately determine whether or not a person has breast cancer and provide individuals with advice on how to deal with breast cancer. We have a history-Page, About-Us Page, User-Profile Page, Contact-Us Page, and a History-Page. Admin has the ability to Add, Modify, Remove, Delete Users, Make a user an Admin and so on.
         
          <br />
          <AiTwotoneTag/> Stack: Machine Learning, Python, Django, Bootstrap, HTML, CSS, Google-Colab.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://drive.google.com/file/d/1Tzk4oTBePe0eu6DmyE-WPhU7JrVWn4Zr/view?usp=sharing" target="__blank">VIDEO</Button> &nbsp;
          <Button variant="dark" href="https://github.com/MinhazMahmud/BreastCancerPredection" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project5} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
      
      {/***************project 2***********/}
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
        <Card.Title>Pet Shop</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          This website is designed for animal lovers who want to buy or sell their Pets, Foods, and Medications. Anyone may post images of their pets and provide details about them to sell on our website. Our website needs users to sign up or sign for save data in database.<strong style={{fontSize: '14px'}}> [Feel free to email me to get access as admin]</strong> 
          <br />
          <AiTwotoneTag/> Stack: PHP, MySQL, Bootstrap, HTML, CSS.
          <br />
          <br />
          <div>
          <Button variant="danger" href="   " target="__blank">LIVE</Button> &nbsp;
          <Button variant="dark" href="https://github.com/MinhazMahmud/PetShop" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>
        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project2} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
    {/***************project 3***********/}
    <CardGroup style={{maxHeight: '100%'}}>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>Fahim University</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          This only the University Frontend UI/UX Part. Project Under Going..
          <br />
          <AiTwotoneTag/> Stack: Javascript, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://infallible-mirzakhani-085f14.netlify.app/" target="__blank">VIDEO</Button> &nbsp;
          <Button variant="dark" href="https://github.com/MinhazMahmud/FahimUniversity" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project1} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
      {/***************project 4***********/}
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          My portfolio site is another project which is builded by me from scratch. My portfolio site shows information about me, my education, experience, skills, projects and publications.
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://minhazmahmud.github.io/Portfolio22/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="dark" href="https://github.com/MinhazMahmud/Portfolio22" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>
        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project3} />
        </Col>
        </Row>
      </Card>
    </CardGroup>



      {/***************project 5***********
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>Covid-19 Data Tracker</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          Covid-19 Data Tracker is an app made with React, which track covid -19 data for more than 200 countries and regions. Data is provided by an API. User can search covid-19 data for any country or region.

          <br />
          <AiTwotoneTag/> Stack: Javascript, React, HTML, CSS
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://covid19-tareq.herokuapp.com/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="dark" href="https://github.com/AzizulTareq/Covid-19-Data-Tracker-React" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>
        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project4} />
        </Col>
        </Row>
      </Card>
    </CardGroup> 

      
      ****/}


    <br />
        
    </Container>
    )
}

export default Projects

