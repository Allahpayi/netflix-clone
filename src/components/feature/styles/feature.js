import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: bold;
    margin: auto;

    @media (max-width:600px){
        font-size: 35px;
    }
`

export const SubTitle = styled.h2`
    color: white;
    font-size: 23px;
    font-weight: normal;
    margin: 10px auto;

    @media (max-width:600px){
        font-size: 16px;
    }

`

