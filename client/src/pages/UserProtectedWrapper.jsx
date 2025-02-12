import { userDataContext } from '@/context/UserContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const token = (() => {
    try {
      return JSON.parse(localStorage.getItem('token'));
    } catch {
      return null;
    }
  })();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(userDataContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate('/user-login');
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('token');
        setIsLoading(false); // Ensure loading state is updated
        navigate('/user-login');
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
