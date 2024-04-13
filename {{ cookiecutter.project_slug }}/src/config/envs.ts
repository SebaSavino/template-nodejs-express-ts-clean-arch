import { get } from 'env-var'
import 'dotenv/config'


export const envs = {
    NODE_ENV: get('NODE_ENV').default('dev').asEnum(['dev', 'prod']),
    MONGODB_URI: get('MONGODB_URI').required().asString(),
    PORT: get('PORT').default(8000).asPortNumber(),
    API_KEY: get('API_KEY').required().asString()
}
