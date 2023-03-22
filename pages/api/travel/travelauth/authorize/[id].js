import connectDB from '../../../../../config/connectDB'
import User from '../../../../../models/user'
import TravelAuth from '../../../../../models/travelAuth'
import { getSession } from 'next-auth/client'

connectDB()

export default async function handler(req, res){
  await authorizeTravelAuth(req, res)
}

const authorizeTravelAuth = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.query)
    if (req.body.role == 'manager') {
        TravelAuth.updateOne(
            {_id: req.query.id},
            {$set: {'managerSig.signature': req.body.signature, 'managerSig.date': req.body.date, status: req.body.status, notes: req.body.notes}},
            (err) => {
                if (err) return res.json(err)
                res.json({msg: 'Success!'})
            }
        )
    } else {
        TravelAuth.findOneAndUpdate(
            {_id: req.query.id},
            {$set: {presidentSig: req.body.managerSig, status: req.body.status, notes: req.body.notes}},
            (err) => {
                if (err) return res.json(err)
                res.json({msg: 'Success!'})
            }
        )
    }
  } catch (err) {
    console.log(err)
    res.json({err: err})
  }
}
