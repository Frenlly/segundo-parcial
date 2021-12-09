import moment from 'moment'
import React from 'react'
import { ConntFactura, Status } from "./styles"
import { formatNumber, getName } from "./utils"

const RenderData = ({facturaData}) => {

    return(
        <div>
            {facturaData.map((factura, index) => {
            const client = getName(factura.idCliente)
            const amount = formatNumber(factura.monto)
            const fecha = moment(factura.fecha).format("DD/MM/YY")
            let colorGB;
            let colorFont;
            if(factura.estado === 'pagado' || factura.estado.includes('pagado') || factura.estado.includes('Pagado')) {
                colorGB = '#EED000'
                colorFont='#867500'
            } else if(factura.estado === 'completado' || factura.estado.includes('completado')) {
                colorGB = '#6FFF77'
                colorFont='#1B7720'
            }
            return(
                <ConntFactura key={index}>
                    <p>{client.name}</p>
                    <Status bg={colorGB} color={colorFont}>{factura.estado}</Status>
                    <p>{amount}</p>
                    <p>{fecha}</p>
                    <a href={factura.Foto} target="_blank" rel="noreferrer">ver Factura</a>
                </ConntFactura>
            )})}
        </div>
    )
}

export default RenderData