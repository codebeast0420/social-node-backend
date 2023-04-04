import { model, Schema, Document } from 'mongoose';

interface IProfile extends Document {
	description: string,
	address: string,
	avatarUrl: string,
	serviceId: string,  //only professional
	userId: string
}

const ProfileSchema: Schema = new Schema({
	description: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	avatarUrl: {
		type: String,
		required: true
	},
	serviceId: {    // only professional
		type: String,
		// required: true
	},
	userId: {
		type: String,
		required: true
	}
})

const Profile = model<IProfile>('Profile', ProfileSchema);

export { Profile, IProfile }