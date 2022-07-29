import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="loadingDiv" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%'}}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
