import { model, Schema } from "mongoose";

const guest = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['adult', 'child'], required: true },
    table: { type: Schema.Types.ObjectId, ref: 'Table', default: null },
    rsvp: { type: Schema.Types.ObjectId, ref: 'RSVP', default: null},
    accomodation: { type: Schema.Types.ObjectId, ref: 'Accommodation', default: null }
}, {
    timestamps: true
});

const guestModel = model('Guest', guest);

export default guestModel;