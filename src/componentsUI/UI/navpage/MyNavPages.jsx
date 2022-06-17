import React from "react";
import Link from "next/link";
import cl from './MyNavPages.module.css';

const NavPagesHead = ({navItems})=>{
    return (
        <div className="container">
            <div className={cl.pag}>
                <ul className={cl.pagList}>
                    <li className={cl.pagItem}>
                        <Link href='/'>
                            <span className={cl.disablePage}>Главная</span>
                        </Link>
                    </li>
                    {navItems.map((e,i,arr)=>
                        e.link !== undefined  ? 
                        <li className={cl.pagItem} key={i}>
                            <span className={cl.pagSec}></span>
                            <Link href={e.link}>
                                <span className={i+1 == arr.length ? cl.activePage : cl.disablePage}>{e.text}</span>
                            </Link>
                        </li>
                        :
                        <li className={cl.pagItem} key={i}>
                            <span className={cl.pagSec}></span>
                            <span className={i+1 == arr.length ? cl.activePage : cl.disablePage}>{e.text}</span>
                        </li>
                       
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavPagesHead