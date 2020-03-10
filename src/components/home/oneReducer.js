import { UnorderedListOutlined,HomeOutlined,ShoppingOutlined ,UserOutlined} from '@ant-design/icons';

const initialState = {
    n:1,
    red:0,
    navList:[
        {
            icon: HomeOutlined,
            font:"首页"
        },
       {
            icon: UnorderedListOutlined,
            font:"分类"
       },
       {
            icon: ShoppingOutlined,
            font:"购物车"
       },
       {
            icon: UserOutlined,
            font:"个人中心"
       }]
}

export default (state = initialState, { type, p }) => {
    switch (type) {

    case 'INCREMENT':
        return { ...state, n:state.n+1 }
    case 'CLICK':
        return {...state,red:p}
    default:
        return state
    }
}
