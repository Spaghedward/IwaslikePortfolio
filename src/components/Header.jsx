import { Link } from 'react-router-dom';
import NavBar from './UI/NavBar.jsx';
import styled from 'styled-components';

const Styles = styled.div`
    .nav {
        height: 300px;
    }
`;

export default function Header() {
    return (
        <Styles>
        <NavBar className="nav"
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    About
                </Link>,
                <Link key={2} className="nav-link text-light" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light" to="/contact">
                    Contact
                </Link>,
                <Link key={4} className="nav-link text-light" to="/resume">
                    Resume
                </Link>
            ]}
        />
        </Styles>
        
    );
}