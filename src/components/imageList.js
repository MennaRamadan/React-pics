import React from 'react';
import './imageList.css';
import ImageCard from './imageCard';

const ImageList = (props) => {
    //here we used object desctruction
   const images =  props.images.map(( image) => {
        return <ImageCard key={image.id} image={image}/>
    });

    return (<div className="image-list">{images}</div>)
}

export default ImageList; 