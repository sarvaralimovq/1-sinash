import React, { useContext, useEffect, useState } from 'react'
import { faceData } from '../../lib/data'
import './Hero.scss'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
// const filterCars = (searchText, listofCars)=> {
// if(!searchText){
//     return listofCars ;
// }else{
//     return listofCars.filter(({ car_model })=> 
//     car_model.toLowerCase().includec(searchText.toLowerCase()) 
    
//     );
// }
// }

function Hero() {
    // const [hover , setHover]=useState(false)
    // console.log(hover);
    // onMouseEnter={()=> setHover(true)} onMouseOut={()=> setHover(false)}
    const {searche, setSearche} = useContext(Context)
    const [searcheData, setSearcheData] = useState(faceData)

    // console.log(searche);
    // useEffect(()=> {
    //     const Debounce = setTimeout(()=> {
    //         const filteredCars = filterCars(searche, faceData);
    //         setSearcheData(filteredCars)

    //     }, 300)
    //     return () => clearTimeout(Debounce)
    // } , [setSearcheData])
    // for (let index = 4; index > faceData.length; index++) {
    // const [searcheData, setSearcheData] = useState(faceData)
        
    // }
    // .filter((item)=> item.name.toLowerCase().includes(searche.toLowerCase()))
    return (
        <div className='Hero'>
            <div className="conatiner">
                <div className="hero__inner">
                    <ul className='hero__list'>

                        {
                            searcheData.map((item, index) =>  (

                                <li id={item.idHref}  className='hero__item' key={index}>
                                    <img src={item.img} alt="img" />
                                    <h2>{item.name}</h2>
                                    <p>{item.info}</p>
                                    {/* <span  className={hover == true?'heroHover__top':null || hover == false? 'heroHover__bottom' : null}>
                                        <Link><button>Vidio</button></Link>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique iste incidunt ad, cumque ea nihil magnam esse animi aperiam sunt corrupti pariatur earum deserunt sapiente ab aspernatur distinctio quod exercitationem!</p>
                                    
                                    </span> */}
                                </li>


                            ))
                        }
                        <div id='1'>sss</div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero