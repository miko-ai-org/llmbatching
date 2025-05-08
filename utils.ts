import express from "express";

function getAndAssertCorrectVersion(req: express.Request, allowedVersions: string[]): string {
    let version = req.params.version;
    if (!version) {
        throw {
            status: 400,
            message: 'Missing version parameter in path'
        };
    }
    if (!allowedVersions.includes(version)) {
        throw {
            status: 400,
            message: 'version parameter must be one of the allowed versions: ' + allowedVersions.join(', ')
        };
    }
    return version;
}

export function apiHandler(handler: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>, requireAuth: boolean) {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            let authHeader = req.headers['authorization'];
            if (!authHeader && requireAuth) {
                throw {
                    status: 401,
                    message: 'Missing authorization header. Please pass an authorization bearer token in the header.'
                };
            }
            if (authHeader) {
                const token = authHeader.split(' ')[1];
                if (token !== process.env.API_KEY) {
                    throw {
                        status: 401,
                        message: 'Invalid authorization token. Please pass a valid authorization bearer token in the header.'
                    };
                }
            }
            await handler(req, res, next);
        } catch (e) {
            next(e);
        }
    }
}