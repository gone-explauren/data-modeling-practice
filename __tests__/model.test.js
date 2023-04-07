'use strict'

const { sequelize, Band, BandMember } = require('../models');

beforeAll(async() => {
	await sequelize.sync();
});
afterAll(async() => {
	await sequelize.sync();
});

let bandID = null;
let bandMemberID = null;

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
		expect(newBand.id).toBeTruthy();
	});

	xtest('Should create a band member', async () => {
		let newBandMember = await BandMember.create({
			name: 'Ben Zickau',
			instrument: 'drums',
			canSing: false,
			bandID: bandID
		});

		expect(newBandMember.name).toEqual('Ben Zickau');
		expect(newBandMember.bandID).toEqual('bandID');
	});

	xtest('Can fetch a member and band', async () => {
    let bandMember = await BandMember.read(bandMemberId, {
      include: Band.model
    });

    console.log("Band member with association: ", bandMember);
    expect(bandMember.name).toEqual('Ben Zickau');
    expect(bandMember.Band.name).toEqual('Shadow Work');
  });
});