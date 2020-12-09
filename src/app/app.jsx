import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { MyContext } from './items/context';
import Nav from './navigation/navigation';
import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import Blog from './components/blog/blog';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Providers from './components/providers/providers';
import Calendar from './components/calendar/calendar';
import { providers, itemsForSlider, monthsOfYear, listOfTypes} from './items/state';
import Footer from './components/footer/footer';

export default function App() {

  const myItems = {
    providers: providers,
    itemsForSlider: itemsForSlider,
    monthsOfYear: monthsOfYear,
    listOfTypes: listOfTypes
  };

  return <>
      <BrowserRouter>
        <header >
          <Nav />
        </header>

        <main>
          <MyContext.Provider value={myItems}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/components/gallery/gallery" exact component={Gallery} />
              <Route path="/components/blog/blog" exact component={Blog} />
              <Route path="/components/contacts/contacts" exact component={Contacts} />
              <Route path="/components/about/about" exact component={About} />
              <Route path="/components/providers/providers/:type" exact component={Providers} />
              <Route path="/components/calendar/calendar/:id" exact component={Calendar} />
            </Switch>
          </MyContext.Provider>
        </main>

        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
  </>;
}