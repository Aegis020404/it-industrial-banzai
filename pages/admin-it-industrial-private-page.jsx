import React, {useEffect, useState} from 'react';
import cl from './../src/style/Admin.module.css';
import MyInput from './../src/componentsUI/UI/input/MyInput';
import MyBtn from './../src/componentsUI/UI/buttonborder/MyBtnBlank'; 
import { memo } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Link from 'next/link';
const Admin = ()=>{
    const adminKeys = {login: 'Aoqwpksd123---asdwd----__-l213asdasdjfnaKJlkjILJlkjLKJLKJ123123:Lw;lsdwadl;aksdl;a;lw;dlsdllaw;dsddaihjdWLJL-00-0-0daskldaw;sd',password: 'W13oi31po2ipoiOPIASOPDIopiaasodi32123poip1o34iOPIPOISPODAISDOPip2o3i1poiasdjkladjawloiOPIPOI12PO3I12O3P1I3POSDASDJLAKJpo;iwkasdjakdj21p3oiakjsdkladjlkdjakthqoiru123iouo8au18o23i1ljepdu03819udiosduqoi21iu3oidjsadjkah' }
    const [isLogin, setIsLogin] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const dispatch = useDispatch()
    const isAdmin = useSelector(state=>state.AdminKey)
   
    const checkForm = (e)=>{
        isLogin === adminKeys.login && isPassword === adminKeys.password ? dispatch({type: 'IS_ADMIN_TRUE', value: true}) : e.preventDefault()
    }
    
    return (
        <>
            <div className={cl.blockAdmin}>
                <div className={cl.cardAdmin}>
                    <h1 className={cl.titleAdmin}>Вход в админку</h1>
                    <form className={cl.fromAdmin} id='admin' >
                        <MyInput place="Логин" type='text' form='admin' className={cl.login} valueInput={isLogin} setCheckInputSite={setIsLogin}/>
                        <MyInput place="Пароль" type='text' form='admin' className={cl.password}  valueInput={isPassword} setCheckInputSite={setIsPassword}/>
                        <div className={cl.btnBlock}>
                            <Link href={isAdmin ? '/' : '/admin-it-industrial-private-page?'}>
                                <MyBtn type='submit' form='admin' classes={cl.btn}  onClick={e=>checkForm(e)}>Войти</MyBtn>
                            </Link>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin