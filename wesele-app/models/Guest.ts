import { Schema, model, models } from "mongoose";

const GuestSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["adult", "child"], default: 'adult', required: true },
  table: { type: String, enum: ["1", "2", "3", "4"], default: 'null' },
  chair: { type: String },
  // accompaniment: {
  //   accompaniment: { type: Boolean },
  //   // accompanimentTime: { type: Date, default: null }
  // },
  // accommodation: {
  //   needsAccommodation: { type: Boolean},
  //   accommodationResponse: { type: Boolean },
  //   // accommodationTime: { type: Date, default: null }
  // }
}, {
  timestamps: true
});

export default models.Guest || model("Guest", GuestSchema);