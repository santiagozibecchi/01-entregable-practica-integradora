import MessageModel from "../models/message.model.js";

export default class MessageManager {
  static async get() {
    const allMessages = await MessageModel.find({});
    return allMessages;
  }

  static async send(data) {
    const message = await MessageModel.create(data);
    return message;
  }

  static async delete(id) {
    await MessageModel.deleteOne({ _id: id });
  }
}
