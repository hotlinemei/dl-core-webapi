'use strict'

var restify = require('restify');
var server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

var v1ProductRouter = require('./src/routers/v1/core/product-router');
v1ProductRouter.applyRoutes(server);
var v1BuyerRouter=require('./src/routers/v1/core/buyer-router');
v1BuyerRouter.applyRoutes(server); 

var v1SupplierRouter = require('./src/routers/v1/core/supplier-router');
v1SupplierRouter.applyRoutes(server); 


var v1TextileRouter = require('./src/routers/v1/core/textile-router');
v1TextileRouter.applyRoutes(server)

var v1FabricRouter = require('./src/routers/v1/core/fabric-router');
v1FabricRouter.applyRoutes(server);
var v1AccessoriesRouter = require('./src/routers/v1/core/accessories-router');
v1AccessoriesRouter.applyRoutes(server);

var v1SparepartRouter = require('./src/routers/v1/core/sparepart-router');
v1SparepartRouter.applyRoutes(server);

server.listen(process.env.PORT, process.env.IP);
console.log(`server created at ${process.env.IP}:${process.env.PORT}`)