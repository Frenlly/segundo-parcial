import styled from "@emotion/styled";

export const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: ${props => props.color ? props.color : '#0d2235'};
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: ${props => props.mgNone ? '0px' : '20px'};
`

export const InputNONE = styled.input`
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 0px;
    margin-right: 15px;
    border: none;
`

export const Select = styled.select`
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    border: 2px solid;
`

export const Button = styled.button`
    font-family: 'Bebas Neue', cursive;
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #0d2235;
    color:#66A2FE;
    border: none;
    font-size: 20px;
    cursor: pointer;
`

export const ContainerTable = styled.div`
    width: 100%;
    height: 100%;
    background-color: #efefef;
    padding: 20px;
    .nodata {
        color: #0d2235;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
    }
`

export const ConntFactura = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 2px solid #0d2235;
    color: #0d2235;
    display: flex;
    justify-content: space-between;
    p {
        width: 20%;
        font-size: 12px;
    } 
    a {
        background-color: #66A2FE;
        color: #fff;
        width: 20%;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        font-size: 12px;
    }
    .nodata {
        color: #0d2235
    }
`

export const Status = styled.div`
    text-align: center;
    border-radius: 25px;
    width: 15%;
    text-transform: capitalize;
    background-color: ${props => props.bg ? props.bg : 'red'};
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color ? props.color : '#fff'};

`