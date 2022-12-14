const SingleService = ({ details: { id, image, name, description } }) => {
  const host = "http://13.127.163.178:8000";
  return (
    <div className="flex-col gap-3 items-start flexible service-flex-items">
      <img
        className="w-[350px] h-[262px] object-cover"
        src={host + image}
        alt="img"
      />
      <h5 className="text-[#00215B] font-[700]">{name}</h5>
      <p className="tracking-tight w-[350px]">{description}</p>
    </div>
  );
};

export default SingleService;
