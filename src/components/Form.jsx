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
    width: 96%;
    display:block;
    padding: 10px;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 14px;
`

const Formulario = ({setDataRequest}) => {
    const [date, setDate] = useState(undefined)

    const onChange = (e) => {
        setDate(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const fecha = moment(date)
        const api = `https://curso-nodejs-rest-server.herokuapp.com/api/OpenSource/logs${date ? `?fecha=${fecha.format("DD-MM-YYYY")}` : ''}`
        fetch(api).then((response) => response.json().then((data) => setDataRequest(data.historialLogs)))
    }

    return ( 
        <form
            onSubmit={onSubmit}
        >
            <div>
                <Label>Seleccione una fecha</Label>
                <Input type="date" value={date} onChange={onChange} />
            </div>
            <Boton type="submit" value="Buscar"/>
        </form>
     );
}
 
export default Formulario;