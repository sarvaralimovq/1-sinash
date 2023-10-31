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
    const [searcheData, setSearcheData] = useState(faceData)
    const {searche, setSearche} = useContext(Context)
    // console.log(searche);
    // useEffect(()=> {
    //     const Debounce = setTimeout(()=> {
    //         const filteredCars = filterCars(searche, faceData);
    //         setSearcheData(filteredCars)

    //     }, 300)
    //     return () => clearTimeout(Debounce)
    // } , [setSearcheData])
    return (
        <div className='Hero'>
            <div className="conatiner">
                <div className="hero__inner">
                    <ul className='hero__list'>

                        {
                            searcheData.filter((item)=> item.name.toLowerCase().includes(searche.toLowerCase())).map((item, index) => (

                                <li  className='hero__item' key={index}>
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
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero