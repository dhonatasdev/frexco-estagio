// coloca um item no carrinho
export const addCart = (fruta) => {
    return{
        type : "ADDITEM",
        payload : fruta
    }
}


// apaga um item do carrinho
export const delCart = (fruta) => {
    return{
        type : "DELITEM",
        payload : fruta
    }
}