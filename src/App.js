import React from 'react';

const App = () => {
  return (<div className="container">
    <div className="valid-keys">
      <span className="matched">rafa</span>
      <span className="remainder">el</span>
    </div>
    <div className="typed-keys">asdfrafaasfd</div>
    <div className="completed-words">
      <ol>
        <li>cidade</li>
        <li>carro</li>
        <li>profissional</li>
      </ol>
    </div>
  </div>)
}

export default App;