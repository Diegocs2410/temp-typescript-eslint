import { ButtonProps } from 'utils/types';

export const Button = ({ onClick, children, type, disable }: ButtonProps) => {
  switch (type) {
    case 'danger':
      return (
        <button
          className={`bg-red-600 rounded-md text-white px-4 uppercase py-1 font-bold duration hover:scale-105 hover:bg-gray-300 transition-colors  text-sm`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'primary':
      return (
        <button
          className={`bg-cyan-500 rounded-md text-white px-4 uppercase py-1 font-bold duration hover:scale-105 hover:bg-blue-700 transition-colors  text-sm`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'success':
      return (
        <button
          className={`bg-green-500 rounded-md text-white px-4 uppercase py-1 font-bold duration  ${
            disable
              ? 'opacity-50'
              : 'hover:scale-105 hover:bg-blue-700 transition-colors'
          } text-sm`}
          onClick={onClick}
          disabled={disable}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className={`bg-gray-200 rounded-md text-gray-600 px-4 uppercase py-1 font-bold duration hover:scale-105 hover:bg-gray-300 transition-colors  text-sm`}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};
