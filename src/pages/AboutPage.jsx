import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  padding-top: 125px;
  display: flex;
  align-items: center;
  
  .aboutme {
    color: black;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 20px;
    line-height: 1.5
  }

  .me {
    height: 400px;
    width: auto;
  }
`;

export default function AboutPage() {
    return (
      <Styles>
        <img className="me" src={'../images/me.jpg'} alt="A picture of Gordon Jackman"/>
        <p className="aboutme">
         My name is Gordon.  I am a student in the UCF coding bootcamp. 
         I'm a native and current resident of Orlando, Florida.  I share a home
         with my wife, and my two canine children.  My github page is named after
         my eldest child, Spaghetti.   
        </p>
      </Styles>
    );
  }
  