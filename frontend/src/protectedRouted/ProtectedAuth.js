import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedAuth({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  useEffect(() => {
    if (user?.id) {
      navigate("/");
    }
  }, [navigate, user?.id]);
  return !user?.id ? children : null;
}
