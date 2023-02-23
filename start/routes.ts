import Route from '@ioc:Adonis/Core/Route'

//User Routes
Route.group(() => {

  Route.get('/index', 'UsersController.index')
  Route.get('/show/:id', 'UsersController.show')
  Route.post('/store', 'UsersController.store')
  Route.put('/update/:id', 'UsersController.update')
  Route.delete('/destroy/:id', 'UsersController.destroy')

})


