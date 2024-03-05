
const AccordionComponent = () => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button icons-accordion row d-flex justify-content-between p-0 position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <div className="col-10  d-flex justify-content-start align-items-center">
              <span className="item-count position-absolute">01</span>
              <span className="item-name-accordion ps-4 pt-3">Branding</span>
            </div>
            <div className="col-1 align-self-center text-end">
              <i className="bi bi-plus icon-accordion"></i>
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body ps-4">
            <div className="row">
              <div className="col-4">
                <p className="mb-0">Brand Strategy</p>
              </div>
              <div className="col-4">
                {" "}
                <p className="mb-0">Logo Design</p>
              </div>
              <div className="col-4">
                <p className="mb-0">Brand Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed row d-flex justify-content-between p-0 position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <div className="col-10  d-flex justify-content-start align-items-center">
              <span className="item-count position-absolute">02</span>
              <span className="item-name-accordion ps-4 pt-3">
                UI/UX Design
              </span>
            </div>
            <div className="col-1 align-self-center text-end">
              <i className="bi bi-plus icon-accordion"></i>
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-4">
                <p className="mb-0">Brand Strategy</p>
              </div>
              <div className="col-4">
                {" "}
                <p className="mb-0">Logo Design</p>
              </div>
              <div className="col-4">
                <p className="mb-0">Brand Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed row d-flex justify-content-between p-0 position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            <div className="col-10  d-flex justify-content-start align-items-center">
              <span className="item-count position-absolute">03</span>
              <span className="item-name-accordion ps-4 pt-3">
                Mobile App Design
              </span>
            </div>
            <div className="col-1 align-self-center text-end">
              <i className="bi bi-plus icon-accordion"></i>
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-4">
                <p className="mb-0">Brand Strategy</p>
              </div>
              <div className="col-4">
                {" "}
                <p className="mb-0">Logo Design</p>
              </div>
              <div className="col-4">
                <p className="mb-0">Brand Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed row d-flex justify-content-between p-0 position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            <div className="col-10  d-flex justify-content-start align-items-center">
              <span className="item-count position-absolute">04</span>
              <span className="item-name-accordion ps-4 pt-3">SaaS Design</span>
            </div>
            <div className="col-1 align-self-center text-end">
              <i className="bi bi-plus icon-accordion"></i>
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-4">
                <p className="mb-0">Brand Strategy</p>
              </div>
              <div className="col-4">
                {" "}
                <p className="mb-0">Logo Design</p>
              </div>
              <div className="col-4">
                <p className="mb-0">Brand Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
