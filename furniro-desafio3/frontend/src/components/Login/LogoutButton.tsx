import { useNavigate } from "react-router";

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-sm hover:underline"
    >
      Logout
    </button>
  );
}