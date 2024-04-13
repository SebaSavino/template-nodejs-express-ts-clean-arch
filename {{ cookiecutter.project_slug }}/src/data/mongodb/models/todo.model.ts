import mongoose, { Schema } from "mongoose"


const todoSchema = new Schema(
    {
        title: {
            required: true,
            unique: true,
            type: String
        },
        completed: {
            required: true,
            default: false,
            type: Boolean
        }
    },
    {
        timestamps: true
    }
)

export const TodoModel = mongoose.model("Todo", todoSchema)
