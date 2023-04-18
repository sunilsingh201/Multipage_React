import React, { useState } from 'react'
// import { useGlobalContext } from '../Context'

import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import { Button } from '../Styles/Button';
import data from "./data";
const Services = () => {
  const [services,setServices] = useState(data)
  // const {services} = useGlobalContext();
  return (
    <Wrapper className='section'>
      <h2 className='common-heading'>Our Services</h2>
      <div className='container grid grid-three-column'>
        {
          services.map((item)=>{
            const {id,title,img,desc} = item;
            return (
              <div key={id} className='card'>
                <figure>
                  <img src={img} alt={title}/>
                </figure>
                <div className='card-data'>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <NavLink to="/services">  
                    <Button className='btn'>Read More</Button>
                  </NavLink>
                </div>
              </div>
            )
          }) 
        }
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }
  p{
    text-align: center;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-align: center;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Services