import { Router } from "express";
import { createProject, getProjects, deleteProject, updateProject, getProject } from "../controllers/projects.controllers.js";
const router = Router()

router.get('/projects',getProjects);
router.post('/projects',createProject);
router.put('/projects/:id',updateProject);
router.delete('/projects/:id',deleteProject);
router.get('/projects/:name',getProject);

export default router 