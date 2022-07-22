import logo from './images.png';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hayden Shaffer Senior capstone
          </p>
          <p>
            Welcome!
          </p>
          <form>
            <label>
              Enter a comment:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <a
              className="App-link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
          >
            Documents
          </a>
        </header>

      </div>

  );
}

export default App;
