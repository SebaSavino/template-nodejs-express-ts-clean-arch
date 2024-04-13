import mongoose from "mongoose"

import { envs, logger } from "../../config"


export async function ConnectMongoDB() {
    try {
        const { connection } = await mongoose.connect(envs.MONGODB_URI)
        logger.info(`${connection.name} database connected`)
    } catch (error) {
        logger.error(error)
        process.exit(1)
    }
}
