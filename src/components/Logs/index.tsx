import React, { useEffect } from 'react';
import { v4 } from 'uuid';

import * as S from './styles';

import { IProps } from './types';

const Logs: React.FC<IProps> = ({ logs }) => {
  useEffect(() => {
    const container = document.getElementById('log-container');
    if (container) container.scrollTop = container?.scrollHeight || 0;
  }, [logs]);

  return (
    <S.Container id="log-container">
      <S.Title>Log</S.Title>
      {logs.map((log) => (
        <S.Paragraph key={v4()}>
          <S.T>{log.timestamp}</S.T> <br />
          <S.Variant variant={log.variant}> {log.content} </S.Variant>
        </S.Paragraph>
      ))}
    </S.Container>
  );
};

export default Logs;
