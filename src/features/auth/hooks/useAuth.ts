import { useContext } from 'react';
import { AuthContext } from '../stores/AuthProvider';

export const useAuth = () => {
  return useContext(AuthContext);
};
