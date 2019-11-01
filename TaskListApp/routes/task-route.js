const express = require('express')
const router = express.Router()

const taskModel = require('../models/task')

router.get('/', function (req, res, next) {
  taskModel.findAll()
    .then(tasks => {
      console.log(tasks)
      res.render("tasks/watch", {
        tasks
      })
    })
    .catch(error => {
      console.log(error)
      return res.status(500).send("¡Error al obtener las tareas!")
    })
})

router.get('/add', function (req, res, next) {
  res.render("tasks/add")
})

router.post('/insert', function (req, res, next) {
  const {description, status} = req.body
  if (!description || !status) 
    return res.status(500).send("¡No hay descripción o estatus!")
  taskModel.save(description, status)
    .then(idNewTask => {
      res.redirect('/tasks')
    })
    .catch(error => {
      return res.status(500).send("¡Error insertando tarea!")
    })
})

router.get('/delete/:id', function (req, res, next) {
  taskModel.delete(req.params.id)
    .then(() => {
      res.redirect('/tasks')
    })
    .catch(error => {
      return res.status(500).send("¡Error al eliminar!")
    })
})

router.get('/edit/:id', function (req, res, next) {
  taskModel.findById(req.params.id)
    .then(task => {
      if(task) {
        res.render("tasks/edit", {
          task
        })
      } else {
        return res.status(500).send("¡No existe tarea con ese id!")
      }
    })
    .catch(error => {
      return res.status(500).send("¡Error al obtener la tarea!")
    })
})

router.post('/update/', function (req, res, next) {
  const {id, status} = req.body
  if(!id || !status)
    return res.status(500).send("¡No hay suficientes datos!")
  taskModel.update(id, status)
    .then(() => {
      res.redirect("/tasks")
    })
    .catch(error => {
      return res.status(500).send("¡Error actualizando la tarea!")
    })
})

module.exports = router