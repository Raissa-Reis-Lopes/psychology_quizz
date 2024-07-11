// src/pages/Psychologists.tsx
import React, { useState, useTransition } from 'react';
import { generatePsychologists, Psychologist } from '../utils/generatePsychologists';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

const psychologistsData = generatePsychologists(5000);

const Container = styled.div`
    padding: 20px;
    margin-top: 100px
`;

const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const Psychologists: React.FC = () => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState<Psychologist[]>(psychologistsData);
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate();

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        startTransition(() => {
            setFilteredData(
                psychologistsData.filter(
                    (psychologist) =>
                        psychologist.name.toLowerCase().includes(value.toLowerCase()) ||
                        psychologist.city.toLowerCase().includes(value.toLowerCase()) 
                        //Eu ia colocar o filtro por cidade e estado tb, mas vou deixar para depois, pois quero melhorar esse filtro 
                        // psychologist.state.toLowerCase().includes(value.toLowerCase())
                )
            );
        });
    };

    return (
        <>
        <Header title='Lista de Psicólogos'>
            <Button onClick={() => navigate('/depression-test')}>Teste de Depessão</Button>
            <Button onClick={() => navigate('/home')}>Voltar</Button>
            <Button onClick={() => navigate('/')}>Sair</Button>
        </Header>
        <Container>
            <Input
                type="text"
                value={query}
                onChange={handleFilter}
                placeholder="Filtrar por nome ou cidade"
            />
            {isPending ? (
                <p>Carregando...</p>
            ) : (
                <List>
                    {filteredData.map((psychologist) => (
                        <ListItem key={psychologist.id}>
                            <p><strong>Nome:</strong> {psychologist.name}</p>
                            <p><strong>CRP:</strong> {psychologist.crp}</p>
                            <p><strong>Estado:</strong> {psychologist.state}</p>
                            <p><strong>Cidade:</strong> {psychologist.city}</p>
                            <p><strong>Celular:</strong> {psychologist.phone}</p>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
        </>
    );
};

export default Psychologists;
