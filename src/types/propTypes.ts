import { DataType } from './types';

export interface BodyProps {
  isLoading: boolean;
  data?: DataType | undefined;
  fetchData: () => Promise<void>;
  isPunchline: boolean;
  setIsPunchline: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ContentProps {
  data: DataType | undefined;
  isPunchline: boolean;
}
export interface ButtonsProps {
  fetchData: () => Promise<void>;
  isPunchline: boolean;
  setIsPunchline: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface FooterProps {
  data: DataType | undefined;
}
