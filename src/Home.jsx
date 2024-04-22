import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";
import "./Home.css";
import { toast } from "react-hot-toast";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Failed to logout", error);
      toast.error("Logout failed!");
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </div>
  );
}

export default Home;
