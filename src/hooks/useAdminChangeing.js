
export const useFetchingPost = async (infoChange, category, id,isAdmin)=>{
   if( id !== undefined) {
    const response = await fetch(`api/state/set?category=${category}&id=${id}&data=${JSON.stringify(infoChange)}`)
    const data = await response.json()
    return data
   }
   const response = await fetch(`api/state/set?category=adminTexts&id=1&data=${JSON.stringify({ads:1})}`)
   const data = await response.json()
   return data

   
 }

export const useFetchingGet = async (urlApi)=>{
    const response = await fetch('api/state/get/'+urlApi)
    const data = await response.json()
    if( typeof data === 'object') {
        return data
    }

    return JSON.parse(data)
}

export const useFetchingImg = async (formData)=>{
    const response = await fetch(`api/upload`, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    return data
 }


 export const usePing = async ()=>{
    const response = await fetch(`api/ping`)
    const data = await response.json()
    
    return data
 }