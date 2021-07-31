import PageTemplate from './templates/PageTemplate';
import Home from './Pages/home';
import "./sass/main.scss";

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
