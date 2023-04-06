'use strict';

class Collection {
	constructor(model) {
		this.model = model
	}

	async read(id, options) {
		try {
			if (id) {
				return await this.model.findOne({ where: {id}, ...options});
			} else {
				return await this.model.findAll({ options });
			}
		} catch (e) {
			console.log("Collection class read error");
		}
	}

	create(data) {
		try {
			this.model.create(data);
		} catch (e) {
			console.log("Collection create error");
		}
	}

	async update(id, date) {
		try {
			let updatedRecord = await this.model.update(
				data,
				{
					where: { id: id }
				}
			);
			return updatedRecord;

		} catch (e) {
			console.log("Collection update error");
		}
	}

	async delete(id) {
		try {
			let message = await this.model.update({
				where: { id: id }
			});
			return message;
		} catch (e) {
			console.log("Collection update error");
		}
	};

module.exports = Collection;