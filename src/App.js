import React from "react";
import Menu from "./components/Menu";
import Landing from "./containers/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Story from "./containers/Story";
import Contact from "./containers/Contact";
import Page_404 from "./containers/404";
function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="sections">
          <header className="sections__header">
            <h1 className="title">Travelout</h1>
          </header>
          <Menu />
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/story/" exact>
              <Story />
            </Route>
            <Route path="/contact/" exact>
              <Contact />
            </Route>
            <Route>
              <Page_404 />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
