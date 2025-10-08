import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { servicesContent, sliderImages, seoData } from "../Contants/Data";
import SeoHead from "../Components/SeoHead";

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam !== null) {
      const serviceIndex = parseInt(serviceParam, 10);
      if (serviceIndex >= 0 && serviceIndex < servicesContent.length) {
        setActiveService(serviceIndex);
        
        // Scroll to the services section after a short delay to ensure the page is loaded
        setTimeout(() => {
          const servicesSection = document.getElementById('servicesAccordion');
          if (servicesSection) {
            servicesSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 500);
      }
    }
  }, [searchParams]);

  return (
    <>
      <SeoHead {...seoData.services} />
      <div className="container-fluid p-0">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/", icon: "bi-house-fill" },
            { label: "Services", active: true },
          ]}
        />

        {/* Carousel Banner */}
        <section className="py-3">
          <div className="container">
            <div
              id="imageSlider"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel Inner */}
              <div className="carousel-inner">
                {sliderImages.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={image.id}
                  >
                    <img
                      src={image.src}
                      className="d-block w-100"
                      alt={image.alt}
                      style={{ height: "50vh" }}
                    />
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#imageSlider"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#imageSlider"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

              {/* Bottom Dots with Arrows */}
              <div className="custom-indicators position-absolute start-50 translate-middle-x d-flex align-items-center gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#imageSlider"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active dot-btn" : "dot-btn"}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container py-5">
          <div className="row g-4">
            {/* Left column: services */}
            <div className="col-lg-8">
              <div id="servicesAccordion">
                {servicesContent.map((service, idx) => {
                  const collapseId = `svc-collapse-${idx}`;
                  const isFirst = idx === activeService;

                  return (
                    <div
                      key={idx}
                      className="mb-2"
                    >
                      {/* Header */}
                      <button
                        className="w-100 d-flex align-items-center justify-content-between list-btn text-start px-4 py-3 bg-light border rounded-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={collapseId}
                      >
                        <span className="fw-semibold text-secondary">
                          {idx + 1}.&nbsp; {service.title}
                        </span>
                        <i
                          className={`bi ${
                            isFirst ? "bi-dash-lg" : "bi-plus-lg"
                          } text-muted ms-3`}
                        ></i>
                      </button>

                      {/* Body */}
                      <div
                        id={collapseId}
                        className={`collapse ${
                          isFirst ? "show" : ""
                        } rounded-0 border`}
                        data-bs-parent="#servicesAccordion"
                      >
                        <div className="px-4 py-3 bg-light">
                          {service.content.map((item, i) =>
                            item.type === "paragraph" ? (
                              <p key={i} className="mb-2 text-muted small">
                                {item.text}
                              </p>
                            ) : (
                              <ul key={i} className="mt-3 list-unstyled">
                                {item.items.map((li, j) => (
                                  <li key={j} className="text-muted">
                                    <i className="bi bi-arrow-right-short dark-text me-1"></i>{" "}
                                    {li}
                                  </li>
                                ))}
                              </ul>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-4">
              <div className="card border rounded-0 mb-4 text-center">
                <div className="card-body py-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle border"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-telephone-outbound-fill dark-text fs-3"></i>
                  </div>
                  <h3 className="mt-3 mb-0 fw-bold dark-text">
                    02 9819 7799
                  </h3>
                </div>
              </div>

              <div className="card border rounded-0">
                <div className="card-header banner rounded-0 border-0 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-building text-white"></i>
                    <span className="fw-semibold text-white heading">
                      Located at:
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="fw-semibold">
                    Lo Surdo Braithwaite &amp; Co
                  </div>
                  <div>75, Lyons Road,</div>
                  <div>Drummoyne, NSW - 2047</div>

                  <div className="small">
                    <div>
                      <span className="fw-semibold">P: </span> 02 9819 7799
                      <span className="mx-2">|</span>
                      <span className="fw-semibold">F: </span> 02 9819 7653
                    </div>
                    <div>
                      <span className="fw-semibold">E: </span>
                      <a href="mailto:info@lsbca.com.au" className="dark-text">
                        info@lsbca.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
