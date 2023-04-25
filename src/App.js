import './App.css';
import Header from './components/Header';
import Indications from './components/Indications';
import Result from './components/Result';
import AskChat from './components/AskChat';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [result, setShowResult] = useState();

  return (
    <div className="App">
      <body className="App-container">
        <Header />
        <Indications />
        <AskChat setLoading={setLoading} setShowResult={setShowResult}/>
        <Result loading={loading} setLoading={setLoading} result={result} setShowResult={setShowResult}/>
        
      </body>
    </div>
  );
}

export default App;
