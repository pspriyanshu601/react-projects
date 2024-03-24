import React, { useState } from 'react';

const LoadingButton = (props) => {
  return (
    <button onClick={props.onClick} type="button">
      {props.loading ? <div className="loader" /> : props.label}
    </button>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingButton
        label="Press me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
    </>
  );
}

export default App;
