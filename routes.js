const cowok = require('./cowok');
const cewek = require('./cewek');

const routes = [
    {
        method: 'GET',
        path: '/cowok',
        handler: (request, h) => {
            return cowok;
        },
    },
    {
        method: 'GET',
        path: '/cewek',
        handler: (request, h) => {
            return cewek;
        },
    },
];
 
module.exports = routes;