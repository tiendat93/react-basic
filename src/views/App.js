import logo from './logo.svg';
import './App.scss';
import HtmlForm from './Example/HtmlForm';

function App() {
  // 1 component của react là hàm, class hay funcion, mà nó trả ra 1 khối html
  // jsx biến là thẻ html
  // class component : bắt buộc dùng hàm render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HTML FORM
        </p>
        <HtmlForm></HtmlForm>
      </header>
    </div>
  );
}

export default App;
