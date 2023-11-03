import ProductModel from "../models/product.model.js";
import { Exception } from "../utils.js";

// Este archivo funciona como una especie de Servicio
// Lógica para interactuar directamente con la DB

export default class ProductManager {
  static get(query = {}) {
    const criteria = {};
    // Puedo analizar diferentes tipos query
    if (query.title) {
      criteria.title = query.title;
    }
    return ProductModel.find(criteria);
  }

  static async getById(pid) {
    const product = await ProductModel.findById(pid);
    if (!product) {
      throw new Exception(`No existe un producto con el id ${pid}`, 404);
    }
    return product;
  }

  static async create(data) {
    const product = await ProductModel.create(data);
    return product;
  }

  static async updateById(pid, data) {
    const product = await ProductModel.findById(pid);
    if (!product) {
      throw new Exception(`No existe un producto con el id ${pid}`, 404);
    }
    const criteria = { _id: pid };
    const operation = { $set: data };
    await ProductModel.updateOne(criteria, operation);
  }

  static async deleteById(pid) {
    const product = await ProductModel.findById(pid);
    if (!product) {
      throw new Exception(`No existe un producto con el id ${pid}`, 404);
    }
    const criteria = { _id: pid };
    await ProductModel.deleteOne(criteria);
  }
}
