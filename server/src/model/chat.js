const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    content: {
      type: mongoose.Schema.Types.Mixed,
    },
    contentType: {
      type: String,
      enum: ["message", "image", "video", "emoji"],
      default: "message",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);
