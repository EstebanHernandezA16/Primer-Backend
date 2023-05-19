

//This could be an async await funct with db.insert Method
const AddVideoGame = async(req, res) =>{
// const response = await debugger.insertMethod
const {name, developer, release, Description, banner, plataforms, genres} = req.body;

const response = {
    message: 'VideoGame Accepted!!',
    name,
    developer,
    release,
    Description,
    banner,
    plataforms,
    genres
}


    res.status(201).json(response);


}

const GetVideoGame = async(req, res) =>{

}

const ModifyVideoGame = async(req, res) =>{

}

const DeleteVideoGame = async(req, res) =>{

}




module.exports = {
    AddVideoGame,
    ModifyVideoGame,
    GetVideoGame,
    DeleteVideoGame,
}