import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function NavBar() {
  const { role, logout } = useAuth();

  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/predictions">Predictions</Link>

      {role === "Admin" && (
        <>
          <Link to="/data-management">Data Management</Link>
          <Link to="/model-control">Model Control</Link>
        </>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}
