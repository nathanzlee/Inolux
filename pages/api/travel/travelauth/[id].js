import connectDB from '../../../../config/connectDB'
import User from '../../../../models/user'
import TravelAuth from '../../../../models/travelAuth'
import { getSession } from 'next-auth/client'

connectDB()

export default async function handler(req, res){
  switch(req.method){
    case "POST":
      await updateTravelAuth(req, res)
      break;
    case "GET":
      await getTravelAuth(req, res)
      break;
  }
}

const getTravelAuth = async (req, res) => {
  const session = await getSession({req})
  try {
    const travelAuth = await TravelAuth.findOne({_id: req.query.id}).populate({path: 'managerSig', populate: {path: 'user'}}).populate({path: 'presidentSig', populate: {path: 'user'}})
    res.json(travelAuth)
  } catch (err) {
    console.log(err)
    res.json({err: err})
  }
}