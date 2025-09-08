import express from 'express';
import cors from "cors";
import { serve } from 'swagger-ui-express';


const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Authorization", "Content-type"],
    credentials: true,
  })
)
app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API from MNZ'});
});

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
    console.log("Auth service is running at http://localhost:$(port}/api")
}) 

// error handling
server.on("error", (err) => {
    console.log("Server Error:", err)
})