import mongoose from 'mongoose'

const travelAuthSchema = mongoose.Schema({
    personalInfo: {
        name: {type: String},
        number: {type: String},
        department: {type: String},
        phone: {type: String},
        reqDate: {type: Date},
    },
    tripInfo: {
        purpose: {type: String},
        startDate: {type: Date},
        endDate: {type: Date},
        itinerary: {type: Array, default: []},
        travelAdv: {advance: {type: Boolean}, amount: {type: Number}},
        personalTravel: {personal: {type: Boolean}, start: {type: Date}, end: {type: Date}},
        international: {type: Boolean},
    },
    approval: {
        employeeSig: {
            user: {type: mongoose.Schema.ObjectId, ref: 'user'},
            signature: {type: String, default: ""}, 
            date: {type: Date}
        },
        managerSig: {
            user: {type: mongoose.Schema.ObjectId, ref: 'user'},
            signature: {type: String, default: ""}, 
            date: {type: Date}
        },
        presidentSig: {
            user: {type: mongoose.Schema.ObjectId, ref: 'user'},
            signature: {type: String, default: ""}, 
            date: {type: Date}
        },
    },
    notes: {type: String, default: ""},
    status: {type: String, default: "pending"}
})

const travel = mongoose.models.travelAuth || mongoose.model('travelAuth', travelAuthSchema)

export default travel