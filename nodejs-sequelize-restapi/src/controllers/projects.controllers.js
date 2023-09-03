import { Projects } from "../models/Projects.js";


//Consultar projecto

export const getProjects = async (req, res) => {
   try {

    const projects = await Projects.findAll()
    res.json(projects)

   } catch (error) {
    return res.status(500).json({message: error.message})
   }
}

//Consultar projecto 2

export const getProject = async (req, res) => {
   
    try {
        
        const {name,password} = req.params
        const project = await Projects.findOne({
            where: {
                name,
                password
            }
        })

        if (!project) return res.status(404).json({message: 'project no existe'}) 

        res.json(project)

    } catch (error) {
        return res.status(500).json({error: error.message})   
    }

}

//Crear projecto

export const createProject = async (req, res) => {
    const {name,password} = req.body

try {

    const newProject = await Projects.create({
        name,
        password,
    })

res.json(newProject)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

//Actualizar projecto

export const updateProject = async (req, res) => {

try {

    const {id} = req.params;
    const {nombre, password } = req.body

    const project = await Projects.findByPk(id)
    project.nombre = nombre
    project.password = password


    await project.save()

    res.json(project)

} catch (error) {
    return res.status(500).json({message: error.message})
}

}

//Eliminar projecto

export const deleteProject = async (req, res) => {

try {
    
    const {id} = req.params
    await Projects.destroy({
        where: {
            id,
        }
    })

    res.sendStatus(204)

} catch (error) {
    
 return res.status(500).json({message: error.message})

}

}
