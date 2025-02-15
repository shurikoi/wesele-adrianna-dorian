import { model, Schema } from "mongoose";

const accommodation = new Schema({
    accommodation: { type: Boolean, required: true },
    accommodationResponse: { type: Boolean, default: null },
}, {
    timestamps: true
});

const accommodationModel = model('Accommodation', accommodation);

export default accommodationModel;