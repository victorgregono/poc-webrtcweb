import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [cliente, setCliente] = useState({});

  const handleCreateUserSession = (user, data) => {
    localStorage.setItem(user, JSON.stringify(data));
  }

  const handleCreateClienteSession = (user, data) => {
    localStorage.setItem(user, JSON.stringify(data));
  }

  const handleGetUserSession = (user) => {
    setUser(JSON.parse(localStorage.getItem(user)))
  }

  const handleGetClienteSession = (user) => {
    setUser(JSON.parse(localStorage.getItem(user)))
  }

  const handleUpdateUserSession = (user, data) => {
    localStorage.setItem(user, JSON.stringify(data));
  }
  
  return (
    <UserContext.Provider value={{ 
        cliente, 
        setCliente,
        user, 
        setUser, 
        handleCreateUserSession,
        handleGetUserSession, 
        handleCreateClienteSession,
        handleGetClienteSession,
        handleUpdateUserSession
      }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
      throw new Error('useLoading must be used within UserContext')
  }
  return context
}
