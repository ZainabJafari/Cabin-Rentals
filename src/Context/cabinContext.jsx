// import {createContext, useState} from 'react'
// import axios from 'axios'

// export const CabinsContext = createContext(null)

// export const CabinsContextProvider = (props) => {

//     const [getData, setGetData] = useState([])
    
//     const getAllCabins = async () => {
//         const result = await axios.get('http://localhost:7777/api/cabin')
//         setGetData(result.data)
//         // console.log(getData)
//     }

//     const cabinContextValue = {getAllCabins, getData}
//     return <CabinsContext.Provider value={cabinContextValue}>{props.children}</CabinsContext.Provider>
// }
// //