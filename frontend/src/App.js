import { BrowserRouter, Route , Switch } from 'react-router-dom';

import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";


export default function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <header className="App-header">
         <NavBar/>
         <div id="page-body" >
         <Switch>
            <Route path="/" component={HomePage}  exact />
            <Route path="/about" component={AboutPage}   />
            <Route path="/artciles" component={ArticlesListPage}   />
            <Route path="/article/:name" component={ArticlePage}   />
            <Route render={() => <h1>404: page not found</h1>} />
         </Switch>
         </div>
        </header>
      </div>
    </BrowserRouter>
  );
}