

const ProJectCard = ({ image, name, description, projectLink }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg m-4 bg-gray-900">
      <img src={image} alt={name} className="w-full h-40 md:h-52 object-cover object-center" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>

      <div className="px-6 py-4">
        <a href={projectLink} onClick={() => console.log(projectLink) }  className="text-indigo-600 font-semibold hover:underline cursor-pointer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProJectCard;
