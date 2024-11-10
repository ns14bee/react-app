import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/overlay/Header";
import Footer from "./components/overlay/Footer";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="bg-primary text-primary">
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
