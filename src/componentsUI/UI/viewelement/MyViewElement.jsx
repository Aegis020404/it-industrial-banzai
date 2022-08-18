import React, { useRef,useState, useEffect, useMemo } from 'react';
import cl from './MyViewElement.module.css';
import { useInView } from 'react-intersection-observer';

const MyViewElement = ({element})=>{
    const { ref, inView, entry } = useInView()
    const [isViewElement, setIsViewElement] = useState(true)
    const [classes, setClasses] = useState([cl.disableElement])
    // cl.activeElement
    useEffect(()=>{
        window.addEventListener('wheel', function(event) {
            if (event.deltaY < 0)
            {
          
            setIsViewElement(false)
            }
            else if (event.deltaY > 0)
            {
          
            setIsViewElement(true)
            }
        });
    },[isViewElement])

    useMemo(()=>{
        if(inView)setClasses([...classes, cl.activeElement])
    },[inView])
    return (
        
                <div ref={ref}>
                     <div  className={classes.join` `}>
                        {element}
                    </div>
                </div>
    
      
    )
}

export default MyViewElement