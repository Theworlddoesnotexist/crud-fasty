const items = require('../items')

const {getItems, getItem} = require('../controllers/items')
// item schema
const Item ={
  type: "object",
  properties: {
    id: {type: "string"},
    name: {type: "string"}
  },
}


// opciones para recibir items
const getItemsOpts = {
  schema: {
    response: {
      200: {
	type: 'array',
        items:Item,
      },
    },
  },
  handler: getItems,
}
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    }
  },
  handler: getItem,
}


function itemRoutes (fastify, options, done){

  fastify.get('/items', getItemsOpts)

  fastify.get('/item/:id', getItemOpts)

  done()
}

module.exports= itemRoutes
