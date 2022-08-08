interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="bg-gray-200 rounded-md text-gray-600 px-4 uppercase py-1 font-bold duration hover:scale-105 hover:bg-gray-300 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
