import React, { Component } from 'react';
import {connect} from 'react-redux';
import actionCreator from './actionCreator';
import {getHomeList} from '../../api/request';
import { Input } from 'antd';
import Swiper from 'swiper';
import MySwiper from '../MySwiper';
import GoodList from '../goodList';
import '../../asset/css/home.scss';
import 'swiper/css/swiper.min.css';
var classNames = require('classnames');
const { Search } = Input;

 class One extends Component {
     constructor(props){
         super(props);
         this.state={
             imgList:[],
             goodData:{},
             touchMove:false
         }
     }
     componentDidMount(){
        getHomeList().then((res)=>{
            if(res.code===0){
                this.setState({
                    imgList:res.data[0].list,
                    goodData:res.data
                })
            }
            console.log(res)
        })
            
     }
     componentDidUpdate(){
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,//1秒切换一次
              },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })    
     }
     touchMove=()=>{
        // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // if(scrollTop>=this.homeNode.offsetHeight){
        //     this.setState({
        //         touchMove:true
        //     })
        // }else{
        //     this.setState({
        //         touchMove:false
        //     })
        // }
     }
    render() {
        
        let {imgList,goodData,touchMove} = this.state
        var searchClass = classNames({
            'input':true,
            'touchMove':touchMove
        })
        return (
            <div onTouchMove={this.touchMove}>
                <header className='home' ref={(node)=>this.homeNode=node}>
                    <figure className='logo'></figure>
                </header>

                <section className={searchClass} ref={(node)=>this.inputNode=node}>
                    <Search
                        placeholder="请输入搜索关键字"
                        onSearch={value => console.log(value)}
                        enterButton
                        className='search'
                        />
                </section>
                <section className='main'>
                    <section className='banner'>
                        {
                          imgList.length>0?<MySwiper imgList={imgList} />:''
                        }
                    </section>
                    <section className='goodList'>
                        {
                          imgList.length>0?
                          <ul>
                              {
                                goodData.map((item,index)=>{
                                    return index>0?<li key={index}>
                                                <GoodList goodData={item} />
                                            </li>:''
                                })   
                              }
                          
                          </ul>
                          :''
                        }
                    </section>
                </section>
            </div>
        )
    }
}

const mapState=(state)=>{
    return{
        state
    }
}

export default connect(mapState,actionCreator)(One)