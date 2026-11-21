


import { LogOut, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/AuthContext";

export default function AdminHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
    setIsLoggingOut(true);
    setError("");

    try {
      await logout();
      navigate("/admin/login", { replace: true });
    } catch {
      setError("Could not complete sign out. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <header className="admin-header">
      <NavBrand />

      <div className="admin-header-actions">
        <span className="admin-user">
          <ShieldCheck size={18} aria-hidden="true" />
          {user?.username ?? "Administrator"}
        </span>

        <button
          className="admin-logout"
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          <LogOut size={16} aria-hidden="true" />
          {isLoggingOut ? "Signing out…" : "Sign out"}
        </button>
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </header>
  );
}

function NavBrand() {
  return (
    <span className="admin-brand">
      Neurix <span>Admin</span>
    </span>
  );
}
