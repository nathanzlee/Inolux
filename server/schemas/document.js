import mongoose from "mongoose"

const docSchema = mongoose.Schema({
    status: {type: String},
    players: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'user',
        default: []
    },
    name: {type: String},
    entryForm: {type: String},
    location: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    contactName: {type: String},
    contactPhone: {type: String},
    level: {type: Number}
})

const doc = mongoose.model("document", docSchema)

export default doc