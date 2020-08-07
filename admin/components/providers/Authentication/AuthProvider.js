import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

// Context
import { AuthContext } from '~/components/providers/Authentication/Auth.context';

const AuthProvider = ({ children, authenticatedData, authenticated }) => {
  const [cookieData, setCookieData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (get(authenticatedData, 'id')) {
      setCookieData(authenticatedData);
      setIsAuthenticated(authenticated);
    } else {
      setIsAuthenticated(false);
    }
  }, [authenticatedData, authenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        cookieData,
        setCookieData,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  authenticated: PropTypes.bool,
  authenticatedData: PropTypes.shape({
    id: PropTypes.string,
    authToken: PropTypes.string,
    authTokenExpiresTimestamp: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
};

AuthProvider.defaultProps = {
  authenticatedData: {},
  authenticated: false,
}
export default AuthProvider;
