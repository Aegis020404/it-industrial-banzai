import React, {useState, useEffect, useMemo} from "react";



import { useDispatch } from "react-redux";
import { getStartedInfo } from "../untils/getStartedInfo";


export const useChangeStateFirst = (setPremissionGet,premissionGet, changingItem, urlState,changingState,typeActionChange)=>{
    const [viewElUntil, setViewElUntil] = useState('')
    const dispatch = useDispatch()
  
   
  
    useEffect(()=>{ 
        
        const startedInfo = urlState == 'AT' ? getStartedInfo(changingItem,'CHANGE_ALL_ADMIN','/adminTexts/'+changingItem,dispatch ) : getStartedInfo(changingItem,typeActionChange,urlState,dispatch )
        startedInfo.then(res=>{
            setPremissionGet('200')
        })

    },[viewElUntil])

    return premissionGet
}