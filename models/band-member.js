'use strict'
// barrel index.js file

const { DateTypes } = require('sequelize');
// const sequelize = require('./index.js');

const BandMember = sequelize.define('Band', {
	name: (
		type: DateTypes.STRING,
		allowNull: false,
	),
	instrument: (),
	canSing: (),
	// foriegn key for the Band model
	bandID: ()
});

module.exports = BandMember;