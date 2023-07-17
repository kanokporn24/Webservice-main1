const sql = require("./db");
//constructor
const Restaurant = funtion (restaurant);{
   //Atrributes
   this . name = restaurant . name;
   this . type = restaurant .type;
   this . imageurl = restaurant . imageurl ;

};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurant SET name, type,image VALUES ("KFC", "Fastfood", "url")
    sql.query("INSERT INTO restaurant SET  ? ", newRestaurant, (err,res)=>{
        if(err){
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มีerror
        console.log("new retaurant creatad");
        result(null,{id:res.id,...newRestaurant});
    });
};


Restaurant.gettById = (restaurant, result)=>{
    //SELECT * From restaurant WHERE id = restaurantId
    sql.query
        'SELECT * From restaurant WHERE id = ${restaurantId}',
        (err, res) => {
            if(err){
                console.log("err", err);
                result(err, null);
                return;
            }
           console.log("err", err);
           if(res.length){
            result(err, null);
            return;
           }
           result({kind: "not_found"}, null);
                
                
        }
}

//Update Restaurant

 Restaurant.updateById = (id, restaurant, result) => {
 //UPDATE restaurants SET name="name", type="type", imageurl"imageurl" WHERE id="id"


sql.query( "UPDATE restaurants SET name= ?, type?, imageurl=? WHERE id ?", 
[restaurant.name, restaurant.type, restaurant. imageurl,id],
(err,res) =>{
    if(err){
        result(err, null)
        return;
    }
    if(res.affectedRows == 0){
        result({kind:"not_found"}, null);
        return;
    }
    result(null, {id:id, ...restaurant});
}

 )};

(err, res) => 0


Restaurant.deleteById= (id, result)=> {
    sql.query("DELETE FROM restaurant WHERE id = ?",id,(err,res)=>{

    });
}
module.exports = Restaurant.js;