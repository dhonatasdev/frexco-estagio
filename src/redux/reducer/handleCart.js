const carrinho = [];

const handleCart =(state = carrinho, action) => {
    const fruta = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //verifica se a fruta existe de verdade
            const exist = state.find((x)=> x.id === fruta.id);
            if(exist){
                // aumenta a quantidade
                return state.map((x)=>
                x.id === fruta.id ? {...x, qty: x.qty + 1} : x
                );
            }else{
                const fruta = action.payload;
                return[
                    ...state,
                    {
                        ...fruta,
                        qty: 1,
                    }
                ]
            }
            break;

            case "DELITEM":
                const exist1 = state.find((x)=> x.id === fruta.id);
                if(exist1.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=>
                        x.id === fruta.id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;
    
        default:
            return state;
            break;
    }

}

export default handleCart;