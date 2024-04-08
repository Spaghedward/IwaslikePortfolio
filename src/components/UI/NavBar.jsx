import styled from 'styled-components';

const StyledNavBar = styled.nav`
.navbar {
  height: 100px;
  background-color: #5d561;
}
`;

const Navbutton = styled.li`
  .nav-link:hover {
    transform: scale(1.2);
    text-decoration: underline;
  }
`

export default function NavBar({ links }) {
  return (
    <StyledNavBar>
      <nav className="navbar navbar-expand-sm bg-secondary fixed-top">
        <div className="container-fluid">
          <h3>GrodenDesign</h3>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
              {links.map((link, index) => (
                <Navbutton className="nav-item" key={index}>
                  {link}
                </Navbutton>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </StyledNavBar>
  );
}

