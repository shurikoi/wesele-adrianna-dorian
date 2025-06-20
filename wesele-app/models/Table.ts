import { model, models, Schema } from "mongoose";

const table = new Schema({
    tableNumber: { type: Number, required: true },
    guestId: { type: Schema.Types.ObjectId, ref: "Guest" },
    chair: { type: Number },
});

export default models.Table || model('Table', table);