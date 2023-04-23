import './App.css';
import Header from './components/Header';
import Indications from './components/Indications';
import Result from './components/Result';
import textField from './components/textField';

function App() {
  return (
    <div className="App">
      <body className="App-container">
        <Header />
        <Indications />
        <textField />
        <Result />
        
      </body>
    </div>
  );
}

export default App;
