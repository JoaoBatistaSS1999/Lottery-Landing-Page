import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./Hero";
import Logs from "./Logs";
import Partners from "./Partners";
import Main from "./Main";

import Bitcoin from "./pages/Bitcoin";
import Ethereum from "./pages/Ethereum";
import React from "react";
import Krstm from "./pages/Krstm";
import Matic from "./pages/Matic";
import MyTickets from "./pages/MyTickets";
import Social from "./Social";

// const hello = process.env.REACT_APP_TEST_VARIABLE;

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />

      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Bitcoin />} />
          <Route path="/ethereum" element={<Ethereum />} />
          <Route path="/krstm" element={<Krstm />} />
          <Route path="/matic" element={<Matic />} />
          <Route path="/my-tickets" element={<MyTickets />} />
        </Routes>
      </BrowserRouter>

      <Banner />
      <Logs />
      <Partners />
      <Footer />
      <Social />
    </React.Fragment>
  );
}

export default App;
