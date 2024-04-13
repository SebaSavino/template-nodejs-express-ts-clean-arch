import { runServer } from "./presentation"
import { envs, logger } from "./config"


async function main() {
    await runServer()
    logger.info(`Server running on port ${envs.PORT}`)
}

main()
