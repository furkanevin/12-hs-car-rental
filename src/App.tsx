import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import { Analytics } from "@vercel/analytics/react";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-gray text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
