const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }, userEmail: {
        type: String,
        default: null // Set the default value to null
    }
}, { timestamps: true });

urlSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 }); // 1 day
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
