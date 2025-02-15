import { model, Schema } from "mongoose";

const guestAccess = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    type: { type: String, required: true },
    guests: [{ type: Schema.Types.ObjectId, ref: 'Guest', required: true }]
}, {
    timestamps: true
});

const guestAccessModel = model('GuestAccess', guestAccess);

export default guestAccessModel;