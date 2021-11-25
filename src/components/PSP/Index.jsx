import React, {useState} from 'react';
import styled from '@emotion/styled';
import Formulario from './Form';
import Table from './Table';


const Contenedor = styled.div`
  width: 900px;
  height: 100%;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
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
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

const IndexPSP =  () => {
    const [dataRequest, setDataRequest] = useState([])

    return (
        <Contenedor>
            <div>
              <Heading>Servicios por fechas</Heading>
              <Formulario setDataRequest={setDataRequest}/>
            </div>
            <div>
              <Table dataRequest={dataRequest}/>
            </div>
        </Contenedor>
    );
}

export default IndexPSP