import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient({
    transactionOptions: {
        timeout: 60_000, // 30 sec
        maxWait: 60_000  // 60 sec
    },
    log: ['info'],
});

export default prisma;