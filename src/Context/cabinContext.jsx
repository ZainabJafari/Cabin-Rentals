import {createContext, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


export const CabinsContext = createContext(null)

export const CabinsContextProvider = (props) => {

    const { id } = useParams()

    const [getData, setGetData] = useState([])
    const [getCabinDetail, setCabinDetail] = useState()

    
    const getAllCabins = async () => {
        const result = await axios.get('http://localhost:7777/api/cabin')
        setGetData(result.data)
    }

    const cabinGetById = async () => {
       const result =  await axios.get('http://localhost:7777/api/cabin/' + id)
     if(result.data){
       setCabinDetail(result.data)} 
    }
   

    const cabinContextValue = {getAllCabins, getData, cabinGetById, getCabinDetail}
    return <CabinsContext.Provider value={cabinContextValue}>{props.children}</CabinsContext.Provider>
}
//