import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function ProtectedRoute({ children }) {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userInfo?.isAdmin) {
    return children;
  }

  return <Navigate to="/blogs" />;
}
