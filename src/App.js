import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import theme from "./Assets/theme";
import SearchSection from "./Components/SearchSection";
import CardItems from "./Components/CardItems";
import Features from "./Components/Features";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
import { ThemeProvider, Container } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <Container>
        <SearchSection />
        <CardItems />
        <Features />
        <Customers />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
