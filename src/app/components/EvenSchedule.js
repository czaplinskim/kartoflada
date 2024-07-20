"use client"

import ArrowLeft from './svg/ArrowLeft.js'
import ArrowRight from './svg/ArrowRight.js'

import { useDraggable } from "react-use-draggable-scroll";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useState, useRef } from 'react';


export default function EventSchedule() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 770 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 570, min: 0 },
          items: 1
        }
      };

    const scheduleItems = useRef(null);
    const { events } = useDraggable(scheduleItems, {
        applyRubberBandEffect: false, 
      }); 


    

    let interVal 

    function buttonMouseLeft() {
        clearInterval(interVal);

    }

    function buttonClicked(direction) { 

        interVal = setInterval(() => {

        if(direction == 'left') { scheduleItems.current.scrollLeft = scheduleItems.current.scrollLeft - 2; }
        if(direction == 'right') { scheduleItems.current.scrollLeft = scheduleItems.current.scrollLeft + 2; }
        
    }, 1)

    }

   function scrollByDrag(e) {
        console.log(e)
   }

    return <div class='schedule-section'>

    <svg
        height="150"
        className="schedule-section__curve-section-svg"
        viewBox="0 0 500 150"
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
        
        <div className='schedule-section-container'>

                 <h2 id='schedule' className='schedule-header'>Finał Kartoflady</h2>
                 <div  className='schedule-section-inner'>

                    <div className="schedule-scroll-button-left-container">
                        <div onMouseUp={buttonMouseLeft} onMouseDown={() => buttonClicked('left')}  className='schedule-scroll-button-left'>
                            <ArrowLeft></ArrowLeft>
                        </div>
                    </div>

                    {/* onMouseDown={e => scrollByDrag(e)} ref={scheduleItems} */}
                    <div ref={scheduleItems} {...events}   className='schedule-items'>

                        <div className="schedule-item schedule-welcome-item">
                            <span className="schedule-welcome-item__label schedule-welcome-item__label--medium">FINAŁOWA IMPREZA</span>
                            <img className="schedule-welcome-item__logo" src='./kartoflada.svg'></img>
                            <span className="schedule-welcome-item__label">18.08.2024 r. o godz. 18:00</span>
                            <span className="schedule-welcome-item__label">na deptaku W MIELNIE PRZY ul. kościuszki</span>
                            <span className="schedule-welcome-item__sublabel">wstęp wolny</span>

                        </div>

                        <div className="schedule-item">
                            <img className="schedule-item__img" src="./schedule-girl.jpg"></img>
                            <h4 className="schedule-item__header">Ziemniaczane warsztaty</h4>
                        </div>
                        

                        <div className="schedule-item">
                            <img className="schedule-item__img"  src="./schedule-top-view.jpg"></img>
                            <h4 className="schedule-item__header">WIELKIE GOTOWANIE
                            DLA całych rodzin</h4>
                        </div>
                        
                        <div className="schedule-item">
                            <img className="schedule-item__img"  src="./wolf-girl.jpg"></img>
                            <h4 className="schedule-item__header">Koncert Kasi Wilk</h4>
                        </div>

                        <div className="schedule-item">
                            <img className="schedule-item__img"  src="./schedule-top-view.jpg"></img>
                            <h4 className="schedule-item__header">WIELKIE GOTOWANIE
                            DLA całych rodzin</h4>
                        </div>
                        
                        <div className="schedule-item">
                            <img className="schedule-item__img"  src="./wolf-girl.jpg"></img>
                            <h4 className="schedule-item__header">Koncert Kasi Wilk</h4>
                        </div>
                    
                    </div>

                    <div className="schedule-scroll-button-right-container">
                        <div  onMouseUp={buttonMouseLeft}  onMouseDown={() => buttonClicked('right')} className='schedule-scroll-button-right'>
                            <ArrowRight></ArrowRight>
                        </div>
                    </div>

                 </div>

                 {/* <div ref={scrollContainerRef} className="scrollbar">
                        <div
                        className="scroll-thumb"
                        // ref={scrollThumbRef}
                        // onMouseDown={handleMouseDown}
                        ></div>
                    </div> */}

                 <div className="partners"> 
                    <h4 className="partners__header">ORGANIZATORZY I PARTNERZY</h4>
                  

                    <Carousel sliderClass="partners-logos__slider" 
                                itemClass="partners-logos__list" 
                                dotListClass='partners-logos__list' 
                                containerClass='partners-logos__container'
                                autoPlaySpeed={3000}
                                arrows={false} 
                                autoPlay={responsive.deviceType !== "mobile" ? true : false}

                                rewind={true}
                                swipeable={true}
                                draggable={true} 
                                responsive={responsive}>

                        <a className="partners-logos__link" href="https://mielno.pl">
                            <img src='./mielno_logo.png' className="partners-logos__item partners-logos__item--mielno"></img>
                        </a>

                        <a className="partners-logos__link" href="https://www.gov.pl/web/kowr">
                            <img src='./kowr_logo.png' className="partners-logos__item partners-logos__item--kowr"></img>
                        </a>


                        <a className="partners-logos__link" href="https://www.gov.pl/web/kowr">
                            <img src='./europlant_logo.png' className="partners-logos__item partners-logos__item--europlant"></img>
                        </a>


                        <a className="partners-logos__link" href="https://www.gov.pl/web/kowr">
                            <img src='./ck_logo.png' className="partners-logos__item partners-logos__item--ck"></img>
                        </a>



                    </Carousel>
                 </div>

        
        
        </div>


        <svg
        height="150"
        className="schedule-section__curve-section-svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        >
                <path className="area" d="M 0,0
                L 0,100
                Q 200,200 500,100
                L 500,0
                Z" />
                <path stroke="#000" className="stroke" fill="none" d="M 0,100
                                Q 200,200 500,100" />
                
            </svg>
    </div>

}