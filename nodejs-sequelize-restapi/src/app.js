import  express  from 'express'
import projectsRoutes from "./routes/projects.routes.js";




const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//middlewares
app.use(express.json());

app.use(projectsRoutes)


export default app;