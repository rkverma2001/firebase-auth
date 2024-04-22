import { Toaster } from "react-hot-toast";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./Home";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Toaster />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
