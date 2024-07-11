import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { ValidateUser } from "../utils/validations";
import Input from "../components/Input";
import RegularButton from "../components/RegularButton";
import styled from "styled-components";
import { XCircle } from 'lucide-react';
import useAutoFocus from "../hooks/useAutoFocus";

const InnerContent = styled.div`
    position: relative;
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-around;
`;

const CloseModal = styled.p`
    position: absolute;
    top: 5px;
    right: 5px;
    color: red;
    cursor: pointer;
`;

const Title = styled.h1`
    color: #0b0031;
`;

const InputStyled = styled(Input)`
    border: none;
    border-bottom: 1px solid black;
    height: 30px;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    font-size: large;
`;

const ButtonStyled = styled(RegularButton)`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #0b0031;
    color: white;
    cursor: pointer;
    &&:hover {
        scale: 1.1;
    }
`;

const MessageContainer = styled.p`
    color: red;
`;

const RowAlign = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

interface EditProfileProps {
    onClose: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onClose }) => {
    const { user, setUser } = useUser();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [password, setPassword] = useState(user?.password || '');
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
    const inputRef = useAutoFocus();

    const handleUpdate = () => {
        const validationErrors = ValidateUser(name, email, password);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setTimeout(() => {
                setErrors({});
            }, 2000);
        } else {
            setUser({ name, email, password });
            onClose();
        }
    };

    const handleCancelUpdate = () => {
        onClose();
    };

    return (
        <>
            <InnerContent>
                <CloseModal onClick={onClose}><XCircle /></CloseModal>
                <Title>Editar Perfil</Title>
                <InputStyled
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                />
                {errors.name && <MessageContainer>{errors.name}</MessageContainer>}
                <InputStyled
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                {errors.email && <MessageContainer>{errors.email}</MessageContainer>}
                <InputStyled
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                />
                {errors.password && <MessageContainer>{errors.password}</MessageContainer>}
                <RowAlign>
                    <ButtonStyled onClick={handleUpdate}>Atualizar</ButtonStyled>
                    <ButtonStyled onClick={handleCancelUpdate}>Cancelar</ButtonStyled>
                </RowAlign>
            </InnerContent>
        </>
    );
};

export default EditProfile;
