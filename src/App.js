
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="App container">
        <Header />
        <hr></hr>
        <Home />
      </div>
      <Footer /></>
  );
}

export default App;
