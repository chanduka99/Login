import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./pages/LoginPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from 'sonner';

function App() {
  return (
    <div>
       <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
