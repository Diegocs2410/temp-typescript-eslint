import { Link } from 'react-router-dom';
import { IBoxApps } from 'utils/types';

const BoxApp = ({ to, text }: IBoxApps) => {
  return (
    <Link
      to={to}
      className="p-5  rounded-md border border-white text-white transform transition duration-500 hover:scale-110 max-w-sm cursor-pointer lg:max-h-32 h-auto block mx-auto mt-5"
    >
      <p className="text-3xl font-bold cursor-pointer capitalize">{text}</p>
      <p className="mt-4 truncate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        provident magni unde cupiditate, architecto adipisci aliquid quia
        debitis amet quae porro quis laborum, labore distinctio assumenda nulla
        beatae quaerat libero.
      </p>
    </Link>
  );
};

export default BoxApp;
