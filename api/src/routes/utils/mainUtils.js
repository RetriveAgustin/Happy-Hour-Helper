const {Product, Brand, Category, Sub_category} = require("../../db");

const getModels = async (model, name) => {
  let results;

  if (model) {
    if (model === Product) {
      if (name) {
        results = await model.findAll({
          where: { name: name },
          include: [
            {
              model: Brand,
              attributes: ["id", "name"],
              through: {attributes: []},
            },
            {
              model: Category,
              attributes: ["id", "name"],
              through: {attributes: []},
            },
            {
              model: Sub_category,
              attributes: ["id", "name"],
              through: {attributes: []},
            },
          ],
        });
      } else {
        results = await model.findAll({
          include: [
            {
              model: Brand,
              attributes: ["id", "name"],
              through: {attributes: []},
            },
            {
              model: Category,
              attributes: ["id", "name"],
              through: {attributes: []},
            },
            {
              model: Sub_category,
              attributes: ["id", "name"],
              through: {attributes: []},
            },
          ],
        });
      }
    } else {
      if (name) {
        results = await model.findAll({
          where: { name: name },
        });
      } else {
        results = await model.findAll();
      }
    }
  } else {
    return null;
  }

  return results;
};

// const getModels = async (model, name) => {
//   let results;

//   if (model) {
//     if (name) {
//       results = await model.findAll({
//         where: { name: name },
//       });
//     } else {
//       results = await model.findAll();
//     }
//   } else {
//     return null;
//   }

//   return results;
// };

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

const getModelsByEmail = async (model, email) => {
  let results;

  if (model) {
    if (email) {
      results = await model.findAll({
        where: { email },
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
    const updated = await model.update(properties, { where: { id } });
    return updated;
  } else return null;
};

const deleteModels = async (model, id) => {
  if (id) {
    const updatedInstance = await model.destroy({ where: { id } });
    return updatedInstance;
  } else return null;
};

const restoreModels = async (model, id) => {
  if (id) {
    const recoveredInstance = await model.restore({ where: { id } });
    return recoveredInstance;
  } else {
    return null;
  }
};

// const filterModelByRelation = async (firstModel, secondModel, param, id) => {
//   const instace = firstModel.findAll({
//     where: {
//       param,
//     },
//     include: [{ model: secondModel, where: { param: id } }],
//   })
// }

module.exports = {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels,
  getModelsByEmail
};
