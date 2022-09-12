import cron from 'node-cron'
import { reportServicee } from './reportService'

export const scheduleService = new cron.CronJob({
    cronTime: '0 1 0 * * *',
    onTick: () => {
        reportServicee()
        console.log('Cronjob running...')
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
})

scheduleService.start()

