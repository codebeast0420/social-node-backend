import { Service, IService } from '../models/service'

const findOneByID = async (_id: any) => {
    const result: IService = await Service.findOne({
        _id: _id
    })
    return result
}

const createOne = async (data: any) => {
    const result: IService = await Service.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IService = await Service.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteOne = async (_id: any) => {
    const result = await Service.deleteOne({
        _id: _id
    })
    return result
}

export default {
    findOneByID,
    createOne,
    updateOne,
    deleteOne
}
