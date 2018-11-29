import mysql from '../utils/mysql';
import Util from '../utils/util';
import {
    get
} from '../utils/request';
import url from '../config/url';

const getDetail = async (ctx) => {
    const {
        id
    } = ctx.request.query;

    const selectResult = await mysql('articles')
                                .select().where('object_id', id)
                                .first()
    const {
        type,
        original_url
    } = selectResult;

    const postId = Util.spliteUrl(original_url).split('/').slice(-1)[0];
    
    const articleId = type === 'post' ? postId : id;

    const params = {
        src: 'web',
        postId: articleId
    }

    // 文章信息
    const entryParams = {
        src: 'web',
        postId: articleId,
        type: 'entry'
    }
    // 文章详情
    const entryViewParams = {
        src: 'web',
        postId: articleId,
        type: 'entryView'
    }

    const entryViewInfo = await get(url.getArticcleDetail, entryViewParams);
    const entryInfo = await get(url.getArticcleDetail, entryParams);
    
    ctx.state.data = {
        detail: {
            entryInfo,
            entryViewInfo
        }
    }
}


module.exports = {
    getDetail
}