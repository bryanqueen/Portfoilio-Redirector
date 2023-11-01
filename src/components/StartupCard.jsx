

const StartupCard = ({ image, name, period, position, status }) => {
  return (
    <div className="rounded-2xl items-center border w-full overflow-hidden border-white b-2 relative ">
      <img src={image} alt={name} className="w-48 " />
      <div className="px-4 py-4 ">
        <div className="font-bold text-3xl mb-2 text-white">{name}</div>
        <div className="text-gray-300 text-sm mb-2">{period}</div>
        <p className="text-gray-400 text-base">{position}</p>
      </div>
      <div className="absolute bg-inherit border border-yellow-200 py-2 rounded-xl bottom-0 right-0 mx-2 text-gray-300 text-center my-2 text-md px-4">{status}</div>
    </div>
  );
};

export default StartupCard;
