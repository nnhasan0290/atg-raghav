const SingleService = ({ details: { id, image, name, description } }) => {
  const host = "http://13.127.163.178:8000";
  return (
    <div className="flex-col lg:gap-3 gap-2 lg:items-start flexible service-flex-items max-sm:max-w-[100%] items-center">
      <img
        className="lg:w-[350px lg:h-[262px] w-[300px] rounded-md h-[220px] object-cover"
        src={host + image}
        alt="img"
      />
      <h5 className="text-[#00215B] font-[700]">{name}</h5>
      <p className="tracking-tight w-[350px] max-lg:px-5 max-lg:text-center max-lg:text-[14px] max-lg:leading-[18px]">
        {description}
      </p>
    </div>
  );
};

export default SingleService;
