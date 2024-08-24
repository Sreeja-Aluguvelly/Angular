var seneca=require('seneca')().quiet();
var entity=require('seneca-entity');
seneca.use(entity);
function init(msg,respond)
{
    console.log("plugin initialized");
    respond();
}
module.exports=function products(options)
{
    this.add({component:'product',action:'addProduct'},addProductDetails),
    this.add({component:'product',action:'viewProducts'},viewProductDetails),
    this.add({init:'product'},init);
}
function addProductDetails(msg,respond)
{
    var product=seneca.make('products');
    product.name=msg.args.query.name;
    product.id=msg.args.query.id;
    product.brand=msg.args.query.brand;
    product.rating=msg.args.query.rating;
    product.save$((err,product)=>{
        if(err)
            {
                respond(null,{product:msg.args.query.name,message:"Product not added"});
            }
        else{
            respond(null,{product:msg.args.query.name,message:"Product added"});
        }
    });

}
function viewProductDetails(msg,respond)
{
    var product=seneca.make('products');
    product.list$({},(err,list)=>{
        if(err)
            {
                respond(null,{message:"List is not available"});
            }
        else{
            respond(null,{product:list});
        }
    });
}
seneca.use('mongo-store',{
    name:'productdb',
    host: '127.0.0.1',
    port:'27017',
});

//http://localhost:5000/product/viewProducts