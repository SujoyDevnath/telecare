import React, { createContext } from 'react';
import useFirebase from '../components/Hooks/useFirebase';
import useServices from '../components/Hooks/useServices';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const { services } = useServices();
    const data = {
        allContext,
        services
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;