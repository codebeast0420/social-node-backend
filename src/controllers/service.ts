import { Request, Response } from 'express'
import { BAD_REQUEST, BACKEND_ERROR } from '../config'
import Service from '../services/service'

const getService = async (req: Request, res: Response) => {
	const { serviceId } = req.params;
	try {
		const profile = Service.findOneByID(serviceId);
	} catch (e) {
		return res.status(500).json(BACKEND_ERROR);
	}
}

const addService = async (req: Request, res: Response) => {
	try {
		const { data } = req.body;

		if (data === undefined) {
			return res.status(400).json(BAD_REQUEST);
		}

		const result = await Service.createOne(data);

		return res.json({ success: true, message: 'Success', data: result });
	} catch (e) {
		return res.status(500).json(BACKEND_ERROR);
	}
}

const editService = async (req: Request, res: Response) => {
	try {
		const { data } = req.body;

		if (data === undefined) {
			return res.status(400).json(BAD_REQUEST);
		}

		const result = await Service.updateOne(data);

		return res.json({ success: true, message: 'Success', data: result });
	} catch (e) {
		return res.status(500).json(BACKEND_ERROR);
	}
}

const deleteService = async (req: Request, res: Response) => {
	try {
		const { id } = req.body;

		if (id === undefined) {
			return res.status(400).json(BAD_REQUEST);
		}

		const result = await Service.deleteOne(id);

		return res.json({ success: true, message: 'Success', data: result });
	} catch (e) {
		return res.status(500).json(BACKEND_ERROR);
	}
}

export default {
	addService,
	getService,
	editService,
	deleteService
}


