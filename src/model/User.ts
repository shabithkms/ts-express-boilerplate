import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String },
        email: { type: String },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
)

export default model<IUser>('User', UserSchema)
