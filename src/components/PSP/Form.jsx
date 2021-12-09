import React, {useState} from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Label = styled.label`
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    margin-top: 2rem;
    display: block;
`;

const Input = styled.input`
    width: 100%;
    display:block;
    padding: 10px;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 14px;
`

const Formulario = ({setDataRequest}) => {
    const [dateStart, setDateStart] = useState(undefined)
    const [dateEnd, setDateEnd] = useState(undefined)
    const [error, setError] = useState(false)

    const onChange = (e) => {
        if(e.target.name === "fechaInicial") {
            setDateStart(e.target.value)
        } else if(e.target.name === "fechaFinal" && moment(dateStart) <= moment(e.target.value)) {
            setDateEnd(e.target.value)
            setError(false)
        } else {
            setError(true)
            setDateEnd('')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const fechaInicial = moment(dateStart)
        const fechaFinal = moment(dateEnd)
        const api = `https://curso-nodejs-rest-server.herokuapp.com/api/OpenSource/logs${dateStart ? `?desde=${fechaInicial.format("MM-DD-YYYY")}` : ''}${dateEnd ? `&hasta=${fechaFinal.format("MM-DD-YYYY")}` : ''}`
        fetch(api).then((response) => response.json().then((data) => setDataRequest(data.historialLogs))).catch((error) => console.log('Error', error))
    }

    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div>
                <Label>Seleccione una inicial</Label>
                <Input type="date" name="fechaInicial" value={dateStart} onChange={onChange} />
            </div>
            {
                dateStart && 
                <div>
                    <Label>Seleccione una final</Label>
                    <Input type="date" name="fechaFinal" value={dateEnd} onChange={onChange} />
                </div>
            }
            {error && <p className="error">Debes seleccionar una fecha mayor a la fecha inicial</p>}
            <Boton type="submit" value="Buscar"/>
        </form>
     );
}
 
export default Formulario;