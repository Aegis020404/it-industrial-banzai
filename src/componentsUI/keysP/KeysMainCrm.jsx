import React from 'react';
import cl from '../../style/KeysMainCrm.module.css';
import KeysItemList from '../KeysItemList';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MyAddElement from '../UI/adminaddel/MyAddElement';

const KeysMainCrm = ({classesTabs, setModalInfo, modalInfo, setModal, modal}) => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    const infoArr = useSelector(state=>state.KeysCrm)
    const scrollTopPage = (e)=>{
        document.body.scrollTo({top:0,behavior:'smooth'});
    }
    return (
       
            <div className={[cl.crmBlock, classesTabs].join` `}>
                {isAdmin && <MyAddElement typeAction={'ADD_CRM_KEYS_ELEMENT'}></MyAddElement>}
                <ul className={cl.crmList}>
                    {infoArr.map((e, i) => 
                        <KeysItemList keysPage='crm' actionDelete={'DELETE_CRM_KEYS_ELEMENT'} modal={modal} key={i} page={e.href} descr={e.descr} id={e.id} actionDescr={'DESCR_CRM_KEYS_CHANGE'} setActiveItem={setModalInfo} activeItem={modalInfo} setModal={setModal} classesImg={e.img.classesImg} logo={e.img.logo} alt={e.img.alt} background={e.img.background} img={e.img.image}/>
                    )}
                   
                </ul>
            </div>
       
    )
}

export default KeysMainCrm