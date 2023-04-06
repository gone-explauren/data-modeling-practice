'use strict'

const { sequelize, Band, BandMember } = require('../models');

beforeAll(async() => {
	await sequelize.sync();
});
afterAll(async() => {
	await sequelize.sync();
});

let bandID = null;

describe('Testing data models', () => {
	xtest('Should create a band', async () => {
		let newBand = await Band.create({
			name: 'Shadow Work',
			genre: '',
			whereFrom: 'Denver, CO',
			onTour: true,
		});

		bandID = newBand.id
		expect(newBand.name).toEqual('Shadow Work');
		expect(newBand.id).toBeTruthy;
	});

	xtest('Should create a band member', async () => {
		let newBand = await BandMember.create({
			name: 'Ben Zickau',
			instrument: 'drums',
			canSing: false,
			bandID: bandID
		});

		expect(newBandMember.name).toEqual('Ben Zickau');
		expect(newBandMember.bandID).toEqual('bandID');
	});

	// xtest('Should fetch a member and their band name', async () => {
	// 	let bandMember = await BandMember.findOne({
	// 		where {
	// 			name: "Ben Zickau"
	// 		}), {
	// 		// include the parent model, BandModel (exported as Band here)
	// 		include: Band
	// 	}
	// }
	// });

	// console.log("Member with association: ", bandMember, " Band: ", bandMember.Band.name);
	// expect(bandMember.name).toEqual
	// expect(bandMember.Band.name).toEqual("Shadow Work");
	// });
});