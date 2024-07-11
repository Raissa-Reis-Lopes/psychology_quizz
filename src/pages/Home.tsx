import React from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";
import Modal from "../components/Modal";
import EditProfile from "./EditProfile";
import useModal from "../hooks/useModal";
import Header from "../components/Header";


const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`


const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    height: 80vh;
    border-radius: 1000px 1000px 0px 0px;
    background-image: url('/assets/faces.jpg');
    background-size: cover;
`

const InnerContent = styled.div`
    padding-top: 50px;
    height: 80vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:50px;
`
const Title = styled.h1`
    font-family: "Playfair Display", serif;
    font-size: 40px;
    color: #0b0031;
    width: 400px;
`

const Text = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    text-align: justify;
    font-weight: 500;
    color: #0b0031;
    width: 400px;
`

const Home: React.FC = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <Header title={`Bem-vindo, ${user?.name}!!`}>
                <Button onClick={() => navigate('/depression-test')}>Teste de Depessão</Button>
                <Button onClick={() => navigate('/psychologists')}>Psicólogos</Button>
                <Button onClick={openModal}>Editar Perfil</Button>
                <Button onClick={() => navigate('/')}>Sair</Button>
            </Header>
            <Container>
                <ImageContainer />
                <InnerContent>
                    <Title>Testes psicológicos</Title>
                    <Text>
                        Os testes de Beck para ansiedade e depressão, conhecidos como Inventário de Ansiedade de Beck (BAI) e Inventário de Depressão de Beck (BDI), são ferramentas psicométricas amplamente utilizadas para avaliar a gravidade dos sintomas de ansiedade e depressão em indivíduos.
                    </Text>
                </InnerContent>
            </Container>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <EditProfile onClose={closeModal} />
            </Modal>
        </>
    );
};

export default Home;
