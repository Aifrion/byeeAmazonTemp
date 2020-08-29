export const initialState = {
    basket: [],
    user: null,
};
//GETS TO THE TOTAL PRICE USING A SELECTOR
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount,0); 
function reducer(state, action){
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                // 
                ...state,
                basket:[...state.basket, action.item] 
            }
        case 'REMOVE_FROM_BASKET':
            //logic from removing item from basket

            //HERE WE CLONED THE BASKET
            let newBasket = [...state.basket];

            //HERE WE FOUND THE INDEX
            const index = state.basket.findIndex((basketItem) => basketItem.id===action.id);
            if(index>=0){
                //ITEM EXISTS IN BASKET REMOVE IT
                newBasket.splice(index,1);    
            }
            else{
                console.warn(
                    `Can't remove product`
                )
            }
            return {...state, basket: newBasket}
        default:
            return state; 
    }
}
export default reducer;