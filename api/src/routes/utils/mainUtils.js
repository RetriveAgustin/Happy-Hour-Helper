const getModels = async (model, name) => {
  let results;

  if (model) {
    if (name) {
      results = model.findAll({
        where: { name },
      });
    } else {
      results = model.findAll();
    }
  } else {
    return null;
  }

  return results;
};

const getModelsById = async (model, id) => {
  let results;

  if (model) {
    if (id) {
      results = model.findAll({
        where: { id },
      });
    } else {
      return null;
    }
  } else {
    return null;
  }

  return results;
};

const postModels = async (model, properties) => {
  if (properties && model) {
    let newInstance = await model.create(properties);
    return newInstance;
  } else {
    return null;
  }
};

const putModels = async (instance, properties) => {
  if (properties) {
    const updated = await instance.update(properties);
    return updated;
  }
  else return null;
};

const deleteModels = async (model, id) => {
    if (id) {
        const instance = getModelsById(model, id);
        if (instance[0]) {
            const updatedInstance = await instance.update({paranoid: false},{where: {}})
            return updatedInstance;
        }
        else return null;
    }
    else return null;
}

module.exports = {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels
};
