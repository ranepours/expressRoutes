const express = require("express");
const ExpressError = require("./error");
const { mean, median, mode, validate } = require("./mathFuncs")
const app = express();

app.get("/mean", (req,res,next) => {
    //validate arr is full of nums
    if(!req.query.nums){
        throw new ExpressError("Array of numbers not found", 400)
    }
    let numsCheck = req.query.nums.split(',');
    let nums = validate(numsCheck);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    
    let result = {
        operation: "mean",
        result: mean(nums)
    }

    return res.send(result);
})

app.get("/median", (req,res,next) => {
    //validate arr is full of nums
    if(!req.query.nums){
        throw new ExpressError("Array of numbers not found", 400)
    }
    let numsCheck = req.query.nums.split(',');
    let nums = validate(numsCheck);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: median(nums)
    }

    return res.send(result);
})

app.get("/mode", (req,res,next) => {
    //validate arr is full of nums
    if(!req.query.nums){
        throw new ExpressError("Array of numbers not found", 400)
    }
    let numsCheck = req.query.nums.split(',');
    let nums = validate(numsCheck);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: mode(nums)
    }

    return res.send(result);
})

app.use("/all", (req,res,next) => {
    //validate arr is full of nums
    if(!req.query.nums){
        throw new ExpressError("Array of numbers not found", 400)
    }
    let numsCheck = req.query.nums.split(',');
    let nums = validate(numsCheck);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "all",
        mean: mean(nums),
        median: median(nums),
        mode: mode(nums)
    }

    return res.send(result);
})

//global error handler
app.use((err,req,res,next) => {
    let status = err.message || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message,status}
    });
})

app.listen(3000, () => {
    console.log("Server on port 3000");
})

