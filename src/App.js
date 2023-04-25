import './App.css';
import Header from './components/Header';
import Indications from './components/Indications';
import Result from './components/Result';
import AskChat from './components/AskChat';

function App() {
  return (
    <div className="App">
      <body className="App-container">
        <Header />
        <Indications />
        <AskChat />
        {/* <Result /> */}
        
      </body>
    </div>
  );
}

export default App;
