import { model, Schema } from "mongoose";

const RSVP = new Schema({
    rsvp: { type: Boolean, required: true },
}, {
    timestamps: true
});

const RSVPModel = model('RSVP', RSVP);

export default RSVPModel;