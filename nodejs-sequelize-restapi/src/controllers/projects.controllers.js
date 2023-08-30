import { Projects } from "../models/Projects.js";


export const getProjects = async (req, res) => {
   try {

    const projects = await Projects.findAll()
    res.json(projects)

   } catch (error) {
    return res.status(500).json({message: error.message})
   }
}

export const getProject = async (req, res) => {
   
    try {
        
        const {id} = req.params
        const project = await Projects.findOne({
            where: {
                id,
            }
        })

        if (!project) return res.status(404).json({message: 'project no existe'}) 

        res.json(project)

    } catch (error) {
        return res.status(500).json({error: error.message})   
    }

}

export const createProject = async (req, res) => {
    const {nombre,password,apellido, dni, domicilio, genero} = req.body

try {

    const newProject = await Projects.create({
        nombre,
        password,
        apellido,
        dni,
        domicilio,
        genero,
    })

res.json(newProject)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

export const updateProject = async (req, res) => {

try {

    const {id} = req.params;
    const {nombre, password,apellido, dni, domicilio, genero} = req.body

    const project = await Projects.findByPk(id)
    project.nombre = nombre
    project.password = password
    project.apellido = apellido
    project.dni = dni
    project.domicilio = domicilio
    project.genero = genero

    await project.save()

    res.json(project)

} catch (error) {
    return res.status(500).json({message: error.message})
}

}

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
