import cron from 'node-cron';
import { logError, logInfo } from '../logger';
import { processOpenaiBatching } from './openaiBatching';

// Configure cron to use IST timezone
const cronOptions = {
    scheduled: true,
    timezone: "Asia/Kolkata"
};

export function startCronJobs() {
    async function cronWrapper(funName: string, f: () => Promise<void>) {
        try {
            logInfo(`Starting cron job: ${funName}`);
            await f();
            logInfo(`Cron job: ${funName} completed`);
        } catch (error) {
            logError(error);
            logError(`Cron job: ${funName} failed`);
        }
    }

    cron.schedule('*/30 * * * * *', () => cronWrapper("processOpenaiBatching", processOpenaiBatching), cronOptions);
}