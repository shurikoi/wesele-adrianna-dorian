import { model, Schema } from "mongoose";

const table = new Schema({
    tableNumber: { type: Number, required: true, unique: true },
    capacity: { type: Number, required: true }
});

const tableModel = model('Table', table);

export default tableModel;