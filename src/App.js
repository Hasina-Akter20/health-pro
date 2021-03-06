import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import { Route, Switch } from "react-router";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Tips from "./Components/Tips/Tips";
import TipsDetails from "./Components/TipsDetails/TipsDetails";
import AuthProvider from "./Components/contexts/AuthProvider";
import ContactUs from "./Components/ContactUs/ContactUs";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/tips">
              <Tips></Tips>
            </Route>
            <PrivateRoute path="/details/:id">
              <TipsDetails></TipsDetails>
            </PrivateRoute>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
