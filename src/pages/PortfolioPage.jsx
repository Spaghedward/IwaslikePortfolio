import React from 'react';
import ProjectCard from '../components/UI/ProjectCards.jsx';
import { Container, Col, Row } from 'react-bootstrap';
import crate from '../images/crate.png';
import dental from '../images/dental.jpg';
import notetaker from '../images/notetaker.png';
import weather from '../images/weather.png';
import gallery from '../images/galleryofjourneys.png';
import styled from 'styled-components';

const Styles = styled.div`
  padding-top: 125px;
  display: flex;
  align-items: center;
  padding-bottom: 50px;

  .project-card {
    padding-bottom: 10px;
  }
  
`;


export default function PortfolioPage() {
    return (
        <Styles className='portfolio'>
            <Container fluid className='portfolio-container'>
                <h1 className='portfolio-title text-center'>Here is some of my work</h1>
                <Row>
                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={gallery}
                        title='Gallery of Journeys'
                        description='A site for travelers to store and sell their photos from traveling.'
                        github='https://gallery-of-journeys.onrender.com/'
                    />
                </Col>
                <Col md={6} className="project-card mx-auto">
                    <ProjectCard
                        imgPath={crate}
                        title='Crate Digger'
                        description='A place to find similar music to what you already know and like.'
                        github='https://github.com/Spaghedward/Crate_Digger'
                    />
                </Col>

                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={dental}
                        title='Generic Dental'
                        description='A command line interface for a dentistry practice to manage their employees.'
                        github='https://github.com/Spaghedward/Generic_Dental'
                    />
                </Col>

                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={weather}
                        title='Weather App'
                        description='An application that will provide the user with a weather forcast for any city in the world.'
                        github='https://github.com/Spaghedward/Weather'
                    />
                </Col>

                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={notetaker}
                        title='Note Taker'
                        description='A simple application for taking notes in a browser for future reading.'
                        github='https://github.com/Spaghedward/Note_Taker'
                    />
                </Col>
                </Row>
            </Container>
        </Styles>
    )
}

