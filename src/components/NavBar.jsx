import styled from 'styled-components';
import entelLogo from '../assets/svg/entelLogo.svg';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 1px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 1px 6px 5px 0px rgba(0, 0, 0, 0.1);
`;

const LogoImage = styled.img``;

const NavLinkButton = styled(Link)`
  padding: 10px 5px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
  text-decoration: none;

  &:hover {
    color: var(--blue);
    background: #f3f5ff;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <LogoImage
          src={entelLogo}
          alt=''
        />
      </Link>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: '0px',
          padding: '0px',
        }}
      >
        <li>
          <NavLinkButton to='/'>Formulario</NavLinkButton>
        </li>
        <li>
          <NavLinkButton to='/list'>Lista formulario</NavLinkButton>
        </li>
      </ul>
    </Nav>
  );
};
