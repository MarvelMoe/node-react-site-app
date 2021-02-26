import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <header className="App-header">
          <Route path="/" component={HomePage}  exact />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
