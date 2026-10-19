const mongoose = require('mongoose');

const conditionAllocationSchema = new mongoose.Schema({
    _id: { type: String, default: 'signup' },
    conditions: { type: [String], required: true },
    currentOrder: { type: [String], required: true },
    nextIndex: { type: Number, default: 0 }
}, { versionKey: false });

module.exports = mongoose.model('ConditionAllocation', conditionAllocationSchema);
