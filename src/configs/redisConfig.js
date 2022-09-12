import redis from 'redis'
import { reportServicee } from '../services/reportService'

(async () => {
    let client = redis.createClient(6379)
    client.on('error', (error) => {
        console.log('Error', error)
    })
    await client.connect()
})

export const cache = ((req, res) => {
    const redisKey = '7/9'
    let result
    let isCached = false
    try {
        const cacheResults = client.get(redisKey)
        if (redisKey) {
            isCached = true
            result = JSON.parse(cacheResults)
        } else {
            result = reportServicee(redisKey)
            client.set(redisKey, JSON.stringify(result))
        }
        res.send({
            fromCache: isCached,
            data: result
        })
    } catch (error) {
        res.send(error)
    }
})


