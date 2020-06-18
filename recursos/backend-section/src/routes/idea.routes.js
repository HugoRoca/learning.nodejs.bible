const { Router } = require('express')
const { ParseIntMiddleware } = require('../middleware')

module.exports = function({ IdeaController }){
    const router = Router()

    router.get('/', ParseIntMiddleware, IdeaController.getAll)
    router.get('/:ideaId', IdeaController.get)
    router.post('/', IdeaController.create)
    router.get('/:ideaId/all', IdeaController.getUserIdeas)
    router.patch('/:ideaId', IdeaController.update)
    router.delete('/:ideaId', IdeaController.delete)
    router.post('/:ideaId/upvote', IdeaController.upvoteIdeas)
    router.post('/:ideaId/downvote', IdeaController.downvoteIdeas)

    return router
}