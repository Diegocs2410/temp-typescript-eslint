import { IHeader } from 'utils/types';

export function Header({ title, size, classes }: IHeader) {
  return (
    <h1
      className={`text-${size} text-center text-yellow-50 font-bold ${classes}`}
    >
      {title}
    </h1>

  );
}
