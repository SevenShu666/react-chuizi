import React, { Component } from 'react';

export default class GoodList extends Component {
    
    render() {
        let {goodData} = this.props
        return (
            <div>
                <img src={goodData.header.image} className='headerImg' alt='坚果Pro3'/>
                <ul className='shopUl'>
                    {
                        goodData.skuInfo.map((item)=>{
                            return <li key={item.skuId}>
                                        <img src={item.images} alt='坚果Pro3' />
                                        <h3>{item.skuTitle}</h3>
                                        <div>
                                            {
                                                item.discountPrice>0?<div className='discountPrice'>
                                                <span>¥</span><span>{item.discountPrice}</span>
                                                </div>:''
                                            }
                                            <div className='originalPrice' 
                                                style={{color:item.discountPrice?'':'red',
                                                    fontWeight:item.discountPrice?'':'bold',
                                                    textDecoration:item.discountPrice?'line-through':'none'}}>
                                                <span>¥</span><span>{item.originalPrice}</span>
                                            </div>
                                        </div>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
