1.全局安装create-react-app
2.创建一个项目create-react-app    your-app（项目名）（会安装三个东西：react/react-dom/react-scripts）
	* react: react的顶级库
	* react-dom: 因为react有很多的运行环境，比如app端的react-native, 我们要在web上运行就使用react-dom
	* react-scripts: 包含运行和打包react应用程序的所有脚本及配置

3.###mock 数据工具  
	* npm i json-server -g 
	* json-server --version 就可以看到版本号了
	* 建立一个json文件 xxx.json
	*         {
	*           "list":[
	*               {
	*                   "id":1,
	*                   "name":"zhangsan",
	*                   "age":20
	*               },
	*               {
	*                   "id":2,
	*                   "name":"lisi",
	*                   "age":25
	*               }
	*         ]
	*     }
	* json-server xxx.json --port 端口
	* json-server 的使用说明  https://gitee.com/rh_hg/json-server?_from=gitee_search

4.修改项目端口号
	* 项目的目录/node_modules/react-scripts/scripts/start.js
	* 改端口 const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5000;

5. 安装路由npm install react-router-dom 
	* 历史纪录模式  BrowserRouter 
	* 引入  import {BrowserRouter as Router} from 'react-router-dom'
	* <Router>根组件</Router>
	* 引入 import {Route} from 'react-router-dom'
	* <Route path="xxx" component={组件} />
	* exact 精确匹配
	* Redirect 重定向
	* 路由切换的组件有三个属性(props)
	*      1) history
	*      2) location
	*      3) match
	* Switch 作用是 多个组件匹配只渲染第一个
	* hash模式     HashRouter

6.this.props.children 可以渲染子组件
	* <组件>
	*          <子组件 />  //没有 undefined 一个 object 多个Array
	*      </组件>
	* 路由包裹App  通过context 向App的子孙组件去传值

7.安装sass  node-sass  sass-loader

8.引入  withRouter包裹组件， 作用是让不是路由切换的组件也具有路由切换组件的三个属性(location match history)

9.监控路由的变化  history.listen
	* 监控路由的变化  this.propos.history.listen((location)=>{
	*        //locatin.pathname 会根据路由的变化而变化
	*    })
	*   解决刷新  在constructor里又调用了一次函数 把 this.props.location.pathname传入

10.切换路由有的三大参数
	* a.this.prosp.location
	* 1)location.pathname 路由
	* 2)location.state 路由传参(多个参数)
	* 3)location.search???
	* b.this.props.history
	* 1)history.go(前进&后退) history.goback(返回)
	* 2)history.listen(监听事件)
	* 3)history.push(编程式路由跳转)
	* c.this.props.match
	* 1)match.params(路由传参)

11.监控路由参数的变化（路由传参）；Link   to="/xxx/实参/实参2"；  path   /xxx/:参数/:参数2/...  这叫路由的参数 ；接收参数 this.props.math.params.参数

12.新增特性 hook；useState 在无状态组件里也可以使用状态；let [数据,修改数据的函数]= useState(数据的初始值)

13.Route 的 render 属性；<Route path="xxx" render={(props)=>{return <组件 {...props}   />}}

14.安装redux 状态管理工具  ( flux mobx)；yarn add redux
	* 1） store是唯一的
	*    2) state 是只读的
	*    3） 通过纯函数reducer 能够对状态进行修改

15.高阶组件（HOC）；1）属性代理；2）反向继承

16.reducer分模块 import {combineReducers} from ‘redux’
	* var reducer =    combineReducers({   返回的reducer 是总的reducer
	*         模块的名字: 引入的reducer
	*      })
	* 
	*     //分模块以后
	*     store.getState().模块的名字.变量

17.安装 npm i react-redux ；分容器组件和ui组件
	* import {Provider} from 'react-redux'
	*       <Provider store={store}>
	*             <App />
	*       </Provider>
	* 组件里引入  import {connect} from 'react-redux'
	*      connect 高阶组件  连接容器组件和ui组件

18.异步操作 yarn add redux-thunk(redux-saga)
	* applyMiddleware
	* createStore(reducer,applyMiddleware(thunk));
	* actionCreator里面，，
	*      方法要返回 回到函数，参数就是 dispatch
	*      return (dispatch)=>{
	*          异步的动作 成功后再异步动作回调里 使用dispatch发出动作给reducer
	*      }

19.安装ui库 yarn add antd  https://ant.design/docs/react/use-with-create-react-app-cn

20. 高级配置 yarn add react-app-rewired customize-cra

21.按需加载 yarn add babel-plugin-import

