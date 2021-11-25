import React from 'react'
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Contenedor = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    background: #fff;
    padding: 16px 100px;
    border-radius: 5px;
    margin-bottom: 30px;
    text-decoration: none;
    font-family: 'Bebas Neue';
    font-size: 25px;
    color: #66a2fe;
    width: 60%;
    text-align: center;
    &:hover {
        background-color: #e1e1e1;
    }
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  width: 75%;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

const MenuOptions = () => {
    return(
        <Contenedor>
            <Heading>Opciones a proyectos</Heading>
            <Link to='/practica-VII'>Practica VIII</Link>
            <Link to='/segundo-parcial'>Segundo Parcial</Link>
        </Contenedor>
    )
}

export default MenuOptions