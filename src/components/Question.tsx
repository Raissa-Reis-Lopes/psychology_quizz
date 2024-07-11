// src/components/Question.tsx
import React from 'react';
import styled from 'styled-components';
import { FormControl, FormControlLabel, Checkbox } from '@mui/material';

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answers: number[]) => void;
  selectedAnswers: number[];
}

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.p`
  font-size: 1.2em;
`;

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer, selectedAnswers }) => {
  const handleChange = (index: number) => {
    const updatedAnswers = selectedAnswers.includes(index)
      ? selectedAnswers.filter(answer => answer !== index)
      : [...selectedAnswers, index];
    onAnswer(updatedAnswers);
  };

  return (
    <QuestionContainer>
      <QuestionText>{question}</QuestionText>
      <FormControl component="fieldset">
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={selectedAnswers.includes(index)}
                onChange={() => handleChange(index)}
              />
            }
            label={option}
          />
        ))}
      </FormControl>
    </QuestionContainer>
  );
};

export default Question;
