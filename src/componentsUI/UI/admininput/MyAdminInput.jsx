import React, { useRef, useState,useMemo } from 'react';
import cl from './MyAdminInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
const MyAdminInput = ({width, height, typeAction, count, children, id, number})=>{
    const [isChange, setIsChange] = useState(undefined)
    const [blockChild, setBlockChild] = useState(width)
    const dispatch = useDispatch();
    const isAdmin = useSelector(state=>state.AdminKey)
    const [valueArea, setValueArea] = useState(children.props.children) 
    const saveChange = ()=>{
        dispatch({type: typeAction, info: {text: valueArea, id: id, count: count, number: number}})
        setIsChange(false)
    }

    const сancellationChange = (e)=>{
        e.preventDefault()
        setValueArea(children.props.children) 
        setIsChange(false)
    }

    const getChildAndActive = (e)=>{
        setIsChange(true)
    }


    return (
        <> 
            <div className={cl.changeBlock} >
                {isChange ? 
                    <label className={cl.labelAdmin} >
                        <textarea type='text' name='changeItem' value={valueArea} onChange={e=>setValueArea(e.target.value)}  className={[cl.inputAdmin, children.props.className].join` `} style={{width: width + 2, height: height}}/>
                        <span className={cl.saveAdmin} onClick={e=>saveChange(e)}>save</span>
                        <span className={cl.cancelAdmin} onClick={e=>сancellationChange(e)}>cancel</span>
                    </label>
                :
                <div  onClick={e=>getChildAndActive(e)}>
                    { children }
                </div>
                }
            </div>
        </>
    )
}

export default MyAdminInput