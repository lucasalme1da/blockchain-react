import React, { useState, useEffect } from 'react';

import * as S from './styles';

import { IProps } from './types';

const Block: React.FC<IProps> = ({ config, changeData, index }) => {
  const [newData, setNewData] = useState(config.data);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (): void => {
    setEditing(!editing);
  };

  const saveEdit = (): void => {
    toggleEdit();
    changeData(config.index, newData);
  };

  useEffect(() => {
    const container = document.getElementById('blocks-container');
    if (container) container.scrollTop = container?.scrollHeight || 0;
  }, [config]);

  return (
    <S.Container>
      {index !== 0 &&
        (editing ? (
          <S.ButtonMessUp onClick={saveEdit}>Save</S.ButtonMessUp>
        ) : (
          <S.ButtonMessUp onClick={toggleEdit}>
            Mess up with the data
          </S.ButtonMessUp>
        ))}
      <S.Index>#{index + 1}</S.Index>
      <S.Paragraph>
        <S.T>Index: </S.T>
        <S.Input value={config.index} disabled />
      </S.Paragraph>
      <S.Paragraph>
        <S.T>Timestamp: </S.T>
        <S.Input value={config.timestamp} disabled />
      </S.Paragraph>
      <S.Paragraph>
        <S.T>Data: </S.T>
        <S.Input
          value={newData}
          disabled={!editing}
          onChange={(opt) => setNewData(opt.target.value)}
        />
      </S.Paragraph>
      <S.Paragraph>
        <S.T>Previous Hash: </S.T>
        <S.Input value={config.previousHash || 'none'} disabled />
      </S.Paragraph>
      <S.Paragraph>
        <S.T>Hash: </S.T>
        <S.Input value={config.hash} disabled />
      </S.Paragraph>
      <S.Paragraph>
        <S.T>Nonce: </S.T>
        <S.Input value={config.nonce} disabled />
      </S.Paragraph>
    </S.Container>
  );
};

export default Block;
