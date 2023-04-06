'use strict';

class Collection {
	constructor(model) {
		this.model = model
	}

	async read(id) {
		if (id) {
			return await this.model.findByPk(id);
		} else {
			return await this.model.findAll();
		}
	}

	create(data) {

	}

	update(id, date) {

	}

	delete(id) {

	}
};

module.exports = Collection;