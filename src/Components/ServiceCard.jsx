const ServiceCard = ({ service, index, onServiceClick }) => {
  return (
    <div key={index}>
      <div
        className="card text-center shadow-sm border-0 rounded-4 position-relative overflow-hidden image-anime reveal box"
        onClick={() => onServiceClick(index)}
        style={{ cursor: "pointer", height: "350px" }}
      >
        {/* Background Image */}
        <img
          src={service.img}
          className="card-img-top img-fluid rounded-4"
          alt={service.title}
          style={{ height: "350px", objectFit: "cover" }}
        />

        {/* Content Overlay */}
        <div
          className="z-2 position-absolute bottom-0 border-0 shadow m-3 p-3 rounded-1 d-flex flex-column rounded-4 bg-light"
          style={{ height: "120px", width: "90%" }}
        >
          <h6 className="card-title white-space-pre-line heading dark-text mb-2 fs-6">
            {service.title}
          </h6>

          <div className="card-footer mt-auto bg-transparent border-0 p-0 d-flex justify-content-center">
            <button className="btn button-bg btn-sm w-50 rounded-0  text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;