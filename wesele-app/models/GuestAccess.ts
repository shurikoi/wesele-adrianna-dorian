import { model, models, Schema } from "mongoose";

const GuestAccessSchema = new Schema({
    code: { type: String, required: true, unique: true },
    guests: [{ type: Schema.Types.ObjectId, ref: 'Guest', required: true }]
}, {
    id: true,
    timestamps: true
});

export default models.GuestAccess || model('GuestAccess', GuestAccessSchema);;