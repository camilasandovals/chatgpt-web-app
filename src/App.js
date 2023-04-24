import './App.css';
import Header from './components/Header';
import Indications from './components/Indications';
import Result from './components/Result';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <body className="App-container">
        <Header />
        <Indications />
        <TextField />
  
        <Result />
        
      </body>
    </div>
  );
}

export default App;
