import React, { Component } from 'react';
import { Input } from 'antd';
import {getHomeClassify} from '../../api/request';
import CategoryList from '../categoryList'
import '../../asset/css/category.scss';
const { Search } = Input;

export default class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            categoryData:[],
            num:0
        }
    }
    componentDidMount(){
        getHomeClassify().then(res=>{
            console.log(res)
            if(res.code===0){
                this.setState((prevState,props)=>{
                    return{
                        categoryData:res.data
                    }
                },()=>{
                    this.ulNode.firstElementChild.className = 'active'
                })
            }
        })
    }
    wrapRigth(index,e){
        Array.from(e.target.parentNode.childNodes).map((item)=>{
            return item.className = ''
        })
        e.target.className = 'active'
        this.setState({
            num:index
        })
    }
    render() {
        let {categoryData,num} = this.state
        if(num===5){
            if(categoryData.length>0){
                categoryData[5].banner = []
            }
        }
        return (
            <div className='category'>
                <header className='input' ref={(node)=>this.inputNode=node}>
                    <Search
                        placeholder="请输入搜索关键字"
                        onSearch={value => console.log(value)}
                        enterButton
                        className='search'
                        />
                </header>
                <div>
                    <section className='subNav'>
                        <ul ref={(node)=>this.ulNode=node}>
                            {
                                categoryData.map((item,index)=>{
                                return <li key={item.classifyId} onClick={this.wrapRigth.bind(this,index)}>{item.classifyName}</li>
                                })
                            }
                        </ul>
                    </section>
                    <section className='content'>
                        {
                            categoryData.length>0?<CategoryList  categoryData={categoryData[num]}/>:''
                        }
                    </section>
                </div>
            </div>
        )
    }
}
