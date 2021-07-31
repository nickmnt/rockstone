import logo from './logo.svg';
import './App.css';
import PageTemplate from './templates/PageTemplate';
import Home from './Pages/home';

function App() {
  return (
    <div className="App">
        <PageTemplate>
          <Home />
        </PageTemplate>
    </div>
  );
}

export default App;
