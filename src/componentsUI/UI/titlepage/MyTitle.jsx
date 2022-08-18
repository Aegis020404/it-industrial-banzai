import React, {useState} from 'react';
import cl from './MyTitle.module.css'
import { useSelector } from 'react-redux';
import MyAdminInput from '../admininput/MyAdminInput';
const MyTitle = ({title, classes, typeAction, ...props})=>{
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [titlesData, setTitlesData] = useState({title: {width:0,height:0}})
    return (
        isAdmin ? 
            <MyAdminInput width={titlesData.title.width} height={titlesData.title.height} typeAction={typeAction}>
                <h1 className={[cl.title, classes].join` `} onClick={e=>setTitlesData({...titlesData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})} {...props}>{title}</h1>
            </MyAdminInput>
            :
            <h1 className={[cl.title, classes].join` `} {...props}>{title}</h1>
            
       
    )
}
export default MyTitle