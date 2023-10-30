import React, { useContext } from 'react'
import logo from '../../img/logo.png'
import './Header.scss'
import { Context } from '../../Context/Context'
function Header() {
    const {svet, setSvet} = useContext(Context)
    return (
        <div className='Header'>
            <div className="container">
                <nav className='nav'>
                    <div className="big">
                    <div className="hamburger">
                        <i className="bi bi-list"></i>
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt="img" />
                        <h1>AniSeezn</h1>
                    </div>
                    </div>
                    <ul  className='header__list'>
                        <li className='header__item'>
                            <a className='header__link' href="#">
                                <input type="text" placeholder='Anime nomini kiriting' />
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
                            <a className='header__link' href="#">
                                <button className='header__leange'>
                                    <span className='span1'>Uz</span>
                                    <span className='span2'>/Ru</span>
                                </button>
                            </a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="#">
                                <button className='header__login'>Login</button>
                            </a>
                        </li>
                        <li onClick={()=> setSvet(!svet)} className='header__item'>
                            <a className='header__link' href="#">
                                <button className='light'>{
                             
                                    svet==false?<i className="bi bi-sun"></i>:<i class="bi bi-moon"></i>
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