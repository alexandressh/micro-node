var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {  
  const values = await req.app.get('db').keys('*');
  res.send(values);
});

router.get('/:userId', async function(req, res, next) {
  const userId = req.params.userId
  const values = await req.app.get('db').get(userId);
  res.status(200).send(values)
});

router.post('/', async function(req, res, next) {  
  const { name, value } = req.body;
  await req.app.get('db').set(name, value);
  res.status(200).send({})
});

router.delete('/:userId', async function(req, res, next) {  
  const userId = req.params.userId
  await req.app.get('db').del(userId);
  res.status(200).send({})
});

router.put('/:userId', async function(req, res, next) {  
  const { value } = req.body;
  const userId = req.params.userId
  await req.app.get('db').set(userId, value);
  res.status(200).send({})
});

module.exports = router;
