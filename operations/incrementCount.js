const stateObject = require('../core/stateObject');

function IncrementCount(req, res) {
  const { body } = req;

  if (!body.id) res.send(422, 'Un-processable Entity missing id');

      if (stateObject[body.id]) {
          stateObject[body.id] += 1;
      } else {
          stateObject[body.id] = 1;
      }

      res.send({ count: stateObject[body.id] })
}

module.exports = IncrementCount;