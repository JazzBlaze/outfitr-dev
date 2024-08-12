// import React, { createContext, useState, useEffect, ReactNode, FC } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   photo?: string;
//   accessToken: string;
//   // Add more fields if needed
// }

// interface UserContextProps {
//   user: User | null;
//   loading: boolean;
//   loginUser: (userInfo: User) => Promise<void>;
//   logoutUser: () => Promise<void>;
//   refreshToken: () => Promise<void>;
// }

// export const UserContext = createContext<UserContextProps>({
//   user: null,
//   loading: true,
//   loginUser: async () => {},
//   logoutUser: async () => {},
//   refreshToken: async () => {},
// });

// interface UserProviderProps {
//   children: ReactNode;
// }

// export const UserProvider: FC<UserProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const userData = await AsyncStorage.getItem('userData');
//         if (userData) {
//           setUser(JSON.parse(userData));
//         }
//       } catch (e) {
//         console.error('Failed to load user data:', e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadUserData();
//   }, []);

//   const loginUser = async (userInfo: User) => {
//     try {
//       await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
//       setUser(userInfo);
//     } catch (e) {
//       console.error('Failed to save user data:', e);
//     }
//   };

//   const logoutUser = async () => {
//     try {
//       await GoogleSignin.signOut();
//       await AsyncStorage.removeItem('userData');
//       setUser(null);
//     } catch (e) {
//       console.error('Failed to log out user:', e);
//     }
//   };

//   const refreshToken = async () => {
//     try {
//       const tokens = await GoogleSignin.getTokens();
//       if (user) {
//         const updatedUser = { ...user, accessToken: tokens.accessToken };
//         await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
//         setUser(updatedUser);
//       }
//     } catch (e) {
//       console.error('Failed to refresh token:', e);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, loading, loginUser, logoutUser, refreshToken }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
