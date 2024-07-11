import React, { useEffect, useRef, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Input  from "../components/Input";
import RegularButton from "../components/RegularButton";
import styled from "styled-components";
import useAutoFocus from "../hooks/useAutoFocus";

const Container = styled.div`
    background-image: url('/assets/bg.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InnerContent = styled.div`
    height: 300px;
    width: 400px;
    margin-left: 55%;;
    border-radius: 30px;
    box-shadow: 10px 5px 30px #000000;
    ;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-around;
`

const Title = styled.h1`
    color: #0b0031;
`

const InputStyled = styled(Input)`
    border: none;
    border-bottom: 1px solid black;
    height: 30px;
    border-radius:5px;
    outline: none;
    padding: 5px;
    font-size: large
`

const RegularButtonStyled = styled(RegularButton)`
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #0b0031;
    color: white;
    cursor: pointer;
    &&:hover{
        scale: 1.1;
    }
`
const MessageContainer = styled.p`
    color: red;
`

const Login: React.FC = () => {
    const { user } = useUser();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');
    const navigate = useNavigate();
    const inputRef = useAutoFocus();

    const handleLogin = () => {
        if(user?.email === email && user?.password === password){
            navigate('/home');
        }else{
            setMessage("Invalid email and/or password");
            setTimeout(()=>{
                setMessage('');
            },2000)
        }
    };

    return(
        <Container>
            <InnerContent>
            <Title>Login</Title>
            <InputStyled ref={inputRef} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <InputStyled type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
            {message && <MessageContainer>{message}</MessageContainer>}
            <RegularButtonStyled onClick={handleLogin}>Entrar</RegularButtonStyled>            
            </InnerContent>
        </Container>
    );
};

export default Login;

