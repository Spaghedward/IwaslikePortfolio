import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledCard = styled(Card)`
    opacity: .6;
    transition:ease-in-out 500ms;
    &:hover {
        opacity: .9;
    }

    .card-title,
    .card-text: {
        padding: 10px;
        text-decoration: none;
    }

    .project-card-link {
        text-decoration: none;
    }

    .card-body {
    background-color: grey;
    }
`
const StyledA = styled.a`
    text-decoration: none;
`

function ProjectCards(props) {
    return (
        <StyledA href={props.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
            <StyledCard className="project-card-view">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </StyledA>
    );
}
export default ProjectCards;