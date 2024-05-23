require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const configSession = require("./configs/session");
const ConnectDB = require("./configs/db");
const authUser = require("./middlewares/auth.middleware");

//Define router admin
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const categoryRouter = require("./routes/category.route");
const productRouter = require("./routes/product.route");
const authorRouter = require("./routes/author.route");
const companyRouter = require("./routes/company.route");
const staffRouter = require("./routes/staff.route");
const commentRouter = require("./routes/comment.route");
const bannerRouter = require("./routes/banner.route");
const dashboardRouter = require("./routes/dashboard.route");

//Define router client
const homeRouter = require("./routes/home.route");
const cartRouter = require("./routes/cart.route");
const orderRouter = require("./routes/order.route");
const filterRouter = require("./routes/filter.route");

const app = express();

//Connect database
ConnectDB(process.env.DB_URL);

//Config session
configSession(app);

//config cors origin
app.use(cors());

//config cookie-parser
app.use(cookieParser());

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({ data: "Vương đầu heo" });
});

//Router api admin
app.use("/api", authRouter);
app.use("/api/categories", authUser.isAdmin, categoryRouter);
app.use("/api/products", authUser.isAdmin, productRouter);
app.use("/api/authors", authUser.isAdmin, authorRouter);
app.use("/api/companies", authUser.isAdmin, companyRouter);
app.use("/api/staffs", authUser.isAdmin, staffRouter);
app.use("/api/banners", authUser.isAdmin, bannerRouter);
app.use("/api/dashboards", authUser.isAdmin, dashboardRouter);

app.use("/api/users", authUser.isLogin, userRouter);
app.use("/api/comments", commentRouter);

//Router api client
app.use("/api/home", homeRouter);
app.use("/api/filters", filterRouter);
app.use("/api/carts", authUser.isLogin, cartRouter);
app.use("/api/orders", orderRouter);

//Listen port
app.listen(process.env.APP_PORT, () => {
  console.log(`Listen port: ${process.env.APP_PORT}`);
});
