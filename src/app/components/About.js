import Button from './Button';
import Sunflower from './svg/Sunflower';
import SunAbout from './svg/SunAbout';
import PotatoAbout from './svg/PotatoAbout';
import FlowersAbout from './svg/Flowers';
import GrassAbout from './svg/GrassAbout';
import Snail from './svg/Snail';


export default function About() {
    return <div  class='about-section'>

        <div class='about-sketches-container'>
                <SunAbout></SunAbout>
                <GrassAbout></GrassAbout>
                <FlowersAbout></FlowersAbout>
                <PotatoAbout></PotatoAbout>
        </div>


    <svg
        height="300"
        className="curve-section-svg"
        viewBox="0 0 500 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path className='area' d="M 0,300
            L 0,100
            Q 250,0 500,100
            L 500,300
            Z" />
        <path className='stroke' stroke="#000" fill="none" d="M 0,100
            Q 250,0 500,100" />
        </svg>

       
        
        <div id='about' class='about-section-container'>

            <div class='about-section-inner'>
                <div class='about-content-section'>
                    <h2 className='about-header'>KARTOFLADA</h2>
                    <p className='about-text'>Dołącz do mocy ziemniaczanych atrakcji! W pierwszym Kartoflady etapie głosujemy na ulubione ziemniaczane potrawy z restauracji Gminy Mielno. Zwycięzce plebiscytu poznamy już 18 sierpnia w czasie wielkiego finału. Festyn pełen atrakcji dla całych rodzin - nie przegapcie tego wydarzenia!</p>
                    <a href='#glosuj' class="button button__menu button--dark-blue button--medium">GŁOSUJ NA ULUBIONĄ POTRAWĘ</a>
                </div>

   
                <div class='about-img-section'>
                    {/* <img className='about-img' src='./about-img.jpg'></img> */}
                    <img className='about-img' src='./img-kid-shape.png'></img>

                </div>
                
                <Sunflower className='sunflower-svg'></Sunflower>

            </div>
        
        </div>

<div className='snail-svg-container'>
<Snail></Snail>

</div>
        <svg
        height="200"
        className="curve-section-svg"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        >
                <path className="area" d="M 0,0
                L 0,100
                Q 200,200 500,100
                L 500,0
                Z" >
 
                </path>

        </svg>


            <svg
        height="200"
        className="curve-section-outer-svg"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path className="area" d="M 0,0
            Q 200,100 500,0
            L 500,100
            L 0,100
            Z" > </path></svg>


<svg
        height="200"
        className="curve-section-path-svg"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        >
               

                <path stroke="#000" className="stroke" fill="none" d="M 0,100
                                Q 200,200 500,100" />
        </svg>


    </div>
}