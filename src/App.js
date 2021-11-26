import './App.css';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import About from './Components/Home/AboutUs/About';
import Blogs from './Components/Home/Blogs/Blogs';
import Contact from './Components/Home/ContactUs/Contact';
import Services from './Components/Home/Services/Services';
import Doctors from './Components/Home/Doctors/Doctors';
import Shop from './Components/Home/Shop/Shop';
import Footer from './Components/Footer/Footer';
import AboutDr from './Components/Home/AboutDr/AboutDr';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <PrivateRoute path="/doctors">
          <Doctors></Doctors>
        </PrivateRoute>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
        <Route path="/footer">
          <Footer></Footer>
        </Route>
        <PrivateRoute path="/aboutdr/:serviceId">
          <AboutDr></AboutDr>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
