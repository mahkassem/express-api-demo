import { Request, Response } from "express";
import { User, UsersModel } from "../models/users.model";

export class UsersController {
	static async getAll(req: Request, res: Response): Promise<void> {
		try {
			const users = await UsersModel.findAll();
			res.send(users);
		} catch (err: any) {
			res.status(500).send(err.message);
		}
	}

	static async getOne(req: Request, res: Response): Promise<void> {
		try {
			const user = await UsersModel.find(Number(req.params.id));
			res.send(user);
		} catch (err: any) {
			res.status(500).send(err.message);
		}
	}

	static async create(req: Request, res: Response): Promise<void> {
		try {
			const user = await UsersModel.create(req.body);
			res.send(user);
		} catch (err: any) {
			res.status(500).send(err.message);
		}
	}
}
