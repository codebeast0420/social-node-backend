import { Profile, IProfile } from '../models/profile'

const findOneByID = async (_id: any) => {
    const result: IProfile = await Profile.findOne({
        _id: _id
    })
    return result
}

const findOneByUserID = async (_userId: any) => {
    const result: IProfile = await Profile.findOne({
        userId: _userId
    })
    return result
}

const createOne = async (data: any) => {
    const result: IProfile = await Profile.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
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