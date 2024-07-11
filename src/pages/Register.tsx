import React, {useState} from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { ValidateUser } from "../utils/validations";
import Input from "../components/Input";
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



const Register: React.FC = () => {
    const { setUser } = useUser();
    const [name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errors, setErrors ] = useState<{name?: string, email?:string, password?:string}>({});
    const navigate = useNavigate();
    const inputRef = useAutoFocus();


    const handleRegister = () => {
        const validateErrors = ValidateUser(name, email,password)

        // Esse validateErrors retorna um objeto com os dados validados, então, vamos usar o método keys que serve para pegar a qtd de itens no objetos, aqui nesse caso se um deles vier com erro, vai retornar o erro, senão define o usuário e redireciona para a home
        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
            setTimeout(()=>{
                setErrors({})
            },2000)
        } else {
            setUser({ name, email, password});
            navigate('/login');
        }

    }

    return(
        <Container>
            <InnerContent>
            <Title>Cadastro</Title>
            <InputStyled ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
            {errors.name && <MessageContainer>{errors.name}</MessageContainer>}
            <InputStyled type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            {errors.email && <MessageContainer>{errors.email}</MessageContainer>}
            <InputStyled type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
            {errors.password && <MessageContainer>{errors.password}</MessageContainer>}
            <RegularButtonStyled onClick={handleRegister}>Cadastrar</RegularButtonStyled>
            </InnerContent>
        </Container>
    )
}

export default Register;