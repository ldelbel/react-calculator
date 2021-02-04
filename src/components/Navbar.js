import { Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/math.png';

const Navbar = () => {
  const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    background: #ee0979;
    background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
    background: linear-gradient(to right, #ff6a00, #ee0979);
    height: 50px;

    img {
      height: 40px;
      align-self: center;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 1.3em;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 40%;
    }
  `;

  return (
    <StyledNav>
      <img src={logo} alt="img" />
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/calc">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </Router>
      </div>
    </StyledNav>
  );
};

export default Navbar;
