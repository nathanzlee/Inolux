import mongoose from "mongoose"

const travelAuthSchema = mongoose.Schema({
    name: {type: String},
    number: {type: String},
    department: {type: String},
    phone: {type: String},
    reqDate: {type: Date},
    purpose: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    itinerary: {type: Array, default: []},
    travelAdv: {type: Boolean},
    personalTravel: {type: Boolean},
    employeeSig: {signature: {type: String}, date: {type: Date}},

})

const travel = mongoose.model("travelAuth", travelAuthSchema)

export default travel