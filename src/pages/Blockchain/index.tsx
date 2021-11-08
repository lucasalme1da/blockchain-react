/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import Modal from 'react-modal';
import { default as ApexChart } from 'react-apexcharts';

import { DateTime } from 'luxon';
import { v4 } from 'uuid';

import Block from '../../components/Block';
import Logs from '../../components/Logs';

import { IBlock } from '../../components/Block/types';
import { Log, LogStatus } from '../../components/Logs/types';

import * as S from './styles';
import { Input, T } from '../../components/Block/styles';

const baseModalStyle: ReactModal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#393739',
    border: '1px solid gray',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: '#11111190',
  },
};

const chartModalStyle: ReactModal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#393739',
    border: '1px solid gray',
    width: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: '#11111190',
  },
};

const Blockchain: React.FC = () => {
  /* The blockchain object itself  */
  const [chain, setChain] = useState<IBlock[]>([]);

  /* Modal states */
  const [modals, setModals] = useState<{ [key: string]: boolean }>({
    miningGenesisBlock: false,
    mineNewBlock: false,
    mineNewBlocks: false,
    generatingChart: false,
  });

  /* Logger control list */
  const [logs, setLogs] = useState<Log[]>([
    {
      content: 'Fresh start!',
      timestamp: DateTime.now()
        .setLocale('pt-BR')
        .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
      variant: 'normal',
    },
  ]);

  /* Difficulty of the proof of work and mining status */
  const [difficulty, setDifficulty] = useState(1);
  const [mining, setMining] = useState(false);

  /** Makes a new entrie on the log field. */
  const log = (message: string, status: LogStatus): void => {
    const newLog: Log = {
      content: message,
      timestamp: DateTime.now()
        .setLocale('pt-BR')
        .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
      variant: status,
    };

    setLogs((s) => [...s, newLog]);
  };

  /** Calculates the hash for the block passed as parameter. */
  const calcHash = ({
    index,
    timestamp,
    data,
    previousHash,
    nonce,
  }: IBlock): string => {
    const newHash = SHA256(
      index + previousHash + timestamp + JSON.stringify(data) + nonce,
    ).toString();
    return newHash;
  };

  /** Returns the lastest block of the chain. */
  const getLatestBlock = (): IBlock => chain[chain.length - 1];

  /** Executes the 'Proof of Work' for the passed Block returning the resultant Block. */
  const mineBlock = async (
    block: IBlock,
    difficulty: number,
  ): Promise<IBlock> => {
    const blockCopy: IBlock = { ...block };

    log(`⛏️ Starting block mining...`, 'idle');

    const startTime = DateTime.now().setLocale('pt-BR');

    return new Promise((resolve, reject) => {
      try {
        while (
          blockCopy.hash?.substring(0, difficulty) !==
          Array.from({ length: difficulty }, () => '0').join('')
        ) {
          blockCopy.nonce = v4();
          blockCopy.hash = calcHash(blockCopy);
        }

        const endTime = DateTime.now().setLocale('pt-BR');

        const duration = endTime
          .diff(startTime, ['seconds', 'milliseconds'])
          .toObject();

        blockCopy.miningDuration = duration;

        log(
          `🕓 Finishing block mining \n after ${duration.seconds} seconds and ${duration.milliseconds} milliseconds...`,
          'success',
        );

        resolve(blockCopy);
      } catch (error) {
        reject(error);
      }
    });
  };

  /** Toggle the modal which key is passed by parameter. */
  const toggleModal = (modal: string): void =>
    setModals((s) => ({ ...s, [modal]: !modals[modal] }));

  /** Deals with the block mining requested. */
  const handleGenesisBlockMining = (): void => {
    setMining(true);
    setTimeout(() => {
      const timestamp = DateTime.now()
        .setLocale('pt-BR')
        .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
      const baseData = {
        index: v4(),
        timestamp,
        data: 'genesis',
        previousHash: '0',
        nonce: v4(),
      };
      addBlock({
        ...baseData,
        hash: calcHash(baseData),
      });
      setMining(false);
      toggleModal('miningGenesisBlock');
    }, 10);
  };

  /** Handler for add new block button */
  const handleNewBlockMining = (): void => {
    toggleModal('miningNewBlock');
    setTimeout(() => {
      const timestamp = DateTime.now()
        .setLocale('pt-BR')
        .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
      const baseData = {
        data: `transaction: ${Math.floor(
          Math.random() * (15000 - 1000) + 100,
        )}`,
        index: v4(),
        nonce: v4(),
        timestamp,
      };
      addBlock({
        ...baseData,
        hash: calcHash(baseData),
      }).then(() => setModals(() => ({ miningNewBlock: false })));
    }, 10);
  };

  /** Handler for the 100 blocks mining button */
  const handleHundredBlockMining = (): void => {
    toggleModal('miningNewBlocks');
    setTimeout(async () => {
      const arrHundredIterations: any[] = Array.from(
        { length: 100 },
        () => null,
      );

      const newBlocks = arrHundredIterations.reduce(
        async (chained: IBlock[]) => {
          const currentChain = await chained;

          const timestamp = DateTime.now()
            .setLocale('pt-BR')
            .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

          const block: IBlock = {
            data: `transaction: ${Math.floor(
              Math.random() * (15000 - 1000) + 100,
            )}`,
            index: v4(),
            nonce: v4(),
            timestamp,
          };

          if (currentChain.length === 0) {
            block.previousHash = getLatestBlock()?.hash;
          } else {
            block.previousHash = currentChain[currentChain.length - 1]?.hash;
          }

          block.hash = calcHash(block);

          return [...currentChain, await mineBlock(block, difficulty)];
        },
        [],
      );

      const chainExtension = await newBlocks;

      setModals(() => ({ miningNewBlocks: false }));
      setChain((s) => [...s, ...chainExtension]);
    }, 10);
  };

  /** Calls the block miner and appends the new block to the end of the chain. */
  const addBlock = async (newBlock: IBlock): Promise<void> => {
    log('🆕 Adding new block...', 'normal');

    newBlock.previousHash = getLatestBlock()?.hash || '';
    newBlock.hash = calcHash(newBlock);

    newBlock = await mineBlock(newBlock, difficulty);

    log(`✅ New block added. Number of blocks: ${chain.length + 1}`, 'success');
    setChain((s) => [...s, newBlock]);
  };

  /** Changes the block data based on the given parameters. */
  const changeData = (index: string, data: string): void => {
    const chainCopy = [...chain];
    const messedBlock = chain.find((b) => b.index === index);

    if (messedBlock) {
      chainCopy[chainCopy.indexOf(messedBlock)].data = data;
      setChain(chainCopy);
    }
  };

  /** Check the entire chain after any kind of modification. */
  const validateChain = (): boolean => {
    log('Checking the integrity of the chain...', 'normal');
    return chain.every((block, idx, chain) => {
      if (idx > 0) {
        const previousBlock = chain[idx - 1];

        /* Check the integrity of the block hash */
        if (block.hash !== calcHash(block)) {
          log(`Block #${idx + 1} check failed.`, 'failure');
          return false;
        }

        /* Check if the current block hash is equal to the previous block hash */
        if (block.previousHash !== previousBlock.hash) {
          log(`Block #${idx + 1} check failed.`, 'failure');
          return false;
        }

        log(`Block #${idx + 1} checked.`, 'idle');
        return true;
      }

      log(`Block #${idx + 1} checked.`, 'idle');
      return true;
    });
  };

  /** Clears the blockchain and the log history. */
  const resetAll = (): void => {
    setChain([]);
    setLogs([]);
  };

  /** Returns all the chain durations in milliseconds */
  const getChainDurations = (): number[] =>
    chain.map(
      (block) =>
        (block.miningDuration?.seconds || 0) * 1000 +
        (block.miningDuration?.milliseconds || 0),
    );

  /** Return the average of the given number array */
  const average = (a: number[]): number =>
    a.reduce((p: number, c: number) => p + c, 0) / a.length;

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <S.Container>
      <S.Title>blockchain visualizer</S.Title>
      <S.Description>
        <S.IconGithub />
        <a href="https://www.github.com/lucasalme1da">lucasalme1da</a>{' '}
      </S.Description>
      <S.LogContainer>
        <Logs logs={logs} />
      </S.LogContainer>
      <S.BlocksContainer id="blocks-container">
        {chain.length ? (
          chain.map((block, index) => (
            <Block
              key={block.index}
              config={block}
              changeData={changeData}
              index={index}
            />
          ))
        ) : (
          <S.Paragraph
            style={{ height: '100%', display: 'flex', alignItems: 'center' }}
          >
            Add a genesis block to start the blockchain.
          </S.Paragraph>
        )}
        <S.ButtonContainer>
          {chain.length === 0 ? (
            <S.Button
              onClick={() => {
                toggleModal('miningGenesisBlock');
              }}
            >
              + Add genesis block
            </S.Button>
          ) : (
            <>
              <S.Button onClick={handleNewBlockMining}>
                + Add new block
              </S.Button>
              <S.Button onClick={handleHundredBlockMining}>
                + Add 100 blocks (very slow!!)
              </S.Button>
            </>
          )}
          <S.Button
            onClick={() => {
              validateChain()
                ? log('🟢 This blockchain is valid!', 'success')
                : log('🔴 This blockchain is invalid!', 'failure');
            }}
          >
            Check validity
          </S.Button>
          <S.Button onClick={resetAll}>Reset everything</S.Button>
          <S.Button onClick={() => toggleModal('generatingChart')}>
            Generate chart
          </S.Button>
        </S.ButtonContainer>
      </S.BlocksContainer>

      <Modal isOpen={modals.miningGenesisBlock} style={baseModalStyle}>
        <S.Paragraph>
          <T>Choose the difficulty: </T>
          <Input
            value={difficulty}
            type="number"
            max="5"
            min="1"
            style={{ width: '50px' }}
            onChange={(e) => setDifficulty(Number(e.target.value))}
          />
        </S.Paragraph>
        <S.ButtonContainer style={{ justifyContent: 'center' }}>
          <S.Button onClick={() => toggleModal('miningGenesisBlock')}>
            Cancel
          </S.Button>
          <S.Button
            color="primary"
            onClick={handleGenesisBlockMining}
            disabled={mining}
          >
            {mining ? 'Mining block...' : 'Confirm'}
          </S.Button>
        </S.ButtonContainer>
      </Modal>

      <Modal isOpen={modals.miningNewBlock} style={baseModalStyle}>
        <S.Paragraph>
          <T>Mining block... </T>
        </S.Paragraph>
      </Modal>

      <Modal isOpen={modals.miningNewBlocks} style={baseModalStyle}>
        <S.Paragraph>
          <T>Mining blocks... </T>
        </S.Paragraph>
      </Modal>

      <Modal isOpen={modals.generatingChart} style={chartModalStyle}>
        <S.Paragraph style={{ margin: '20px' }}>
          <T>Duration (ms) of the minings (with difficulty = {difficulty})</T>
        </S.Paragraph>

        <ApexChart
          series={[
            {
              name: 'Duration',
              data: getChainDurations(),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              type: 'area',
              height: 350,
              stacked: true,
            },
            colors: ['#8a2be2'],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
            },
            legend: {
              show: false,
            },
            fill: {
              type: 'gradient',
              gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
              },
            },
            tooltip: {
              y: {
                formatter: (v) => `${v} ms`,
              },
            },
            xaxis: {
              type: 'category',
            },
          }}
          width={950}
          height={400}
          type="area"
        />

        <S.Paragraph>
          <T style={{ color: 'white' }}>
            Average (ms) of the mining durations:{' '}
            {average(getChainDurations()).toFixed(2)} ms
          </T>
        </S.Paragraph>

        <S.ButtonContainer style={{ justifyContent: 'center' }}>
          <S.Button onClick={() => toggleModal('generatingChart')}>
            Close
          </S.Button>
        </S.ButtonContainer>
      </Modal>
    </S.Container>
  );
};

export default Blockchain;
