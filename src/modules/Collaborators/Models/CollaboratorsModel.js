import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const CollaboratorsModel = sequelize.define("CollaboratorsTab", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true
  },
  can_develop: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: "collaborators",
  timestamps: false
});

export default CollaboratorsModel;