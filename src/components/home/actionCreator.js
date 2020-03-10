export default {
    incAction(){
        return{
            type:'INCREMENT'
        }
    },
    clickAction(p){ 
        return{
            type:'CLICK',
            p
        }
    }
}