import express, { response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

interface User {
    name: string;
    id: number;
    password: string,
    gender: "Male" | "Female"
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server running smoothly!');
});

app.get("/api/services")
app.get("/api/services/:slug")
app.get("/api/inquiries")
app.get("api/auth/login")

app.post("api/services")
app.patch("api/services/:id")
app.delete("Services/:id")
app.post("api/gallery")
app.delete("/api/gallery/:id")

app.get('/user', (req, res) => {
    const user:User = {
        name: "Roger",
        id: 9,
        password: "Flamangvan1",
        gender: "Male"
    }
    res.json({user: user , message: "User fetched successfully"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});