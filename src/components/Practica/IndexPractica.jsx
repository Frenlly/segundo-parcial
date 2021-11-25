import React from 'react'
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Facturas from './Facturas';
import FormFatura from './FormFactura'

const Contenedor = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex-direction: row;
  .with50 {
    width: 50%;
    padding:0 150px;
    height: 100%;
  }
  .with50R {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bg-Dark {
    background-color: #0d2235;
    color: #fff !important;
    height: 100%;
    padding:0;
    width: 50%;
  }
`;

const IndexPractica = () => {
  const [facturaData, setFacturaData] = useState([])

  const onSubmit = (e, id) => {
    e.preventDefault()
    const api = `https://opensource-practicaviii.herokuapp.com/api/OpenSource/guardar/${id}`
    fetch(api).then((response) => response.json().then((data) => setFacturaData([data.facturas])))
}

  useEffect(() => {
    const api = `https://opensource-practicaviii.herokuapp.com/api/OpenSource/facturas`
    fetch(api).then((response) => response.json()).then((data) => setFacturaData(data.facturas))
  }, [])

  return(
      <Contenedor>
          <FormFatura />
          <Facturas facturaData={facturaData} setFacturaData={setFacturaData} onSubmit={onSubmit}/>
      </Contenedor>
  )
}

export default IndexPractica