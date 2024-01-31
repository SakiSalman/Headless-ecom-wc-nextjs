import axios from "axios";
import { getSession, storeSession } from "../sessions/sessions";
import { getApiCartConfig } from "./api";
import { SiTruenas } from "react-icons/si";
import { toaster } from "../useToaster";

export const CART_ENDPOINT = `${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/cart/items/`;



export const addToCart = (productId: string, qty: number = 1, setCart: (cart: []) => void, setLoading: any) => {
  const storedSession = getSession();
  const addOrViewCartConfig = getApiCartConfig();
  setLoading(true)
  axios
    .post(
      CART_ENDPOINT,
      {
        product_id: productId,
        quantity: qty,
      },
      addOrViewCartConfig
    )
    .then((res) => {
      if (!storedSession) {
        storeSession(res?.headers?.["x-wc-session"]);
      }
      viewCart(setCart);
      setLoading(false)
    })
    .catch((err) => {
      console.log("err", err);
      setLoading(false)
    })
};

export const increaseQuantityCart = (key: string, qty: number, setCart: (cart: []) => void, setLoading:(state:boolean) => void) => {
  const addOrViewCartConfig = getApiCartConfig();
  setLoading(true)
  axios.put(`${CART_ENDPOINT}${key}`
    , {
      quantity: qty,
    },
    addOrViewCartConfig
  )
    .then((res: any) => {
      console.log("updatecartres", res);
      viewCart(setCart)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)

    })
}

export const viewCart = (setCart: (cart: []) => void) => {
  const apiConfig = getApiCartConfig();
  axios
    .get(CART_ENDPOINT, apiConfig)
    .then((res: any) => {
      if (res?.data.length > 0) {
        localStorage.setItem("next-cart", JSON.stringify(res?.data))
        setCart(res?.data)
        toaster("success", "Product Added To Cart")
      }else{
        localStorage.setItem("next-cart", JSON.stringify([]))
        setCart([])
      }
    })
    .catch((err) => console.log(err));
};
export const removeCartItem = (key:string, setCart:any, setDelating:any) =>{
  const addOrViewCartConfig = getApiCartConfig();
  setDelating(true)
  axios.delete(`${CART_ENDPOINT}${key}`,
    addOrViewCartConfig
  )
    .then((res: any) => {
      console.log("updatecartres", res);
      toaster("success", "Product Removed!")

      getCartData(setCart)
      setDelating(false)
    })
    .catch((err) => {
      console.log(err);
      setDelating(false)
    })
}
export const getCartData = (setCart:any) => {
  const apiConfig = getApiCartConfig();
  axios
    .get(CART_ENDPOINT, apiConfig)
    .then((res: any) => {
      if (res?.data.length > 0) {
        localStorage.setItem("next-cart", JSON.stringify(res?.data))
        setCart(res.data)
      }else{
        localStorage.setItem("next-cart", JSON.stringify([]))
        setCart([])
      }
    })
    .catch((err) => console.log(err));
}
