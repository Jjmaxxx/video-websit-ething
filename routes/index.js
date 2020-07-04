const express = require('express');
const router = express.Router();
let urls = ['a'];

router.get('/',(request,response)=>{
    response.render('index');
})
router.get('/loadPage',(request,response)=>{
    return(response.json(urls));
})
router.post("/upload",(request,response)=>{
    urls.push(request.body.url);
    response.send({status:"SUCCESS"})
})
module.exports = router;
