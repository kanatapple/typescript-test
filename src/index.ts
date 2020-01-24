import * as normalizeUrl from 'normalize-url';

normalizeUrl('https://www.google.co.jp', {
    normalizeProtocol: false,
    stripFragment: false,
    stripWWW: false,
    removeQueryParameters: false,
    removeTrailingSlash: true,
});
