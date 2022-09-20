import Link from "next/link";
import React, {useState}  from "react";
import cl from '../../style/MainKeys.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import Image from "next/image";

const MainKItem = ({count, infoArr, id, modalInfoChanging,premissionTariff, setModal, modalInfo, element})=>{
   
    const [sizeInfo, setSizeInfo] = useState({descr: {width:0,height:0}})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    return (
        <li className={cl.keysItem}>
            {isAdmin?<MyDeleteElement id={id} typeAction={'DELETE_KEYS_MAIN_ITEM_ELEMENT'}></MyDeleteElement>:''}
            {count === 2 ?  
                <div className={cl.keysIContentS}>
                    <MyViewElement element={
                            <figure  alt={infoArr[0].alt} className={cl.keysILeft} >
                                <span className={cl.changeItem} onClick={e=>{setModal(true);modalInfoChanging({...modalInfo,href: infoArr[0].href,color:infoArr[0].backColor, alt:infoArr[0].alt, id: id, count: 1})}}>ИЗМЕНИТЬ</span>
                                 <Link href={'/keys/' + infoArr[0].href}>
                                {infoArr[0].classes == cl.imgEva ?  <div className={[cl.evaBlock, cl.img].join` `} style={{backgroundColor: infoArr[0].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                    <Image width={185} height={40} src={`/img/${infoArr[0].img[0]}`} alt="logo Ekovtor" className={[cl.evaLogo].join` `}/>
                                    <Image width={360} height={390} src={`/img/${infoArr[0].img[1]}`} alt="female Ekovtor" className={[cl.femaleimgSort].join` `}/>
                                    <Image width={576} height={659} src={`/img/${infoArr[0].img[2]}`} alt='ekoM' className={[cl.ekoM].join` `}/>
                                </div>
                                :   
                                <div className={cl.imgCardWrapper} style={{backgroundColor: infoArr[0].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                    <Image width={560} height={640}  src={`/img/${infoArr[0].img[0]}`} alt='info'   className={[cl.keysImg, infoArr[0].classes, cl.img ].join` `}/>
                                </div>}
                                </Link>
                                {
                                      isAdmin && premissionTariff == '200' ? 
                                      <MyAdminInput width={sizeInfo.descr.width}  fetchInfo={{item: element, category: 'mainKeys', id: id}} id={id} count={1} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_ITEM_ELEMENT'}>
                                          <figcaption className={cl.keysIDescr} onClick={e=>{e.preventDefault();setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{infoArr[0].descr}</figcaption>
                                      </MyAdminInput>
                                      :
                                      <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                                }
                                
                            </figure>
                       
                    }/>
                    <MyViewElement element={
                  
                        <figure alt={infoArr[1].alt} className={cl.keysIRight} >
                             {isAdmin?<span className={cl.changeItem} onClick={e=>{setModal(true);modalInfoChanging({...modalInfo,href: infoArr[1].href,color:infoArr[1].backColor, alt:infoArr[1].alt, id: id, count: 2})}}>ИЗМЕНИТЬ</span>:''}
                              <Link href={'/keys/' + infoArr[1].href}>
                            {infoArr[1].classes == cl.imgMiniPad ? 
                            <div className={[cl.padBlock, cl.img].join` `} style={{backgroundColor: infoArr[1].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                <Image src={`/img/${infoArr[1].img[0]}`} width={440} height={340} alt='photo'  className={[infoArr[1].classes].join` `}/>
                            </div>
                            :
                            <div className={cl.imgCardWrapper} style={{backgroundColor: infoArr[1].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                             <Image src={`/img/${infoArr[1].img[0]}`} width={561} height={641} alt='photo'  className={[cl.keysImg, infoArr[1].classes, cl.img].join` `}/>

                            </div>  }
                            </Link>
                                {
                                      isAdmin && premissionTariff == '200' ? 
                                      <MyAdminInput width={sizeInfo.descr.width}  fetchInfo={{item: element, category: 'mainKeys', id: id}}  id={id} count={2} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_ITEM_ELEMENT'}>
                                          <figcaption className={cl.keysIDescr} onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoArr[1].descr}</figcaption>
                                      </MyAdminInput>
                                      :
                                      <figcaption className={cl.keysIDescr}>{infoArr[1].descr}</figcaption>
                                }
                               
                        </figure>
                    
                    }/>
                </div>
            :  
                <MyViewElement element={
              
                    <figure  alt={infoArr[0].alt}  className={cl.keysIContentF}  >
                         <span className={cl.changeItem} onClick={e=>{setModal(true);modalInfoChanging({...modalInfo,href: infoArr[0].href,color:infoArr[0].backColor, alt:infoArr[0].alt, id: id, count: 1})}}>ИЗМЕНИТЬ</span>
                          <Link href={'/keys/' + infoArr[0].href} >
                        <div className={[cl.keysImgBlockF, cl.img].join` `} style={{backgroundColor: infoArr[0].backColor}} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                        <Image src={`/img/${infoArr[0].img[0]}`} width={756} height={513} className={[cl.keysImg, infoArr[0].classes[0]].join` `}/>
                        <Image src={`/img/${infoArr[0].img[0]}`}  width={756} height={513} className={[cl.keysImg, infoArr[0].classes[1]].join` `}/>
                        </div>
                        </Link>
                            {
                                    isAdmin && premissionTariff == '200' ? 
                                    <MyAdminInput width={sizeInfo.descr.width} id={id} count={1} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_ITEM_ELEMENT'}>
                                        <figcaption className={cl.keysIDescr} onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoArr[0].descr}</figcaption>
                                    </MyAdminInput>
                                    :
                                    <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                            }
                            
                    </figure>
                
                }/>
            }
        </li>
    )
}

export default MainKItem