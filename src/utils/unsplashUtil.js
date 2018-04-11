import unsplash from 'unsplash-js/native';
import env from '../../env';

export const createUnsplash = () => new unsplash({
    applicationId: env.accessKey,
    secret: env.secretKey,
    callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
    bearerToken: env.accessToken,
});