22.自定主题 yarn add less less-loader

23.使用装饰器 npm install cnpm  --save
```
const { override, fixBabelImports,  addWebpackAlias ,addDecoratorsLegacy} = require('customize-cra');
    const path = require("path")
    module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
      addWebpackAlias({
        '@': path.join(__dirname, "src")
      }), //优化路径
      addDecoratorsLegacy()//使用装饰器
    );
```

24.安装 npm i axios axios 的二次封装 index.js
```
import axios from 'axios';

var service = axios.create({
    baseURL:'/api',
    'content-type':'application/json',
    timeout:5000
})

service.interceptors.request.use((config)=>{
    if(sessionStorage.getItem('token')){
        config.headers['token'] = sessionStorage.getItem('token');
    }
    return config
})

service.interceptors.response.use((res)=>{
    if(res.data.status===-1){
        window.location.href='/login'
    }
    return res.data
})

export default service;
```
request.js
```
import axios from './index'

export const getList=(page,pageSize)=>{
    return axios.get('/pagelist',{params:{page,pageSize}})
}

export const add = (name,age)=>{
    return axios.post('/add',{name,age})
}

export const remove = (id)=>{
    return axios.post('/del',{id})
}

export const login = (username,password)=>{
    return axios.post('/users/login',{username,password})
}

export const quit = ()=>{
    return axios.post('/users/quit')
}

export const upload =(data)=>{
    return axios.post('/upload',data)
}
```

25.componentWillUnmount(){  //解决异步数据回来时,组件却卸载了
	* 
//重写组件的setState方法，直接返回空
	* 
        this.setState = (state,callback)=>{
	* 
          return;
	* 
        };  
	* 
    }



26.安装  npm i redux-saga 
```
import {takeEvery,call,put} from 'redux-saga/effects'


function *test(){
  var result =  yield call(()=>{
                        return fetch("http://localhost:4000/list")
                        .then((res)=>res.json())
                     })
  yield put({   //相当于dispatch
      type:"GETDATA",
      list:result
  })
  }
export default function *watchAll(){  //监听发出WATCHALL的动作
    yield takeEvery("WATCHALL", test);
}
```

27.安装图表工具 npm i echarts

28.配置代理 安装 npm i http-proxy-middleware（在src文件下啊创建setupProxy.js）
```
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
              target: 'http://localhost:4000',
              changeOrigin: true,
              pathRewrite:{
                  "^/api":""
              }
            }
         ));
}
```

29.安装懒加载 npm i react-loadablevar 
```
var 组件名=Loadable({  //异步加载组件
    loader:()=>import("加载的组件路径"),
    loading:()=>加载中组件
})
```

30.styled-components (在组件中写css样式) npm i styled-components -S
	* 我们用styled-components创建了一个样式组件，该组件渲染之后是一个div标签。注意组件首字母必须大写不然无法识别。
```
/* 创建了一个Wrapper样式组件，该组件渲染之后是一个div标签 */
  const Wrapper = styled.div`
    color: blue;
  `;


  /* Wrapper组件跟其余的react组件一样，只不过现在他们有了自己的样式 */
  render(
    <Wrapper>
        Hello World!
    </Wrapper>
  );
```


31. npm install classnames --save classnames（能够渲染多个classname）import classnames from 'classnames'<div className=classnames({    'class1': true,    'class2': true    )></div>

###Menu selectedKeys  高亮选中的菜单项#.string.padStart(length,补的字符) padEnd

###上线后刷新404问题 https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90#.

###组件的异步传值   
	* 方法一：在componentDidMount内拿数据，在componentDidUpdate内实例化
	* 方法二：在render内运用三元运算判断数据是否取到

###非父子组件传值  npm i pubsub-js
	* PubSub.publish("事件名","数据")；
	* PubSub.subscribe("事件名",(evt,data)=>{ })

###swiper 轮播图插件  npm i swiper --save#.// eslint-disable-next-line 下面这句js 就不用eslint进行语法检查了#.设置props默认值
	* 类组件
	*     static  defaultProps ={
	*        key：默认值
	*     }
	* 无状态组件
	*     组件名.defaultProps ={
	*        key:默认值
	*     }

###forceUpdate 强制刷新#.限定类型
	* import PropTypes from 'prop-types';
	*  类组件
	*   static propTypes={
	*         key:PropTypes.类型
	*    }
	* 无状态组件
	*      组件名.propTypes={
	*          key:PropTypes.类型.isRequired(必须传)
	*   }

###componentDidUpdate  监控组件里的数据的变化  慎用setState
