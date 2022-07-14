import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
             <img className='home__image'
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" /> 
             <div className="home__row">
                 <Product id="49538004"title='The lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5}/>
                 <Product id="49533094" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dought Hook and Whisk, 5 Litre Glass Bowl' price={239.0} image='https://m.media-amazon.com/images/I/61G9yF+ZbEL._AC_SY200_.jpg' rating={4}/>
                 
             </div>
             <div className="home__row">
             <Product id="49538094" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dought Hook and Whisk, 5 Litre Glass Bowl' price={309.0} image='https://m.media-amazon.com/images/I/71zz84UgFWS._AC_SY200_.jpg' rating={3}/>
             <Product id="49532094" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dought Hook and Whisk, 5 Litre Glass Bowl' price={499.0} image='https://m.media-amazon.com/images/I/71F4jU7MRUS._AC_SY175_.jpg' rating={4}/>
             <Product id="49522094" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dought Hook and Whisk, 5 Litre Glass Bowl' price={109.0} image='https://m.media-amazon.com/images/I/81+O-7M1UrL._AC_UL480_FMwebp_QL65_.jpg' rating={5}/>
             </div>
             <div className="home__row">
             <Product id="49122094" title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dought Hook and Whisk, 5 Litre Glass Bowl' price={909.0} image='https://m.media-amazon.com/images/I/817x77c28pL._SX679_.jpg' rating={3}/>
             </div>
        </div>
    </div>
  )
}

export default Home