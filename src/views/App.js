import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

function App() {
  // 1 component của react là hàm, class hay funcion, mà nó trả ra 1 khối html
  // jsx biến là thẻ html
  // class component : bắt buộc dùng hàng render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO <code>WWORLD</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
