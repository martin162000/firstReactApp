import React from 'react';
import {Switch, Route} from 'react-router-dom';


// STYLES && ASSETS
import './assets/scss/App.scss';

// COMPONENTS
import TheNavigation from "./components/TheNavigation";

//views
import Movies from './views/Movies';
import Details from './views/Details';
import Favourites from './views/Favourites';

function App() {
  return (
    <div className="App fadeIn">
      <header className="App-header">
            <TheNavigation  />
      </header>

      <main className="content">
          <Switch>
              <Route path="/firstReactApp/" component={Movies} exact />
              <Route path="/details/:movieId" component={Details} />
              <Route path="/details" component={Details} />
              <Route path="/favourites" component={Favourites} />
           </Switch>


        </main>   

    </div>
  );
}

export default App;
