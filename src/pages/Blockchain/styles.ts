import styled from 'styled-components';

import { BsGithub } from 'react-icons/bs';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
`;

export const BlocksContainer = styled.div`
  width: 1000px;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;
export const LogContainer = styled.div`
  width: 336px;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: fit-content;
  height: 30px;
  padding: 24px;
  margin: 24px 24px 0 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #c0c0c0;
  border: 1px solid #c0c0c0;
  background-color: transparent;

  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.3em;

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

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 24px 0 0 0;
`;

export const Description = styled.h4`
  width: 100%;
  text-align: center;
  margin: 24px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: -18px 0 0 0;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Span = styled.span``;

export const Paragraph = styled.span`
  font-size: 1.5em;
`;

export const IconGithub = styled(BsGithub)`
  width: 24px;
  height: 24px;
  color: white;
  margin: 0 12px;
`;
