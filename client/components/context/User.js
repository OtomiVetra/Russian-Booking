import { createContext, useContext, useEffect, useState } from 'react'
import { API_URL } from '../../config';

const UserContext = createContext()
const defaultUser = {
  name: "Guest",
  auth: false,
  loading: true
}
const authUser = {
  name: "John",
  auth: true,
  loading: false
}
const getUserFromStorage = () => {
  if (!localStorage) {
    return defaultUser
  }
  const userStr = localStorage.getItem("user-info")
  return userStr ? JSON.parse(userStr) : { ...defaultUser, loading: false }
}

const setUserIntoStorage = (data) => {
  localStorage.setItem("user-info", JSON.stringify(data))
}
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser)
  const [afterLoginURL, setAfterLoginURL] = useState("/")

  const login = (email, password) => {
    setTimeout(() => {
      setUser(authUser)
      setUserIntoStorage(authUser)
    }, 500)
  }
  const logout = () => {
    setUser({ ...defaultUser, loading: false })
    setUserIntoStorage({ ...defaultUser, loading: false })
  }

  useEffect(() => {
    setUser(getUserFromStorage())
  }, [])
  const value = {
    user,
    login,
    logout,
    afterLoginURL,
    setAfterLoginURL
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}


export const useUserContext = () => useContext(UserContext)