require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createSecretToken } = require("./utils/SecretToken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const { HoldingModel } = require("./models/HoldingModel");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");
const { SellModel } = require("./models/SellModel");
const { BasicModel } = require("./models/BasicModel");
const { UserModel } = require("./models/UserModel");
const { userVerification } = require("./middlewares/userVerification");

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',  
    credentials: true, 
}));
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const basicmain = {};

mongoose.connect(url)
    .then(() => { console.log("DB connected successfully") });

// app.get("/addPosition", async(req,res)=>{
//     let tempdata =  [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
//       tempdata.forEach((data)=>{
//                 let position = new PositionModel({
//                     product: data.product,
//                     name: data.name,
//                     qty: data.qty,
//                     avg: data.avg,
//                     price: data.price,
//                     net: data.net,
//                     day: data.day,
//                     isLoss: data.isLoss,
//                   });
//               position.save()
//             });
//     res.send("Done")
// })

// app.get("/addHoldings", async(req,res)=>{
//     let tempdata = [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ];
//     tempdata.forEach((data)=>{
//         let holding = new HoldingModel({
//             name: data.name,
//             qty: data.qty,
//             avg: data.avg,
//             price: data.price,
//             net: data.net,
//             day: data.day,
//           });
//       holding.save()
//     });
//     res.send("Done")
// });

// app.use(()=>{

// })

app.use(async (req, res, next) => {
    let values = await HoldingModel.find({});
    let holdingSum = 0;
    let holdingsBsum = 0
    values.map((val) => {
        holdingSum += val.price * val.qty;
        holdingsBsum += val.avg * val.qty
    });
    await BasicModel.updateOne({}, {
        // margin : 3740,
        holdingBought: holdingsBsum.toFixed(0),
        holdingsNow: holdingSum.toFixed(0)
    });
    next();
});

app.get("/basic",userVerification, async (req, res) => {
    let basic = await BasicModel.find({});
    res.json(basic);
});

app.post("/signup", async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existing = await UserModel.findOne({ email });
        if (existing) {
            return res.json({ message: "User already exist" });
        }
        else {
            const newUser = new UserModel({
                email,
                username,
                password,
                createdAt
            });
            await newUser.save();
            const token = createSecretToken(newUser._id);
            res.cookie("token", token, {
                withCredentials: true,
                httpOnly: false,
                sameSite: 'None',
            })
            return res.status(201).json({ message: "User saved successfully", success: true, newUser })
        }
    }
    catch (err) {
        console.log(err)
    }
});

app.post("/login" ,userVerification, async (req,res)=>{
    try{
        const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       credentials: true,
       httpOnly: true,
       sameSite: 'None',
     });
     res.status(201).json({ message: "User logged in successfully", success: true,token });
    }catch(err){
        console.log(err)
    }
});


app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings)
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions)
});

app.post("/newOrder", async (req, res) => {
    let newOrders = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    let basic = await BasicModel.find({});
    const val = (basic[0]).margin;
    const absVal = req.body.price * req.body.qty;
    if (val > absVal && (absVal > 0)) {
        await BasicModel.updateOne({}, {
            margin: val - absVal
        });
        newOrders.save();
        let newHolding = new HoldingModel({
            name: req.body.name,
            qty: req.body.qty,
            avg: (req.body.price) * (Math.floor(Math.random() + 1)).toFixed(2),
            price: req.body.price,
            net: (req.body.price) * (Math.floor(Math.random() + 1)).toFixed(2) - req.body.price,
            day: ((Math.random() * req.body.price - (req.body.price) * (Math.floor(Math.random() + 1))).toFixed(2) / 1000).toFixed(2),
        })
        newHolding.save();
    }

})

app.post("/newSell",userVerification, async (req, res) => {
    let newSell = new SellModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    let isThere = await HoldingModel.findOne({ name: req.body.name })
    let basic = await BasicModel.find({});
    let value = (req.body.qty * req.body.price) + (basic[0]).margin;
    if (isThere && (isThere.qty >= req.body.qty)) {
        await BasicModel.updateOne({}, {
            margin: value
        });
        await HoldingModel.updateOne({ name: req.body.name }, { qty: isThere.qty - req.body.qty })

        newSell.save();
    }
});

app.get("/orders",userVerification, async (req, res) => {
    let orders = await OrderModel.find({});
    res.json(orders);
});


app.listen(PORT, () => {
    console.log(`App is listening on Port ${PORT}`)
});


