import './App.css';
import { useInput } from './useInput';

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSunmit] = useInput('', displayMessage);

  return (
    <div className="App">
      <div className="App-header">
        <h1>useInput</h1>
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleSunmit}>확인 </button>
      </div>
    </div>
  );
}

export default App;
