import React, { Component } from 'react'

export default class CategoryList extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
       let {categoryData} = this.props
        return (
            <div>
                {categoryData.banner.length?<div className='banner'>
                        <img src={categoryData.banner[0].image} />
                
                </div>:''}
                <ul className='second'>
                    {
                        categoryData.second.map((item)=>{
                        return <li key={item.classifyId}>
                                    <h3>{item.classifyName}</h3>
                                    <ul className='third'>
                                        {
                                            item.third.map((item)=>{
                                                return <li key={item.classifyId}>
                                                            <div className='img'><img src={item.image} /></div>
                                                            <div className='font'>{item.classifyName}</div>
                                                        </li>
                                            })
                                        }
                                       
                                    </ul>
                                </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
