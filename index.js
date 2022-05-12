const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/singleSeason/:id', (request, response) => {
  const show = showdata.seasons.find((currentSeason) => { return currentSeason.number === parseInt(request.params.id) })

  return response.render('showdata', { show })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1340, () => {
  console.log('Listening on 1340') // eslint-disable-line no-console
})



  