import React, { useState } from 'react'
import RenderData from './RenderData'
import {ContainerTable, Heading, InputNONE } from './styles'

const Facturas = ({facturaData, onSubmit}) => {
    const [id, setId] = useState('')

    const handdlerSubmit = (e) => {
        onSubmit(e, id)
    }

    const showFactura = (url) => {
        console.log(url)
        window.open(url, '_blank')
    }
    
    if(facturaData.length === 0 ) {
        return(
            <ContainerTable>
                <p className="nodata">No data</p>
            </ContainerTable>
        )
    }

    return(
        <div className="with50R bg-Dark">
            <Heading color="#fff">Listado Facturas</Heading>
            <form className="form-control" onSubmit={handdlerSubmit}>
                <InputNONE type='text' placeholder="Id Factura" value={id} onChange={(e) => setId(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
            <ContainerTable>
                <RenderData facturaData={facturaData} showFactura={showFactura}/>
            </ContainerTable>
        </div>
    )
}

export default Facturas