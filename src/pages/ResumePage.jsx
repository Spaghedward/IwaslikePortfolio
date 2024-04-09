import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  padding-top: 125px;

`

function ResumePage() {
  return (
    <Styles>
      <h2>
        Front-end Proficiencies
      </h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>responsive Design</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql, Sequelize</li>
        <li>Restful API</li>
        <li>Graphql</li>
      </ul>
      <a
        className="button is-primary"
        href="/GordonJackmanResume.pdf"
        download="GordonJackmanResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <i className="fas fa-download"></i>
        </span>
        <span className='download'>Download My Resume</span>
      </a>
    </Styles>
  );
}

export default ResumePage;