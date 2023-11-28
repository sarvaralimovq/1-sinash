import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../../img/logo.png'
import './Header.scss'
import { Context } from '../../Context/Context'
import { Link, useLocation } from 'react-router-dom'
import { faceData } from '../../lib/data'
// onClick={()=> setLanguage(1)} className={language == 1?'span1':'span1'}
// .filter((item)=> item.name.toLowerCase() == (searche.toLowerCase()))

// const filterCars = (searchText, listofCars)=> {
//     if(!searchText){
//         return listofCars ;
//     }
//         return listofCars.filter(({ name })=> 
//         name.toLowerCase().includec(searchText.toLowerCase()) 
        
//         );
//     }
//       console.log(filterCars);

function Header() {
    const { svet, setSvet } = useContext(Context)
    const { language, setLanguage } = useContext(Context)
    const { searche, setSearche } = useContext(Context)
    const [searcheData, setSearcheData] = useState(faceData)
    const [active , setActive] = useState(false)
    const inpRef = useRef(0)
    const inpRef2 = useRef(0)
// const location = useLocation(0).pathname

    // useEffect(()=> {
    //     const Debounce = setTimeout(()=> {
    //         const filteredCars = filterCars(searche, faceData);
    //         setSearcheData(filteredCars)

    //     }, 300)
    //     return () => clearTimeout(Debounce)
    // } , [searche])
   





    // console.log(language);
    const [vWidth, setVWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setVWidth(window.innerWidth);
    });
    window.addEventListener('click', (e)=> {
        if(e.target.id != 'input__window'){
            setActive(false)

        }
    })
    // inpRef.current.addEventListener('keydown',(e)=>{
    //     // e.preventDefault()
    //     setSearche(inpRef.current.value)
    // })
    function fn() {
        if (vWidth <= 1010) {
            inpRef.current.classList.toggle('big__inp')
            inpRef2.current.classList.toggle('big__inp2')
            
        }
    }

   
    
   
    // function fnSeache (){
    //     setSearche(inpRef.current.value)

    // }
    return (
        <div className='Header'>
            <div className="container">
                <nav className='nav'>
                    <div className="big">
                        <div className="hamburger">
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                        <i className="bi bi-list"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <i class="bi bi-caret-down-fill"></i>
                                        <li><Link className="dropdown-item" href="#">Home</Link></li>
                                        <li><Link className="dropdown-item" href="#">About</Link></li>
                                        <li><Link className="dropdown-item" href="#">Services</Link></li>
                                        <li><Link className="dropdown-item" href="#">Contact</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header__logo">
                            <Link to={'/'}>
                                <img src={logo} alt="img" />
                                <h1>AniSeezn</h1>
                            </Link>
                        </div>
                    </div>
                    <ul className='header__list'>
                        <li  ref={inpRef2} className='header__item inp__boxshadow'>
                            <a className='header__link' href="#">
                                <input id='input__window' ref={inpRef} onChange={(e) => setSearche(e.target.value )   } onClick={()=> setActive(!active)}  className={language == 1 ? 'header__uab header__search' : 'header__rus header__search'} type="text" placeholder={
                                    language == 1 ? 'Anime nomini kiriting' : 'Введите название Aниме ' 
                                } />
                                   
                                <ul className={active == true?'searche__heroData': 'none'}>
                                    {
                                    
                                        searcheData?.filter((item)=> item.name.toLowerCase() &&  item.info.toLowerCase().includes(searche.toLowerCase())).map((item , index)=>(

                                            <li  key={index}>
                                                   <a href={ item.idHref}>
                                                   <img src={item.img} alt="img" />
                                                    <h2>{item.name}</h2><br />
                                                    <p>{item.info}</p>
                                                   </a>
                                            </li>
                                        ))
                                        


                                    }

                                </ul>
                                <i id='input__window' onClick={fn} className="bi bi-search"></i>
                            </a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="https://t.me/fakey_soul" target='_blank'>
                                <span className='header__telegram'>Telegram
                                    <i className="bi bi-telegram"></i>
                                </span>
                            </a>
                        </li>
                        <li className='header__item'>

                            <button className='header__leange'>
                                <span onClick={() => setLanguage(1)} className='span1' >Uz</span>
                                <span onClick={() => setLanguage(2)} className='span2' >/Ru</span>
                            </button>

                        </li>
                        <li className='header__item'>
                            <Link className='header__link' >
                                <button className='header__login'>Login</button>
                                <button className='header__loginRes'>
                                    <i className="bi bi-person-fill"></i>
                                </button>
                            </Link>
                        </li>
                        <li onClick={() => setSvet(!svet)} className='header__item'>
                            <a className='header__link' href="#">
                                <button className='light'>{

                                    svet == false ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>
                                }</button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header