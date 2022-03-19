import React, {useState, useEffect} from 'react';
import { Image, Container, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { SiSkype } from 'react-icons/si'
import myphoto from './myphoto.PNG'
import axios from 'axios'
import './SideBar.css'
import resume from './MinhazMahmud_CV.pdf'

const SideBar = () => {

  const [viewers, setViewers] = useState(0)

    useEffect(() => {
      const getViewers = async () => {
      try {
        const counter = await axios.get('https://api.countapi.xyz/update/azizultareq.netlify.com/b8f05964-0e9b-46a8-93b0-b6790140646a/?amount=1');
        setViewers(counter.data.value)
      } catch(err){
        console.log(err)
      }
    }
    getViewers();
    
  }, []);

  return (
  <Container id="sidebar" style={{backgroundColor: 'rgb(240, 238, 238)', height: '650px'}}>
    <section id="intro">
      <br />
      <br />
      <br />
     
        <div style={{ textAlign: 'center'}}>
      <Image style={{height: '130px', width: '130px'}} src={myphoto} roundedCircle />
      <header>
        <br />
        <h5 className="sidebar_name">Minhaz Mahmud</h5>
        <p>A Full-stack Software Engineer <br /><br /> <MdEmail /> fahim.minhaz@gmail.com <br /> <GoLocation />Mirpur, Dhaka, Bangladesh <br/> <div style={{paddingTop: '12px'}}><a href={resume} download><Button variant="outline-dark">Download Resume</Button>{' '}</a></div></p>
      </header>
      </div>
      <br />
    </section>

    <section className="blurb">
      <p>
      <a className="all_links" href = "mailto: fahim.minhaz@gmail.com" target="__blank"><GoLocation /> Email</a> <br />
      <a className="all_links" href="https://github.com/MinhazMahmud" target="__blank"><AiFillGithub /> Github</a> <br />
      <a className="all_links" href="https://www.linkedin.com/in/minhaz-mahmud-4382a5ba" target="__blank"><AiFillLinkedin /> Linkedin</a> <br />
      <a className="all_links"  href="https://join.skype.com/invite/xUtNObSlqt4t" target="__blank"><SiSkype /> Skype</a>
      </p>
    </section>
    <p><span className="viewer-text">Portfolio Views</span> <span className="viewers">{viewers}</span></p>
    <br />
  </Container>
);
  }

export default SideBar;