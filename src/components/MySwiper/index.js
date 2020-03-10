import React, { Component } from 'react'

export default class MySwiper extends Component {
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.imgList.map((item,index)=>{
                            return <div className="swiper-slide" key={index}><img src={item.image} className='bannerImg' alt='轮播图' /></div>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
