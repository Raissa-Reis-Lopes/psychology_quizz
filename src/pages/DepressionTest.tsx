import React, { useState, useRef, useMemo } from 'react';
import Question from '../components/Question';
import { Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import Button from '../components/Button';
import RegularButton from '../components/RegularButton';

const questions = [
  {
    question: "Questão 1",
    options: [
      " Não me sinto triste",
      " Eu me sinto triste",
      " Estou sempre triste e não consigo sair disto",
      " Estou tão triste ou infeliz que não consigo suportar"
    ]
  },
  {
    question: "Questão 2",
    options: [
      " Não estou especialmente desanimado quanto ao futuro",
      " Eu me sinto desanimado quanto ao futuro",
      " Acho que nada tenho a esperar",
      " Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar"
    ]
  },
  {
    question: "Questão 3",
    options: [
      " Não me sinto um fracasso",
      " Acho que fracassei mais do que uma pessoa comum",
      " Quando olho pra trás, na minha vida, tudo o que posso ver é um monte de fracassos",
      " Acho que, como pessoa, sou um completo fracasso"
    ]
  },
  {
    question: "Questão 4",
    options: [
      " Tenho tanto prazer em tudo como antes",
      " Não sinto mais prazer nas coisas como antes",
      " Não encontro um prazer real em mais nada",
      " Estou insatisfeito ou aborrecido com tudo"
    ]
  },
  {
    question: "Questão 5",
    options: [
      " Não me sinto especialmente culpado",
      " Eu me sinto culpado grande parte do tempo",
      " Eu me sinto culpado na maior parte do tempo",
      " Eu me sinto sempre culpado"
    ]
  },
  {
    question: "Questão 6",
    options: [
      " Não acho que esteja sendo punido",
      " Acho que posso ser punido",
      " Creio que vou ser punido",
      " Acho que estou sendo punido"
    ]
  },
  {
    question: "Questão 7",
    options: [
      " Não me sinto decepcionado comigo mesmo",
      " Estou decepcionado comigo mesmo",
      " Estou enojado de mim",
      " Eu me odeio"
    ]
  },
  {
    question: "Questão 8",
    options: [
      " Não me sinto de qualquer modo pior que os outros",
      " Sou crítico em relação a mim por minhas fraquezas ou erros",
      " Eu me culpo sempre por minhas falhas",
      " Eu me culpo por tudo de mal que acontece"
    ]
  },
  {
    question: "Questão 9",
    options: [
      " Não tenho quaisquer ideias de me matar",
      " Tenho ideias de me matar, mas não as executaria",
      " Gostaria de me matar",
      " Eu me mataria se tivesse oportunidade"
    ]
  },
  {
    question: "Questão 10",
    options: [
      " Não choro mais que o habitual",
      " Choro mais agora do que costumava",
      " Agora, choro o tempo todo",
      " Costumava ser capaz de chorar, mas agora não consigo, mesmo que o queria"
    ]
  },
  {
    question: "Questão 11",
    options: [
      " Não sou mais irritado agora do que já fui",
      " Fico aborrecido ou irritado mais facilmente do que costumava",
      " Agora, eu me sinto irritado o tempo todo",
      " Não me irrito mais com coisas que costumavam me irritar"
    ]
  },
  {
    question: "Questão 12",
    options: [
      " Não perdi o interesse pelas outras pessoas",
      " Estou menos interessado pelas outras pessoas do que costumava estar",
      " Perdi a maior parte do meu interesse pelas outras pessoas",
      " Perdi todo o interesse pelas outras pessoas"
    ]
  },
  {
    question: "Questão 13",
    options: [
      " Tomo decisões tão bem quanto antes",
      " Adio as tomadas de decisões mais do que costumava",
      " Tenho mais dificuldades de tomar decisões do que antes",
      " Absolutamente não consigo mais tomar decisões"
    ]
  },
  {
    question: "Questão 14",
    options: [
      " Não acho que de qualquer modo pareço pior do que antes",
      " Estou preocupado em estar parecendo velho ou sem atrativo",
      " Acho que há mudanças permanentes na minha aparência, que me fazem parecer sem atrativo",
      " Acredito que pareço feio"
    ]
  },
  {
    question: "Questão 15",
    options: [
      " Posso trabalhar tão bem quanto antes",
      " É preciso algum esforço extra para fazer alguma coisa",
      " Tenho que me esforçar muito para fazer alguma coisa",
      " Não consigo mais fazer qualquer trabalho"
    ]
  },
  {
    question: "Questão 16",
    options: [
      " Consigo dormir tão bem como o habitual",
      " Não durmo tão bem como costumava",
      " Acordo 1 a 2 horas mais cedo do que habitualmente e acho difícil voltar a dormir",
      " Acordo várias horas mais cedo do que costumava e não consigo voltar a dormir"
    ]
  },
  {
    question: "Questão 17",
    options: [
      " Não fico mais cansado do que o habitual",
      " Fico cansado mais facilmente do que costumava",
      " Fico cansado em fazer qualquer coisa",
      " Estou cansado demais para fazer qualquer coisa"
    ]
  },
  {
    question: "Questão 18",
    options: [
      " O meu apetite não está pior do que o habitual",
      " Meu apetite não é tão bom como costumava ser",
      " Meu apetite é muito pior agora",
      " Absolutamente não tenho mais apetite"
    ]
  },
  {
    question: "Questão 19",
    options: [
      " Não tenho perdido muito peso se é que perdi algum recentemente",
      " Perdi mais do que 2 quilos e meio",
      " Perdi mais do que 5 quilos",
      " Perdi mais do que 7 quilos"
    ],
    extra: "Estou tentando perder peso de propósito, comendo menos: Sim _____ Não _____"
  },
  {
    question: "Questão 20",
    options: [
      " Não estou mais preocupado com a minha saúde do que o habitual",
      " Estou preocupado com problemas físicos, tais como dores, indisposição do estômago ou constipação",
      " Estou muito preocupado com problemas físicos e é difícil pensar em outra coisa",
      " Estou tão preocupado com meus problemas físicos que não consigo pensar em qualquer outra coisa"
    ]
  },
  {
    question: "Questão 21",
    options: [
      " Não notei qualquer mudança recente no meu interesse por sexo",
      " Estou menos interessado por sexo do que costumava",
      " Estou muito menos interessado por sexo agora",
      " Perdi completamente o interesse por sexo"
    ]
  }
];

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`


const Div = styled.div`
  margin-top:200px;
  width: 500px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RegularButtonStyled = styled(RegularButton)`
  width: 150px;
  height: 30px;
  border: none;
  margin-right: 30px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #0b0031;
  color: white;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

const StyledCard = styled(Card)`
  box-shadow: none;
`



const QuestionList: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(Array(questions.length).fill([]));
  const totalScore = useRef(0);
  const navigate = useNavigate();

  const handleAnswer = (index: number, selectedAnswers: number[]) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedAnswers;
    setAnswers(newAnswers);
  
    // Calcula o score da pergunta atual
    const score = selectedAnswers.reduce((acc, curr) => acc + curr, 0);
  
    // Atualiza o totalScore somando o score da pergunta atual
    totalScore.current += score;
  };

  // const getResult = useMemo(() => {
  //   const score = totalScore.current;
  //   if (score <= 9) return "Não está deprimido";
  //   if (score <= 18) return "Depressão leve a moderada";
  //   if (score <= 29) return "Depressão moderada a severa";
  //   return "Depressão severa";
  // },[]);

  const getResult = () => {
    const score = totalScore.current;
    if (score <= 9) return "Não está deprimido";
    if (score <= 18) return "Depressão leve a moderada";
    if (score <= 29) return "Depressão moderada a severa";
    return "Depressão severa";
  };

  return (
    <>
      <Header title='Teste de Depressão'>
        <Button onClick={() => navigate('/psychologists')}>Psicólogos</Button>
        <Button onClick={() => navigate('/home')}>Voltar</Button>
        <Button onClick={() => navigate('/')}>Sair</Button>
      </Header>
    <Container>
    <Div>
      {currentQuestion < questions.length ? (
        <Card>
          <h3>Selecione todas as opções com as quais você se identifica</h3>
          <CardContent>
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onAnswer={(selectedAnswers) => handleAnswer(currentQuestion, selectedAnswers)}
              selectedAnswers={answers[currentQuestion]}
            />
            <RegularButtonStyled
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
              disabled={currentQuestion === 0}
            >
              Anterior
            </RegularButtonStyled>
            <RegularButtonStyled
              onClick={() => {
                if (currentQuestion === questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else {
                  setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
                }
              }}
            >
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
            </RegularButtonStyled>
          </CardContent>
        </Card>
      ) : (
        <StyledCard>
          <h3>Resultado: {getResult()}</h3>
          <RegularButtonStyled onClick={() => { setCurrentQuestion(0); setAnswers(Array(questions.length).fill([]));}}>Refazer Teste</RegularButtonStyled>
        </StyledCard>
      )}
    </Div>
    </Container>
  
    </>
  );
};

export default QuestionList;
