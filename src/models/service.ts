import { model, Schema, Document } from 'mongoose';

interface IService extends Document {
    serviceDescription: string,
    servicePrice: number,
    durartion: number,
    sectionId: string,
    categoryNo: string
}

const ServiceSchema: Schema = new Schema({
    serviceDescription: {
        type: String,
        required: true,
    },
    servicePrice: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: false
    },
    sectionId: {
        type: Number,
        required: false
    },
    categoryNo: {
        type: String,
        required: false
    }
})

const Service = model<IService>('Service', ServiceSchema);

export {Service, IService}