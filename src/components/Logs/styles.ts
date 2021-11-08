import styled from 'styled-components';
import { LogStatus } from './types';

export const Container = styled.div`
  width: 332px;
  height: 100%;
  margin: 0 12px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: auto;

  border: 1px solid gray;
  border-radius: 8px;

  position: relative;

  p:nth-child(2n) {
    background-color: #29292990;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin: 12px 0 12px 0;
`;

export const Span = styled.span``;

export const Paragraph = styled.p`
  width: calc(100% - 48px);
  font-size: 1.3em;
  padding: 12px 24px;
  margin: 8px 0;
  white-space: pre-line;
`;

export const Variant = styled.span<{ variant: LogStatus }>`
  color: ${({ variant }) => {
    switch (variant) {
      default:
      case 'normal':
        return 'white';
      case 'failure':
        return '#c1121f';
      case 'success':
        return '#70e000';
      case 'idle':
        return '#ffd60a';
    }
  }};
`;

export const T = styled.b`
  color: blueviolet;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  padding: 6px;

  color: #c0c0c0;
  border: 1px solid #c0c0c0;
  background-color: transparent;

  outline: none;
  border-radius: 4px;
  font-size: 1em;

  &:disabled {
    opacity: 0.9;
    border: none;
  }
`;

export const ButtonMessUp = styled.button`
  width: fit-content;
  position: absolute;
  height: 30px;
  padding: 24px;
  margin: 24px;

  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #c0c0c0;
  border: 1px solid #c0c0c0;
  background-color: transparent;

  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.5em;

  &:hover {
    color: black;
    border: 1px solid #c0c0c0;
    background-color: #c0c0c0;
  }

  &:active {
    color: black;
    border: 1px solid white;
    background-color: white;
  }
`;
