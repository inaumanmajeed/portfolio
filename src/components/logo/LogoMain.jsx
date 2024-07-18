import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(20px); }
`;

const disappear = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0); }
`;

const reappear = keyframes`
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
`;

const bounceDisappearReappear = keyframes`
  0%, 15% { transform: translateX(0); opacity: 1; transform: scale(1); }
  7.5% { transform: translateX(20px); }
  20%, 30% { opacity: 0; transform: scale(0); }
  45%, 100% { opacity: 1; transform: scale(1); }
`;

const Letter = styled.span`
  display: inline-block;
  animation: ${bounceDisappearReappear} 6s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.9s;
  }
  &:nth-child(5) {
    animation-delay: 1.2s;
  }
  &:nth-child(6) {
    animation-delay: 1.5s;
  }
  &:nth-child(7) {
    animation-delay: 1.8s;
  }
`;

const LogoContainer = styled.div`
  display: inline-block;
`;

const LogoMain = () => {
  const text = "Nauman!".split("");

  return (
    <LogoContainer>
      {text.map((letter, index) => (
        <Letter key={index} delay={index * 0.3}>
          {letter}
        </Letter>
      ))}
    </LogoContainer>
  );
};

export default LogoMain;
