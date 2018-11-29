export default class Util {
    static spliteUrl(url) {
        if (!url) {
            return;
        }

        var arrUrl = url.split('//');
        var start = arrUrl[1].indexOf('/') + 1;
        var relUrl = arrUrl[1].substring(start);
        if (relUrl.indexOf('?') != -1) {
            relUrl = relUrl.split('?')[0];
        }
        return relUrl;
    }
}