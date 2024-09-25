import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Don't do the below
  // const store = useSelector((store)=> store)
  // const cartItems = store.cart.items

  // DO THE BELOW
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <div className="max-w-5xl mx-auto ">
        <button
          onClick={handleClearCart}
          className="bg-black p-2 rounded-lg text-white"
        >
          Clear cart
        </button>
        {cartItems.length === 0 && <h2>Add items to the cart</h2>}
        <RestaurantItemList items={cartItems} />
      </div>

      <div className="hidden">
        <div className="test testing">
          <button> add btn</button>
        </div>
        <div className="test testing">
          <button> add btn</button>
        </div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div className="test testing">
          <button> add btn</button>
        </div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div>nv svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</div>
        <div className="test testing">
          <button> add btn</button>
        </div>
        <p>svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</p>
        <p>svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</p>
        <p>svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</p>
        <p>svsbvjsbbjbsdjbshbhjsbsbvhsbvhbsvjbsvh</p>
        <div className="test testing">
          <button> add btn will remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
