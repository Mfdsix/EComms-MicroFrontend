import { mount as productIndex } from 'products/ProductIndex'
import { mount as cartShow } from 'carts/CartShow'

productIndex(document.querySelector("#product-list"))
cartShow(document.querySelector("#cart-list"))