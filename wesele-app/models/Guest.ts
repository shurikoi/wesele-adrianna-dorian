import { Schema, model, models } from "mongoose";

const GuestSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["adult", "child"], default: 'adult', required: true },
  table: { type: Schema.Types.ObjectId, ref: "Table", default: null },
  accompaniment: {
    accompaniment: { type: Boolean, default: false },
    // accompanimentTime: { type: Date, default: null }
  },
  accommodation: {
    needsAccommodation: { type: Boolean, default: false },
    accommodationResponse: { type: Boolean, default: null },
    // accommodationTime: { type: Date, default: null }
  }
}, {
  timestamps: true
});

export default models.Guest || model("Guest", GuestSchema);