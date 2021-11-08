import { DurationObjectUnits } from 'luxon';

export interface IBlock {
  index: string;
  timestamp: string;
  data: string;
  previousHash?: string;
  hash?: string;
  nonce: string;
  miningDuration?: DurationObjectUnits;
}

export interface IProps {
  config: IBlock;
  changeData: (index: string, data: string) => void;
  index: number;
}
