import mongoose from "mongoose";
import PasienModel from "./models/PasienModel.js";
import fs from 'fs/promises'


const populateDatabase = async() => {

    // await mongoose.connect(process.env.DB_CONNECTION);
    const filePath = './patient_data.json'
    const data = await fs.readFile(filePath, 'utf8')
    let patients = JSON.parse(data)

    const createdBy = '67728d07ef59b7ab8449cfcc'
    patients.map(patient => ({
        ...patient,
        createdBy: createdBy
    }))


    console.log(patients);
    

    // await PasienModel.insertMany(patiens)
    console.log('OK');
    
}


populateDatabase()