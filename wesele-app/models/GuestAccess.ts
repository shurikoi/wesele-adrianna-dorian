import { model, models, Schema } from "mongoose";

const GuestAccessSchema = new Schema({
    code: { type: String, required: true, unique: true },
    type: { type: String, enum: ["pair", "single"], required: true },
    role: { type: String, enum: ["guest", "admin"], default: "guest" },
    forGreeting: { type: String, required: true },
    guests: [{ type: Schema.Types.ObjectId, ref: 'Guest', required: true }],
    accompaniment: {
        accompaniment: { type: Boolean },
    },
    accommodation: {
        needsAccommodation: { type: Boolean },
        accommodationResponse: { type: Boolean },
    }
}, {
    timestamps: true
});

export default models.GuestAccess || model('GuestAccess', GuestAccessSchema);