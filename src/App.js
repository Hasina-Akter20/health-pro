import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
// import { Route, Router, Switch } from "react-router";  
// import Header from "./Components/Header/Header";
// import Login from "./Components/Login/Login";
// import SignleTips from "./Components/SignleTips/SignleTips"; 
// import NotFound from "./Components/NotFound/NotFound";
// import AuthProvider from "./Components/contexts/AuthProvider";
// import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <NotFound></NotFound>
      {/* <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:id">
              <SignleTips></SignleTips>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider> */}
    </div>
  );
}

export default App;
