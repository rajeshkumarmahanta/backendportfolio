const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// models
// const adminModel = require("./models/admin");
// const homeModel = require("./models/Home");
// const aboutModel = require("./models/About");
// const resumeModel = require("./models/Resume");
// const frontendModel = require("./models/skills/frontend");
// const backendModel = require("./models/skills/backend");
// const LFModel = require("./models/skills/LF");
// const databaseModel = require("./models/skills/database");
// const otherModel = require("./models/skills/other");
// const eduModel = require("./models/Education");
// const serviceModel = require("./models/Service");
// const projectModel = require("./models/Project");
// const blogModel = require("./models/Blog");
// const socialModel = require("./models/Socialmedia");
// const messageModel = require("./models/Message");
// const galleryModel = require("./models/Gallery");
// const upload = require("./multer/multerConfig");
const adminRouter = require("./routes/admin");
const resumeRouter = require("./routes/resume");
const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");
const frontendRouter = require("./routes/skill/frontend");
const backendRouter = require("./routes/skill/backend");
const databaseRouter = require("./routes/skill/database");
const libraryFrameworkRouter = require("./routes/skill/libraryFramework");
const otherRouter = require("./routes/skill/other");
const educationRouter = require("./routes/education");
const serviceRouter = require("./routes/service");
const projectRouter = require("./routes/project");
const blogRouter = require("./routes/blog");
const socialMediaRouter = require("./routes/socialMedia");
const galleryRouter = require("./routes/gallery");
const messageRouter = require("./routes/message");
const alldataRouter = require("./routes/allData");
const {connectDB} = require("./config/connect");
connectDB("mongodb+srv://rajeshkumarmahanta2128:Rajesh%40123@portfolio-db.jmagw.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-db");
const nodemailer = require("nodemailer");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const allowedOrigins = [
//     'https://portfoliorajesh.netlify.app',
//     'https://portfolioadminrajesh.netlify.app'
// ];

// app.use(cors());
app.use(cors({
    origin: ['http://localhost:5173/','http://localhost:5174/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    credentials: true,
    allowedHeaders: ['Content-Type']// Allow cookies or authentication headers
}));
// app.options('*', cors()); // Handle preflight requests for all routes
// app.use(cors({
//     origin: 'https://portfoliorajesh.netlify.app'
// }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/admin",adminRouter);
app.use("/resume",resumeRouter);
app.use("/home",homeRouter);
app.use("/about",aboutRouter);
app.use("/frontend",frontendRouter);
app.use("/backend",backendRouter);
app.use("/database",databaseRouter);
app.use("/libraryFramework",libraryFrameworkRouter);
app.use("/other",otherRouter);
app.use("/education",educationRouter);
app.use("/service",serviceRouter);
app.use("/project",projectRouter);
app.use("/socialMedia",socialMediaRouter);
app.use("/blog",blogRouter);
app.use("/gallery",galleryRouter);
app.use("/message",messageRouter);
app.use("/alldata",alldataRouter);
app.get("/", (req, res) => {
  res.send("app is running...");
});
app.listen(process.env.PORT || 3000);
