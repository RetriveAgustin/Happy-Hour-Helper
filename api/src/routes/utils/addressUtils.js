const { Address } = require("../../db");

const getAllAddress = async () => {
  const dbAddress = await Address.findAll();
  return dbAddress;
};

const getAddressByName = async (street) => {
  const dbAddress = await Address.findAll({
    where: { street }
  })
  return dbAddress;
}

module.exports = {
  getAllAddress,
  getAddressByName,
}