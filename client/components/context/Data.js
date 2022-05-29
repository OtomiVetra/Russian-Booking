import { createContext, useContext, useState } from 'react'
import { API_URL } from '../../config';

const DataContext = createContext()
export const DataProvider = ({ children }) => {
  const [suit, setSuit] = useState(null)

  const loadSuit = (id) => {
    fetch(`${API_URL}/suites/${id}`)
      .then(res => res.json())
      .then(data => {
        setSuit(data.item)
      })
  }
  const value = {
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