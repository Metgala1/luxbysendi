import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from "dotenv";

// Initialize it right away
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server running smoothly!');
});







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});