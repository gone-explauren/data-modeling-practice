'use strict'

const { Sequelize } = require('sequilize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const createBand = require('./band.js');
const createBandMember = require('./bandMember.js');

const sequelize = new Sequelize(SQL_URL)

const BandModel = createBand(sequelize);
const BandMemberModel = createBandMember(sequelize);

const Collection = require('./collection.js');

// create our associations / relationships
// (from sequelize model method)

// BandModel will be the primary model, and the BandMemberModel will be related to this through the foriegn key
BandModel.hasMany(BandMemberModel, { foriegnKey: "bandID", sourceKey: 'id' });
BandMemberModel.belongsTo(BandModel, { foriegnKey: "bandID", targetKey: 'id' });

module.exports = { 
	sequelize, 
	Band: new Collection(BandModel), 
	BandMember: new Collection(BandMemberModel), 
};