import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const CustomerModel = sequelize.define("CustomerTab", {
  code: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
   rg: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cpf: {
    type: DataTypes.STRING,    
    unique: true,
    allowNull: true
  }, 
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  number_house: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  tableName: "customers",
  timestamps: false
});

export default CustomerModel;