import './App.css';
import { useInput } from './useInput';

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput('', displayMessage);

  return (
    <div className="App">
      <div className="App-header">
        <h1>check</h1>
        <input
          className="input"
          value={inputValue}
          onChange={handleChange}
          placeholder={'Input name'}
        />
        <button className="submit" onClick={handleSubmit}>
          Submit{' '}
        </button>
      </div>
    </div>
  );
}

export default App;
