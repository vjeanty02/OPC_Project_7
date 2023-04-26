import React from "react"; 
import AppRouter from "./AppRouter";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;