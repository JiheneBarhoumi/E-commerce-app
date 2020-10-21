export const productListReducer=(State={products:[]},action)=>{
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return {loading:true,products:[]}
        case 'PRODUCT_List_SUCCESS':
            return {loading:false,products:action.payload}
        case 'PRODUCT_List_FAIL':
            return {loading:false,products:action.payload}
        default :
        return state
    }
}