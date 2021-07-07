const router = require('express').Router();
const fs = require('fs');

/* list api */

router.get('/notifications-data',function(req,res,next){
    fs.readFile('./invitations.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        return res.status(200).json({ status: true, data: obj})
    });
})  

router.get('/updated-notifications-data',function(req,res,next){
    fs.readFile('./invitations_update.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        let dataArray = obj.invites.filter((data)=>{
           return data.invite_id == req.query.id
        })
        return res.status(200).json({ status: true, data: dataArray})
    });
})  



module.exports = router;
