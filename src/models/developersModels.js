const firebase = require('../database/firebase')

const db = firebase.firestore();
const  devsDoc = db.collection('Developers')

const addDeveloperModel = async(req, res) =>{
    try{

        const {devName, manager, address, openingDate, country} = req.body
        const developerData ={
            devName: devName,
            manager: manager,
            address: address,
            openingDate: openingDate,
            country: country
        };
        
        const docRef =  await devsDoc.add(developerData);
        console.log('Developer with ID :'+docRef.id);
        return 'Developer Created Successfully'
    } catch (error){
        console.log('Error adding Developer: '+error.message);
        throw new Error('Error adding Developer')
    }


}

const getDeveloperModel = async() =>{
    try{
        const {devName} = req.body
        const developerData = {
            devName: devName
        }

        const docRef = await devsDoc.get(developerData)

        //seguir con el get


    }catch(error){
        console.log('Error getting Developer: '+error.message);
        throw new Error ('Error getting Developer')
    }

}



module.exports = {addDeveloperModel, getDeveloperModel}


