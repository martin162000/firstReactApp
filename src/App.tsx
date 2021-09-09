import React from 'react';
import {Switch, Route} from 'react-router-dom';


// STYLES && ASSETS
import './App.scss';

// COMPONENTS
import TheNavigation from "./components/TheNavigation";

//views
import Movies from './views/Movies';
import Details from './views/Details';
import Favorite from './views/Favorite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <TheNavigation  />
      </header>

      <main className="content">
          <Switch>
              <Route path="firstReactApp/" component={Movies} exact />
              <Route path="/details/:movieId" component={Details} />
              <Route path="/favorite" component={Favorite} />
           </Switch>


        </main>   

    </div>
  );
}

export default App;
