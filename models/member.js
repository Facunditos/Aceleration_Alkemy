'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Member.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    facebookUrl: {
      allowNull: true,
      type: DataTypes.STRING
    },
    instagramUrl: {
      allowNull: true,
      type: DataTypes.STRING
    },
    linkedinUrl: {
      allowNull: true,
      type: DataTypes.STRING
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    deletedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Member',
    paranoid: true
  });
  return Member;
};
