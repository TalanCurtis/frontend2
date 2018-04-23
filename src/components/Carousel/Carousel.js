import React from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';

function Carousel(){
    return(
        <div style={{background:'purple', height:'100px', width:'300px'}}>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
        </div>
    )
}

export default Carousel;