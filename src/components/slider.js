import React, { Component } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

export default class Slider extends Component {
    render() {
        const images = [
            { url: "https://www.buildwares.net/assets/images/1980x500-1.png" },
            { url: "https://www.electrolux.co.th/globalassets/3-images/accessories/accessories-bg-1980x500.jpg" },
            { url: "https://www.shareholdersforchange.eu/wp-content/uploads/2018/11/testata-interna-1980x500.jpeg" },
        ];
        return (
            <div>
                <SimpleImageSlider
                    width={1958}
                    height={500}
                    images={images}
                />
            </div>
        )
    }
}