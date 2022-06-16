import React, {createContext, useState} from 'react'
import file from '../../data/data.json'

export const DataContext = createContext()

export const DataProvider= (props) => {
    const [data, setData] = useState([file])
  return (
    <DataContext.Provider value = {[data, setData]}>
        {props.children}
    </DataContext.Provider>
  )
}
