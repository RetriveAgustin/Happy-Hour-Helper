const getModels = async (model, name) => {
  let results;

  if (model) {
    if (name) {
<<<<<<< HEAD
      results = model.findAll({
        where: { name },
      });
    } else {
      results = model.findAll();
=======
      results = await model.findAll({
        where: { name: name },
      });
    } else {
      results = await model.findAll();
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
      results = model.findAll({
=======
      results = await model.findAll({
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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

<<<<<<< HEAD
const putModels = async (instance, properties) => {
  if (properties) {
    const updated = await instance.update(properties);
=======
const putModels = async (model, id, properties) => {
  if (properties) {
    const updated = await model.update(properties, {where: {id}});
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    return updated;
  }
  else return null;
};

<<<<<<< HEAD
const deleteModels = async (model, id) => {
    if (id) {
        const instance = getModelsById(model, id);
        if (instance[0]) {
            const updatedInstance = await instance.update({paranoid: false},{where: {}})
            return updatedInstance;
        }
        else return null;
=======



const deleteModels = async (model, id) => {
    if (id) {
        const updatedInstance = await model.destroy({where: {id}})
        return updatedInstance;
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    }
    else return null;
}

<<<<<<< HEAD
=======


const restoreModels = async (model, id) => {
  if (id) {
    const recoveredInstance = await model.restore({where: {id}});
    return recoveredInstance;
  }
  else {
    return null;
  }
}

// const filterModelByRelation = async (firstModel, secondModel, param, id) => {
//   const instace = firstModel.findAll({
//     where: {
//       param,
//     },
//     include: [{ model: secondModel, where: { param: id } }],
//   })
// }

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
  getModels,
  getModelsById,
  postModels,
  putModels,
<<<<<<< HEAD
  deleteModels
=======
  deleteModels,
  restoreModels
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
