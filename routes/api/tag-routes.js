const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
Tag.findAll({
  include: [{model: Product}],
}).then((tagData) => {
  res.json(tagData);
});
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{model: Product}]
  }).then((tagData)=> {
    res.json(tagData);
  });
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((newTag) =>{
    res.json(newTag);
  })
  .catch((err) =>{
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((upTag) => {
    if(!upTag) {
      res.status(404).json({ message: "No Tag With This ID Found!"});
      return;
    }
    res.json(upTag);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then((delTag) => {
    if(!delTag) {
      res.status(404).json({message:"No Tag With This ID Found!"});
    }
    res.status(200).json(delTAg);
  })
  .catch((err)=>{
    res.json(err);
  });
});

module.exports = router;
