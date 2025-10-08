import React from "react";

const PageHeader = ({ breadcrumbs }) => {
  return (
    <div className="container-fluid banner p-0">
      <div className="container py-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-start m-0">
            {breadcrumbs.map((breadcrumb, index) => (
              <li
                key={index}
                className={`breadcrumb-item heading ${
                  breadcrumb.active ? "active text-white" : ""
                }`}
                aria-current={breadcrumb.active ? "page" : undefined}
              >
                {breadcrumb.active ? (
                  breadcrumb.label
                ) : (
                  <a
                    href={breadcrumb.href}
                    className="text-light text-decoration-none"
                  >
                    {breadcrumb.icon && (
                      <i className={`bi ${breadcrumb.icon} me-2`}></i>
                    )}
                    {breadcrumb.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
