const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("node:http");
const glpiRouter = require("./routes/glpi.js");
const remedyRouter = require("./routes/remedy.js");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

app.use("/glpi", glpiRouter);
app.use("/remedy", remedyRouter);



app.post("/Document", async (req, res,next) => {
  let b = "";
  try {
    console.log("Body:", req.body)
    console.log("Headers:", req.headers)
    
    req.on('data', (chunk) => {
     console.log(chunk.toString(),)
    b += chunk
      
    });
  
   console.log(b)
    res.send({message:'hola'});
  } catch (err) {
    next(err)
    console.log(err);
  }
});

app.get('/Document',(req,res)=>{
res.sendFile(path.join(__dirname, "public",'form.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(app.get("port"), () => {
  console.log("server at http://localhost:3001");
});

module.exports = app;
