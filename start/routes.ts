import Route from '@ioc:Adonis/Core/Route'

//User Routes
Route.group(() => {
  Route.get('/index', 'UsersController.index')
  Route.get('/show/:id', 'UsersController.show')
  Route.post('/new', 'UsersController.store')
}).namespace('App/Controllers/Http/User').middleware(['auth:jwt'])

//Admin Routes
Route.group(() => {
  Route.get('/index', 'AdminsController.index')
  Route.get('/show/:id', 'AdminsController.show')
  Route.post('/new', 'AdminsController.store')
  Route.put('/update/:id', 'AdminsController.update')
  Route.delete('/destroy/:id', 'AdminsController.destroy')
}).prefix('admin').namespace('App/Controllers/Http/Admin').middleware(['auth:jwt', 'only_admin'])

//No Auth / Login Routes
Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/authenticate', 'AuthController.authenticate')
})


