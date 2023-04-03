import { User, IUser } from '../models/user'
import nodemailer from 'nodemailer';

interface MailData {
    recipient: string;
    subject: string;
    text: string;
}

const sendVerificationMail = async(to: string, code: string) => {
    const mailOptions: MailData = {
      recipient: to,
      subject: 'Verification code for your account',
      text: `Your verification code is: ${code}`
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mantadreamer07@gmail.com',
          pass: 'ZXASqw12'
        }
    });
    
    const res = await transporter.sendMail(mailOptions); 
}

const findOneByID = async (_id: any) => {
    const result: IUser = await User.findOne({
        _id: _id
    })
    return result
}

const findByEmailAndPass = async(email: any, password: any) => {
    const result: IUser[] = await User.find({
        email: email,
        password: password
    })
    return result;
}

const findByFilter = async (filter: any) => {
    const total = await User.count({
        $or: [
            { key: { $regex: `.*${filter.searchValue}.*` } },
            { value: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })

    const rows: IUser[] = await User.find({
        $or: [
            { key: { $regex: `.*${filter.searchValue}.*` } },
            { value: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })
        .sort({
            [filter.column]: filter.direction === "asc" ? 1 : -1
        })
        .limit(filter.rowsPerPage)
        .skip((filter.currentPage - 1) * filter.rowsPerPage)
    return { rows, total }
}

const findAll = async () => {
    const result: IUser[] = await User.find({})
    return result
}

const createOne = async (data: any) => {
    console.log("serviceData", data);
    const result: IUser = await User.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IUser = await User.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteAll = async () => {
    const result = await User.deleteMany({})
    return result
}

const deleteOne = async (_id: any) => {
    const result = await User.deleteOne({
        _id: _id
    })
    return result
}

export default {
    sendVerificationMail,
    findOneByID,
    findByEmailAndPass,
    findByFilter,
    findAll,
    createOne,
    updateOne,
    deleteOne,
    deleteAll
}