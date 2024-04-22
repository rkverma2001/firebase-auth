import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User created!");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use.");
      } else {
        toast.error("Failed to create user.");
      }
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
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
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Go to Login
        </button>{" "}
        {/* Add navigation button */}
      </form>
    </div>
  );
}

export default Signup;
