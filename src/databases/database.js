import mongoose from 'mongoose'
import 'dotenv/config'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/products'

mongoose.connect(MONGODB_URI)
console.log('connected to DDBB');