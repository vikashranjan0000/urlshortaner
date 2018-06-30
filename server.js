
var express = require('express')
  , http = require('http')
  , path = require('path')
  , bijective = require('bijective-shortener')
  , app = express();

//we have to use bijection library and encode using encoding of base string length

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/submitUrl', function(req, res){
    var url = req.userurl;
    bijective.allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if(encoding){
        var encode = bijective.makeFromInteger(url);
        console.log(encode);
        res.send({encoded_url:encode});
    }else{
        var decoded = bijective.decodeToInteger(url)
        console.log(decoded);
        res.send({encoded_url:decoded});
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))