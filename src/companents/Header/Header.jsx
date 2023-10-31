import React, { useContext } from 'react'
import logo from '../../img/logo.png'
import './Header.scss'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'
// onClick={()=> setLanguage(1)} className={language == 1?'span1':'span1'}
function Header() {
    const { svet, setSvet } = useContext(Context)
    const { language, setLanguage } = useContext(Context)
    // console.log(language);
   
    return (
        <div className='Header'>
            <div className="container">
                <nav className='nav'>
                    <div className="big">
                        <div className="hamburger">
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                       
                                        <i className="bi bi-list"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li><Link class="dropdown-item" href="#">Home</Link></li>
                                        <li><Link class="dropdown-item" href="#">About</Link></li>
                                        <li><Link class="dropdown-item" href="#">Services</Link></li>
                                        <li><Link class="dropdown-item" href="#">Contact</Link></li>
                                      
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
                        <li className='header__item'>
                            <a className='header__link' href="#">
                                <input className={language==1?'header__uab header__search':'header__rus header__search'}  type="text" placeholder={
                                    language==1?'Anime nomini kiriting':'Введите название Aниме'
                                } />
                                <i className="bi bi-search"></i>
                            </a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="https://t.me/fakey_soul" target='_blank'>
                                <span className='header__telegram'>Telegram
                                    <i class="bi bi-telegram"></i>
                                </span>
                            </a>
                        </li>
                        <li className='header__item'>
                            
                                <button className='header__leange'>
                                    <span onClick={()=> setLanguage(1)} className='span1' >Uz</span>
                                    <span onClick={()=> setLanguage(2)} className='span2' >/Ru</span>
                                </button>
                           
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="#">
                                <button className='header__login'>Login</button>
                            </a>
                        </li>
                        <li onClick={() => setSvet(!svet)} className='header__item'>
                            <a className='header__link' href="#">
                                <button className='light'>{

                                    svet == false ? <i className="bi bi-sun"></i> : <i class="bi bi-moon"></i>
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