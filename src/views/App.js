import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HỌC REACT JS NHÉ CÁC BẠN ƠI
        </p>

        <ListTodo />

      </header>


    </div>

  );
}

export default App;
