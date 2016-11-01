import React from 'react';

const Results = (props) => {

  let firstShare = isNaN(props.primaryShare) ? 0 : props.primaryShare;
  let secondShare = isNaN(props.secondaryShare) ? 0 : props.secondaryShare;

  return (
    <div className="results">

      <div className="row total">
        <div className="col-lg-6 col-md-6 col-sm-1">
          <h4>Total Earnings:</h4>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-1">
          <h4>${props.totalEarnings}</h4>
        </div>
      </div>

      <div className="row total">
        <div className="col-lg-6 col-md-6 col-sm-1">
          <h4>Total Bills:</h4>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-1">
          <h4>${props.totalBills}</h4>
        </div>
      </div>

      <div className="results-owes">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-1">
            <h4>First Owes:</h4>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-1">
            <h4>${firstShare}</h4>
          </div>
        </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-1">
              <h4>Second Owes:</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-1">
              <h4>${secondShare}</h4>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Results;
