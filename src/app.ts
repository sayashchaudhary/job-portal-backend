import express from "express";
import bodyParser from "body-parser";
import { dbService } from "./services/db.service";
//Routes
import { router as authRoutes } from "./routes/auth/auth"

const app = express();
const Port = process.env.PORT || 5000;

dbService

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//My Routes
app.use(authRoutes);

app.get('/', (req, res) => {
    res.json('Testing Route')
});


//Setting localhost Port
app.listen(Port, () => {
    console.log(`Server is running on ${Port}`)
});

export default app;
