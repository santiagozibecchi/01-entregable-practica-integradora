import CartModel from "../models/cart.model.js";
import ProductModel from "../models/product.model.js";
import { Exception } from "../utils.js";

export default class CartManager {
  static async create() {
    const cart = await CartModel.create({});
    return cart;
  }

  static addProduct = async (cid, pid, quantity = 1) => {
    quantity = Number(quantity);
    // verificar carr
    const cart = await CartModel.findById(cid);

    // verificar prod
    const product = await ProductModel.findById(pid);
    if (!cart) {
      throw new Exception(`No existe carrito con el ID: ${cid}`, 400);
    }
    if (!product) {
      throw new Exception(`No existe producto con el ID: ${pid}`, 400);
    }

    // -1 => Si no existe
    const indexProduct = cart.products.findIndex(
      (product) => String(product.productId) === String(pid)
    );

    if (indexProduct === -1) {
      cart.products.push({ productId: pid, quantity });
    } else {
      cart.products[indexProduct].quantity += quantity;
    }

    const updatedCart = await CartModel.updateOne({ _id: cid }, cart);
    return updatedCart;
  };

  static async get(cid) {
    const criteria = cid ? { _id: cid } : {};

    // TODO validar si existe
    const cartById = await CartModel.find(criteria);
    return cartById;
  }
}
