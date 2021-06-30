import React from "react";
import HomePage from "./pages/Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Navbar, Footer, ProtectedRoute } from "../src/components/index";
import Contact from "./pages/Contact/Contact";
import Discography from "./pages/Discography/Discography";
import Videos from "./pages/Videos/Videos";
import { Container } from "globalStyles";
import AdminLogin from "pages/AdminLogin/AdminLogin";
import UploadPage from "pages/UploadPage/UploadPage";

const Parse = require("parse");

Parse.initialize("Haatef-site");
Parse.serverURL = "http://51.210.100.233:1336/parse";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/videos" component={Videos} />
          <Route path="/contact" component={Contact} />
          <Route path="/discography" component={Discography} />
          <Route path="/admin/login" component={AdminLogin} />
          <ProtectedRoute path="/admin/upload" component={UploadPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}
