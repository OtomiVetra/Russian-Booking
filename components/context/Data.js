import {createContext, useContext, useState} from 'react'
import {API_URL} from '../../config';

const DataContext = createContext()
const defaultUser = {
  name: "Jhon",
  auth: false,
  loading: false
}
export const DataProvider = ({children}) => {
  const [suit, setSuit] = useState(null)

  const loadSuit = (id) => {
    fetch(`${API_URL}/suites/${id}`)
      .then(res => res.json())
      .then(data => {
        setSuit(data.item)
      })
  }
  const value = {
    user: defaultUser,
    suit,
    loadSuit
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}


export const useDataContext = () => useContext(DataContext)