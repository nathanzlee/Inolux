import connectDB from '../../../config/connectDB'
import User from '../../../models/user'
import TravelAuth from '../../../models/travelAuth'
import { getSession } from 'next-auth/client'

connectDB()

export default async function handler(req, res){
  switch(req.method){
    case "POST":
      await newTravelAuth(req, res)
      break;
    case "GET":
      await newTravelAuth(req, res)
      break;
  }
}

async function newTravelAuth(req, res) {
    // Create new travel auth with corresponding signature fields (international)
    // Populate approveBy field with corresponding managers based on session user
    // Add created travel auth to session user's travelAuths field
    const session = await getSession({req})
    
    try {
        const president = await User.findOne({level: 3})
        const user = await User.findOne({email: session.user.email}).populate('managers')
        let approvalFields
        if (req.body.international == true && session.user.level == 1) {
            approvalFields = {
                approveBy: [user.managers[0], president],
                managerSig: {
                    user: user.managers[0],
                    signature: '',
                    date: null
                },
                presidentSig: {
                    user: president,
                    signature: '',
                    date: null
                }
            }
        } else {
            approvalFields = {
                approveBy: [user.managers[0]],
                managerSig: {
                    user: user.managers[0],
                    signature: '',
                    date: null
                },
                presidentSig: null
            }
        }
        const newTravelAuth = new TravelAuth({
            ...req.body,
            ...approvalFields
        })
        await newTravelAuth.save()
        
        User.findOneAndUpdate(
            {email: session.user.email},
            {$push: {travelAuths: newTravelAuth}},
            (err) => {
                if (err) {
                    console.log(err)
                } else {
                    res.json({msg: 'Success!'})
                }
            }
        )
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}