import { createContext, useContext } from 'react';
import { logger } from "~/config/logger";

export const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {}
});

export function useAuthentication() {
  const context = useContext(AuthContext);

  if (!context) {
    logger.error('ERROR: useAuth must be used within an AuthProvider');
  }

  return context;
}

export function useIsAuthenticated() {
  const context = useAuthentication();
  return context.isAuthenticated;
}
