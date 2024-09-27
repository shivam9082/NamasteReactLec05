import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
           <div className=" text-center m-4 p-4">
                <h1 className=" text-2xl font-bold">Cart</h1>
                <button 
                className="bg-black  text-center text-white m-2 p-2"
                onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                {cartItems.length==0 && <h1>Your cart is empty. Add some items.</h1>}
                <div className=" text-left w-6/12 m-auto">
                    <MenuList items={cartItems}/>
                </div>
           </div>

    );
}

export default Cart;