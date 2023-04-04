import { Profile, IProfile } from '../models/profile'

const findOneByID = async (_id: any) => {
    const result: IProfile = await Profile.findOne({
        _id: _id
    })
    return result
}

const findOneByUserID = async (_userId: any) => {
    console.log('userId a', _userId);
    const result: IProfile = await Profile.findOne({
        userId: _userId
    })
    return result;
}

const createOne = async (data: any) => {
    const result: IProfile = await Profile.create(data)
    console.log('create result', result);
    return result
}

const updateOne = async (data: any) => {
    const filter = { userId: data.userId }
    console.log('data', data);
    const result: IProfile = await Profile.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteOne = async (_id: any) => {
    const result = await Profile.deleteOne({
        _id: _id
    })
    return result
}

export default {
    findOneByID,
    findOneByUserID,
    createOne,
    updateOne,
    deleteOne
}