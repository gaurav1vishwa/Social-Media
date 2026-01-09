const { model } = require("mongoose")

const textController =function(req,res){
    res.json({
        message: "Controller working",
        data:req.body,
    })
}
module.exports=textController;