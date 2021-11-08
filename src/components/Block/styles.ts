import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  margin: 0 12px 6px 12px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  border: 1px solid gray;
  padding: 24px;
  border-radius: 8px;

  position: relative;
`;

export const Title = styled.h3``;

export const Span = styled.span``;

export const Paragraph = styled.span`
  font-size: 1.3em;
  margin: 4px;
`;

export const Index = styled.span`
  position: absolute;

  font-size: 2em;

  top: 32px;
  right: 32px;
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

  bottom: 12px;
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
