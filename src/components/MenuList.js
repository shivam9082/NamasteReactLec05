
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../../utils/cartSlice";
import "../../index.css";

const MenuList = ({items}) =>   {
    
    items.map(item => {
        if ('defaultPrice' in item.card.info) {
            item.card.info.price = item.card.info.defaultPrice;
        } else {
            item.card.info.price = item.card.info.finalPrice;
        }
        return item;
    });
    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }
    
    return ( 
        <div>
            {items.map(item => (
                <div key={item.card.info.id} className="flex justify-between p-2 m-2 border-grey-200 border-b-2">
                     
                    <div className="py-12 w-9/12">
                        <div className="font-semibold">
                            <span> {item.card.info.name} - </span>
                            <span>₹{item.card.info.price /100?item.card.info.price/100:100 }</span>
                        </div>
                            <p>{item.card.info.description}</p>  
                    </div>
                    <div className="w-3/12 ml-8">
                        <div className="absolute">
                            <button className="mx-16 text-white  rounded-lg p-2 bg-black shadow-lg m-auto "
                            onClick={() => handleAddItems(item)}>
                                 Add + 
                            </button>
                        </div>
                        <img 
                            className="h-32 w-full object-cover"
                          src={IMG_CDN_URL + item.card.info.imageId}
                          alt={item.name }
                        />
                        
                     </div>
                </div>
            ) )}
        </div>
    );
}
export default MenuList;