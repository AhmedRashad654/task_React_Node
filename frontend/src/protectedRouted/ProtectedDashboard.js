import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedDashboard({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  useEffect(() => {
    if (!user || !user?.id) {
      navigate("/login");
    }
  }, [navigate, user]);
  return user && user?.id ? children : null;
}
