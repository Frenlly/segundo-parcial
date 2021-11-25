import React from 'react'
export const clientsInformation = [
    {
        id: 1,
        name: 'Jan Pablo Valdez'
    },
    {
        id: 2,
        name: 'Reynaldo Cruz'
    },
    {
        id: 3,
        name: 'Dana Maria Cruz'
    },
    {
        id: 4,
        name: 'Nehemias Feliz'
    },
    {
        id: 5,
        name: 'Frenyi Guevara'
    }
]

export const stateInformation = [
    {
        id: 'completado',
        value: 'Completado'
    },
    {
        id: 'pendiente',
        value: 'Pendiente'
    },
    {
        id: 'pagado',
        value: 'Pagado'
    },
]

export const clientsOptions = () => {
    return(
        <>
        {clientsInformation.map((client) => (
            <option value={client.id} key={client.id}>{client.name}</option>
        ))}
        </>
    )
}

export const statusOptions = () => {
    return(
        <>
        {stateInformation.map((state) => (
            <option value={state.id} key={state.id}>{state.value}</option>
        ))}
        </>
    )
}

export const formatNumber = (number) => {
    const amount = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'DOP' }).format(Number(number))
    return amount
}

export const getName = (clientId) => {
    const name = clientsInformation.find((client) => client.id === clientId)
    return name
}

export const example = [{
    foto: "https://www.aboutespanol.com/thmb/LwY6L65QlwfccDIfZ_tFRcFOtX8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Factura-deee9d17357b444baac4daccd31e06a6.jpg",
    condicion: "klk Wawawa",
    estado: "pagado",
    fechaFacturacion: "2021-11-25T00:00:00.000Z",
    id: "61a005e3a12c03c0e9c7fef3",
    idCliente: 1,
    monto: 999998,
    name: "prueba",
}]