import { useNavigate } from "react-router";

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}