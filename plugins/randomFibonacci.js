'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('randomFibonacci', function () {
    let num = Math.floor(Math.random()*10);
    let a = 1, b = 0, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  })
})
