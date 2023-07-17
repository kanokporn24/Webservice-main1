const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");

//Insert restaurrant to database
router.post("/restaurrants", (req, res)=>{
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageurl:req.body.url
    })

    //Insert to  DB
    Restaurant.create(newRestaurant,(err, data)=>{
        if(err){
            res.status(500).send({
                message:
                err.message||
                 "Some error occured while inserting the new resttaurant"
            });
        }else{
            res.send(data);
        }
    })
})

//Get restaurant by Id

router.get("/restaurants/:id", (req,res)=>{
        const restaurantId = Number.parseInt(req.params.id);
        Restaurant.getById(restaurantId,(err, data)=>{
            if(err){
                if(err.kind=== "not_found"){
                    res.status(400).send({
                        message:"Restaurantnot fonud with this id"
                    })
                }
            }
        })
});

//Update restaurant attributes 
router.put("/restaurants/ id", (req, res)=>{
const restaurantdmber.parseInt(req.params.id);
 if(req.body.constructor Object & Object.keys(req.body).length
};

module.exports = router;