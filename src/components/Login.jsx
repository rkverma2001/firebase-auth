import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in!", userCredential.user);
      toast.success("Logged in successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with password and email", error.message);
      toast.error("Failed to login, check credentials.");
    }
  };

  const handleGoToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login-btn" type="button" onClick={handleLogin}>
          Login
        </button>
        <button
          type="button"
          onClick={handleGoToSignup}
          className="signup-button"
        >
          Sign Up
        </button>{" "}
        {/* Signup button */}
      </form>
    </div>
  );
}

export default Login;
