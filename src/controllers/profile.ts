import { Request, Response } from 'express'
import { BAD_REQUEST, BACKEND_ERROR } from '../config'
import profileService from '../services/profile'

const getProfile = async (req: Request, res: Response) => {
    const { id } = req.params;
    try{
        if(id === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = profileService.findOneByID(id);   
        return res.json({ success: true, message: 'Success', data: result }); 
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const getProfileByUserId = async(req: Request, res: Response) => {
    const { userId } = req.params;
    try{
        if(userId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = profileService.findOneByUserID(userId); 
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const addProfile = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await profileService.createOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const editProfile = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await profileService.updateOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const deleteProfile = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;

        if (id === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        
        const result = await profileService.deleteOne(id);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

export default {
    getProfileByUserId,
    addProfile,
    getProfile,
    editProfile,
    deleteProfile
}

