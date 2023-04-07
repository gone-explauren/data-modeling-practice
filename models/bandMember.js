'use strict'
// barrel index.js file

const { DateTypes } = require('sequelize');
// const sequelize = require('./index.js');

const BandMember = (sequelize) => {
	return sequelize.define('Band', {
		name: {
			type: DateTypes.STRING,
			allowNull: false,
		},
		instrument: {
			type: DateTypes.STRING,
			allowNull: false,
		},
		canSing: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		// foriegn key for the Band model
		bandID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	});
}

module.exports = BandMember;