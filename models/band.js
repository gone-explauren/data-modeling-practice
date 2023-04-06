'use strict'
// barrel index.js file

const { DateTypes } = require('sequelize');

// circular imports (apprently? I'm not really sure how, but this is how we fixed it)
// first, do not import sequelize here
// const sequelize = require('./index.js');

// inject sequelize here instead of importing with require
// sequelize is passed as an argument on the barrel index.js page
const Band = (sequelize) => sequelize.define('Band', {
	name: (),
	genre: (
		type: DataTypes.ENUM('rock', 'pop', 'rap', 'punk', 'psychedelic', 'classical'),
		defaultValue: 'rock',
		allowNull: false
	),
	whereFrom: (),
	onTour: ()
});

module.exports = Band;