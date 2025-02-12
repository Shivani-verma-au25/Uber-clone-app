import { captainDataContext } from '@/context/CaptainContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Spinner from '@/components/Spinner'; // Custom spinner component
// import ErrorMessage from '@/components/ErrorMessage'; // Custom error message component

function CaptainProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('captainToken')));
  const { setCaptain } = useContext(captainDataContext);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('captainToken');
      navigate('/captain-login');
      return;
    }

    let isMounted = true;

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200 && isMounted) {
          setCaptain(response.data.captain);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.error('Error fetching captain profile:', error);
          localStorage.removeItem('captainToken');
          setError('Authentication failed. Please log in again.');
          navigate('/captain-login');
        }
      });

    return () => {
      isMounted = false;
    };
  }, [token]);

  if (isLoading) {
    return <>Loading...</>
  }

  // if (error) {
  //   return <ErrorMessage message={error} />;
  // }

  return <>{children}</>;
}

export default CaptainProtectedWrapper;
