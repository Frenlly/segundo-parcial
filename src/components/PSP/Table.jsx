import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

const ContainerTableEmpty = styled.div`
    margin-top: 80px;
    width: 95%;
    height: 268px;
    background-color: #fff;
    padding: 20px;
    min-height: 50px;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableData = styled.div`
    margin-top: 80px;
    width: 95%;
    height: 268px;
    background-color: #fff;
    border-radius: 10px;
`

const Header = styled.div`
    background-color: #66a2fe;
    padding: 15px 20px;
    display: flex;
    color: #fff;
    & div {
        width: 33%;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
`

const Body = styled.div`
    padding: 15px 20px 0px 20px;
    margin-bottom: 15px;
    display: flex;
    color: #0d2235;
    & div {
        width: 33%;
        border-bottom: 1px solid #0d2235;
        text-align: center;
    }
`


const Tabla = ({dataRequest}) => {
    
    return (
        <Fragment>
            {dataRequest.length === 0 
            ?
                <ContainerTableEmpty>
                    <p>Informacion no disponible</p> 
                </ContainerTableEmpty>
            :
                <TableData>
                    <Header>
                        <div>
                            Servicio
                        </div>
                        <div>
                            llamadas
                        </div>
                        <div>
                            Fecha
                        </div>
                    </Header>
                    {dataRequest.sort((a, b) => moment(a.fecha) - moment(b.fecha)).map((data) => {
                        return(
                            <Body>
                                <div>
                                    {data.nombreServicio}
                                </div>
                                <div>
                                    {data.CantidadLlamada}
                                </div>
                                <div>
                                    {moment(data.fecha).format("DD-MM-YYYY")}
                                </div>
                            </Body>
                        )
                    })}
                </TableData>
            } 
        </Fragment>
    )
}

export default Tabla