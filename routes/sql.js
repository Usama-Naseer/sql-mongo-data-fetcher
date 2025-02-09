const express = require('express');
const router = express.Router();
const db = require("../utils/sql_con");
var MongoClient = require('mongodb').MongoClient;


router.get('/users',(req,res,next)=>{

    db.execute("SELECT * from users LIMIT "+req.query['limit']+";").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });

});

router.get('/test',(req,res,next)=>{

   res.send({
    "hello":"SQL"
   });

});
router.get('/orders',(req,res,next)=>{

    db.execute("SELECT * from orders LIMIT "+req.query['limit']+";").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });

});
router.get('/food',(req,res,next)=>{

    db.execute("SELECT * from food LIMIT "+req.query['limit']+";").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });

});
router.get('/menu',(req,res,next)=>{

    db.execute("SELECT * from menu LIMIT "+req.query['limit']+";").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });

});
router.get('/restaurant',(req,res,next)=>{

    db.execute("SELECT * from restaurant LIMIT "+req.query['limit']+";").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });
  
  });
router.get('/performQuery',(req,res,next)=>{

    db.execute(req.query['query']).then(([rows,data])=>{
        res.statusCode = 200;
        res.send({
            'success':true,
        });
    
    }).catch((err)=>{
        res.statusCode = 400;
        res.send({
            "error":err.message,
        });

        console.log('err'+err);
    });

});

router.get('/search/:table',(req,res,next)=>{
    // const name= req.query.name;
    console.log(Object.keys(req.query));
    db.execute("SELECT * from " +req.params.table+" WHERE " +Object.keys(req.query)+ " = '"+ req.query[Object.keys(req.query)]+ "';").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });

});

router.get('/userorders',(req,res,next)=>{
    // const name= req.query.name;
    console.log(Object.keys(req.query));
    db.execute("SELECT orders.id, users.user_id, users.name, users.email FROM orders INNER JOIN users ON orders.user_id=users.id LIMIT 100000;").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err);
    });

});
router.get('/usersbasic',(req,res,next)=>{

    db.execute("SELECT id,name, email from users LIMIT "+req.query['limit']+";").then(([rows,data])=>{
        res.send(rows);
    
    }).catch((err)=>{
    
        console.log('err'+err.message);
    });

});


router.get('/delete',(req,res,next)=>{
    console.log('delete');
});

module.exports = router;
