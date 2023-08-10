const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({
    include: [{model: Product}],
  }).then((catData) => {
    res.json(catData);
  });
});

router.get('/:id', (req, res) => {
  Category.create(req.body)
    .then((newCat) =>{
    res.json(newCat);
  })
  .catch((err) =>{
    res.json(err);
  });
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCat) => {
    res.json(newCat);
  })
  .catch((err)=> {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((upCat) =>{
    if(!upCat){
      res.status(404).json({message: "No Category with this ID!"});
      return;
    }
    res.json(category);
  })
  .catch((err) =>{
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((delCat) => {
    if(!delCat) {
      res.status(404).json({ message: "No Category with this ID!"});
      return;
    }
    res.json(delCat);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
