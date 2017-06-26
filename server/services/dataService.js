const DataService = (model) => {
  const getOne = (entityId) => {
    model.find({
      where: {
        id: entityId
      }
    });
  };

  const getAll = () => {
    model.findAll({});
  };

  return {
    getOne, getAll
  };
};

module.exports = DataService;
