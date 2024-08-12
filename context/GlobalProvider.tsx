import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { router } from "expo-router";

// Define the types for the context
interface GlobalContextProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
  loading: boolean;
}

// Create the context with a default value of `undefined`
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

// Define the props for the GlobalProvider component
interface GlobalProviderProps {
  children: ReactNode;
}

// GlobalProvider component
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCurrentUser = async () => {
    const currentUser = GoogleSignin.getCurrentUser();
    if (currentUser==null){
      try {
        const userInfo = await GoogleSignin.signInSilently();
        setUser( userInfo.user );
        console.log(userInfo)
        setIsLogged(true)
        setLoading(false)
      } catch (error:any) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          console.log('sign in')
          setLoading(false)
        } else {
          setLoading(false)
        }
      }
    }else{
      setUser( currentUser.user );
      console.log(currentUser)
      setIsLogged(true)
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser()
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
