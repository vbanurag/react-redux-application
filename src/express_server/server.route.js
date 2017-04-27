require('./mongo/mongo.connection');
const product = require('./mongo/mongo.schema');
const bodyParser = require('body-parser');

module.exports.route = (app) => {
    const allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
    }
    app.use(allowCrossDomain);
    app.use(bodyParser.json());

    app.get('/api/product', (req, res) => {
        product.find().lean().exec((err,data) => {
            res.send(data)
        })
    });

    app.delete('/api/product',(req,res) => {
        const condition = {'_id':req.body.prodId}
        product.remove(condition,(err,data)=>{
            if(err){

            }else{
                product.find((err,data)=>{
                    res.send(data);
                })
            }
        })
    });
    app.put('/api/product',(req,res) => {
        const updatedData = req.body.data;
        const condition = {'name':updatedData.name}
        const update = {
            "brand" : updatedData.brand,
            "price" : updatedData.price
        }

        product.findOneAndUpdate(condition, update, {upsert:true}, (err,updateData) => {
            if(err){
                res.send(err);
            }else{
                product.find((err,data)=>{
                    res.send(data)
                })
            }
        });
    })
}