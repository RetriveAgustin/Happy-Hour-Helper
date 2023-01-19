const getModels = async (model, name) => {
  let results;

  if (model) {
    if (name) {
      results = await model.findAll({
        where: { name: name },
      });
    } else {
      results = await model.findAll();
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
      results = await model.findAll({
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

const putModels = async (model, id, properties) => {
  if (properties) {
    const updated = await model.update(properties, {where: {id}});
    return updated;
  }
  else return null;
};




const deleteModels = async (model, id) => {
    if (id) {
        const updatedInstance = await model.destroy({where: {id}})
        return updatedInstance;
    }
    else return null;
}



const restoreModels = async (model, id) => {
  if (id) {
    const recoveredInstance = await model.restore({where: {id}});
    return recoveredInstance;
  }
  else {
    return null;
  }
}

module.exports = {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels
};
