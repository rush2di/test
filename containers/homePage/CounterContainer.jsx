const CounterContainer = () => {
  return (
    <div className="my-5 my-sm-3">
      <div className="bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="col-3 col-md-6 col-xsm-6">
              <div className="d-flex flex-column">
                <div>
                  <span className="txt-display-comp font-weight-bold color-light d-block">
                    2K+
                  </span>
                  <span className="txt txt-muted">Hotels partnerships</span>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-6 col-xsm-6">
              <div className="d-flex flex-column">
                <div>
                  <span className="txt-display-comp font-weight-bold color-light d-block">
                    25m+
                  </span>
                  <span className="txt txt-muted">Happy costumers</span>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-6 col-xsm-6">
              <div className="d-flex flex-column">
                <div>
                  <span className="txt-display-comp font-weight-bold color-light d-block">
                    10K+
                  </span>
                  <span className="txt txt-muted">Categories served</span>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-6 col-xsm-6">
              <div className="d-flex flex-column">
                <div>
                  <span className="txt-display-comp font-weight-bold color-light d-block">
                    100m+
                  </span>
                  <span className="txt txt-muted">Ideas raised funds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterContainer;
