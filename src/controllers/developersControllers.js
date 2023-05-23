const model = require('../models/developersModels')



const addDeveloper = async(req,res) =>{
try{
    const response = await model.addDeveloperModel(req, res)
        res.status(201).send(response);
    }catch(error){
        res.status(500).send(error.message);

    }
   

   
}

//repetir el proceso con el resto de controladores
const getDeveloper = async (req, res) => {

  try {
    const response = await model.getDeveloperModel(req, res)
    res.status(202).send(response)
  } catch (error) {
    res.status(500).send(error.message)
  }

};


const modifyDeveloper = async(req,res) =>{

}

const deleteDeveloper = async(req,res) =>{

}



module.exports ={
    addDeveloper,
    getDeveloper,
    modifyDeveloper,
    deleteDeveloper,
}


