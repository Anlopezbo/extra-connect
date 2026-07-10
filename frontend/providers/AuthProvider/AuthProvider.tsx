"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "@/services/auth/auth.service";

import {
  AuthContextType,
  User,
} from "@/types/auth";

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadUser() {

      const currentUser = await getCurrentUser();

      setUser(currentUser);

      setLoading(false);

    }

    loadUser();

  }, []);

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuthContext() {

  return useContext(AuthContext);

}