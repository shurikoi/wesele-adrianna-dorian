import { model, models, Schema } from "mongoose";

const table = new Schema({
    tableNumber: { type: Number, required: true, unique: true },
    capacity: { type: Number, required: true },
    guests: [{ type: Schema.Types.ObjectId, ref: "Guest" }]
});

export default models.Table || model('Table', table);