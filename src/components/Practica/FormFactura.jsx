import React, { useState } from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Heading, Input, Select } from './styles';
import { clientsOptions, statusOptions } from './utils';

const FormFatura = () => {
    toast.configure()
    const [factura, setFactura] = useState({
        condicion: '',
        id_cliente: 0,
        fechaFacturacion: '',
        monto: '',
        estado: '',
        Foto: '',
    })

    const handleInputChange = (e) => {
        if(e.target.name === 'id_cliente' || e.target.name === 'monto') {
            setFactura({
                ...factura,
                [e.target.name]: Number(e.target.value)
            })
        } else {
            setFactura({
                ...factura,
                [e.target.name]: e.target.value
            })
        }
        
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {condicion, id_cliente, monto, fechaFacturacion, estado, Foto} = factura
        const data = {
            condicion,
            id_cliente,
            monto,
            fechaFacturacion, 
            estado, 
            Foto
        }
        const api = "https://opensource-practicaviii.herokuapp.com/api/OpenSource"
        fetch(api, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((response) => response.json().then((data) => {
            toast.success("Factura creada!")
            setFactura({
                condicion: '',
                id_cliente: 0,
                fechaFacturacion: '',
                monto: '',
                estado: '',
                Foto: '',
            })
          }))
    }

    return(
        <div className='with50'>
            <Heading>Crear Factura</Heading>
            <form onSubmit={onSubmit}>
                <Input 
                    type="text" 
                    placeholder="Condicion" 
                    name="condicion" 
                    value={factura.condicion} 
                    onChange={handleInputChange} 
                />
                <Input 
                    type="date" 
                    value={factura.fechaFacturacion} 
                    name="fechaFacturacion" 
                    onChange={handleInputChange}
                />
                <Input 
                    type="number" 
                    placeholder="Monto"
                    value={factura.monto} 
                    name="monto" 
                    onChange={handleInputChange}
                />
                 <Input 
                    type="text" 
                    placeholder="URL de la Imagen" 
                    name="Foto" 
                    value={factura.Foto}  
                    onChange={handleInputChange}
                />
                <Select 
                  value={factura.estado} 
                  name="estado" 
                  onChange={handleInputChange}
                >
                    <option value="">Seleccione un estado</option>
                    {statusOptions()}
                </Select>
                <Select 
                    value={factura.id_cliente} 
                    name="id_cliente" 
                    onChange={handleInputChange}
                >
                    <option value="">Seleccione un cliente</option>
                    {clientsOptions()}
                </Select>
                <Button type="submit">Generar Factura</Button>
            </form>
        </div>
    )
}

export default FormFatura