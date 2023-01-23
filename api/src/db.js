require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/hhh`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Address, Brand, Category, Discount, Offer, Order, Payment_method, Product, Sub_category } = sequelize.models;
// Aca vendrian las relaciones
User.hasMany(Address, { foreignKey: 'user_id' });
Address.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Payment_method, { foreignKey: 'user_id' });
Payment_method.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Order.belongsToMany(Offer, { through: 'Offers_Order', foreignKey: 'order_id' });
Offer.belongsToMany(Order, { through: 'Offers_Order', foreignKey: 'offer_id' });

Order.belongsToMany(Product, { through: 'Product_Order', foreignKey: 'order_id' });
Product.belongsToMany(Order, { through: 'Product_Order', foreignKey: 'product_id'});

Offer.hasMany(Product, { foreignKey: 'offer_id' });
Product.belongsTo(Offer, { foreignKey: 'offer_id' });

Product.belongsToMany(Brand, { through: 'Brand_Product', foreignKey: 'product_id' });
Brand.belongsToMany(Product, { through: 'Brand_Product', foreignKey: 'brand_id' });

Product.belongsToMany(Category, { through: 'Category_Product', foreignKey: 'product_id' });
Category.belongsToMany(Product, { through: 'Category_Product', foreignKey: 'category_id' });

Product.belongsToMany(Sub_category, { through: "Sub_category_Product", foreignKey: 'product_id' });
Sub_category.belongsToMany(Product, { through: "Sub_category_Product", foreignKey: 'sub_cateogry_id' });

Product.belongsToMany(Discount, { through: 'Discount_Product', foreignKey: 'product_id' });
Discount.belongsToMany(Product, { through: 'Discount_Product', foreignKey: 'discount_id' });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
