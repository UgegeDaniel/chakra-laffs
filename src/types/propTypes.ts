import { DataType } from './types';

export default interface MovieCardProps {
  data: DataType | undefined;
  fetchData: () => Promise<void>;
  isPunchline: boolean;
  setIsPunchline: React.Dispatch<React.SetStateAction<boolean>>;
}

// data, fetchData, isPunchline, setIsPunchline
