const express = require('express')

module.exports = function(server){
    //Define url base para todas as rotas
    const router = express.Router()
    server.use('/api',router)

    //Rotas relacionas ao ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCyclesService')
    BillingCycle.register(router,'/billingCycles')
}
