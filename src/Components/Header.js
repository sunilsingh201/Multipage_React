import React from 'react';
import Navbar from "./Navbar";
import {NavLink} from "react-router-dom"
import styled from 'styled-components';
const Header = () => {
  const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: auto;
  max-width: 30%;
}
.username {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: "Gemunu Libre",sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    color: rgb(98 84 243);
    opacity:0.8;
}
.bio {
  font-family: "Gemunu Libre",sans-serif;
  font-size: 2rem;
    margin: 0;
    font-weight: 700;
    margin-top: -13px;
    color: rgb(98 84 243);
}
`;
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="logo" className="logo"/> */}
        <p class="username">Sunil Singh</p>
        <p class="bio">@web_developer</p>
      </NavLink>
      <Navbar/>
    </MainHeader>
  )
}



export default Header