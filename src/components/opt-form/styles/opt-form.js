import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 10px;
    flex-wrap: wrap;

    @media(max-width:1000px){
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input`
    max-width: 420px;
    width: 100%;
    height: 60px;
    padding: 10px;
    border: 0;
    outline: none;
    box-sizing: border-box;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 20px;
    background:#e50914;
    color: white;
    text-transform: capitalize;
    padding: 0 26px;
    padding-top: 4px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    &:hover{
        background: #f40612;
    }
    @media(max-width:1000px){
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
    img{
        margin-left: 10px;
        margin-bottom: 4px;
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const Text = styled.p`
    font-size: 18px;
    color: white;
    text-align: center;
    font-weight: 600;
    @media (max-width:600px){
        font-size: 16px;
        line-height: 22px;
    }
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`