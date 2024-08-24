var seneca=require('seneca')().quiet();
var express=require('express')();
var web=require('seneca-web');
var web_adapter=require('seneca-web-adapter-express');
var cors=require('cors');
var user_plugin=require('./user_plugin');
express.use(cors());

var myRoutes=[{
    prefix:'/product',
    pin:'component:product,action:*',
    map:{
        addProduct:{GET:true},
        viewProducts:{GET:true}
    }
}];

var config={
    routes:myRoutes,
    adapter: web_adapter,
    context:express
};

seneca.client().use(web,config).use('./user_plugin.js').ready(()=>
{
    var server=seneca.export('web/context')();
    server.listen('5000',()=>{
        console.log("server listening to port 5000");
    })
})