import {
    get
} from '../utils/request';
import filter from '../utils/filter';
import mysql from '../utils/mysql';
import url from '../config/url';

/**
 * 获取渠道列表
 * @param {*} ctx 
 */
const getChannelList = async (ctx) => {
    try {
        const channelList = await mysql('channels').select();
        ctx.state.data = {
            channelList
        }
    } catch (err) {
        console.log(err);
    }
}

/**
 * 获取文章列表
 * @param {*} ctx 
 */

const getArticleList = async (ctx) => {
    try {
        const { channelId } = ctx.request.query;
        let res;
        res = await getJuejinrticleList(channelId);

        ctx.state.data = {
            list: res
        }
    } catch(err) {
        console.log(err);
    }
}

/**
 * 获取阅读数高的文章
 * @param {*}  
 */
const getFavorateList = async (ctx) => {
    try {
        const favorateList = await mysql('articles')
            .select()
            .orderBy('hot_index', 'desc')
            .limit(3)
        ctx.state.data = {
            list: favorateList
        }
    } catch(err) {
        console.log(err);
    }
}



/**
 * 获取掘金文章列表
 * @param {*} channelId 
 */
const getJuejinrticleList = async (channelId) => {
    try {
        const data = {
            src: 'web',
            category: '5562b415e4b00c57d9b94ac8',
            limit: 2,
        }
        const res = await get(url.getArticleList, data);
        const {
            entrylist
        } = res;

        return await getArticle(entrylist, channelId);
    } catch(err) {
        console.log(err);
    }
}
/**
 * 入库
 * @param {*} ctx 
 */
const saveArticle = async (entrylist, channelId) => {
    const channelConf = ['掘金', '思否'];
    entrylist.map(async (item, index) => {
        const {
            collectionCount,
            commentsCount,
            hot,
            title,
            screenshot,
            isCollected,
            summaryInfo,
            viewsCount,
            content,
            hotIndex,
            type,
            originalUrl,
            tags,
            checkStatus,
            objectId,
            user,
        } = item;

        const tag = filter.join(tags, 'title', ' / ');

        const itemInfo = {
            title,
            screenshot,
            content,
            type,
            tag,
            collection_count: collectionCount,
            comments_count: commentsCount,
            hot: hot ? 0 : 1,
            hot_index: hotIndex,
            collected: isCollected ? 0 : 1,
            summary: summaryInfo,
            views_count: viewsCount,
            original_url: originalUrl,
            check_status: checkStatus ? 0 : 1,
            object_id: objectId,
            user_info: JSON.stringify(user),
            channel: channelConf[channelId - 1]
        }

        try {
            const selectResult = await mysql('articles').select().where('object_id', objectId);

            if (selectResult.length === 0) {
                await mysql('articles').insert(itemInfo);
            }
        } catch(err) {
            console.log(err);
        }
    })
}

/**
 * 获取文章
 * @param {*} ctx 
 */
const getArticle = async (entrylist, channelId) => {
    try {
        await saveArticle(entrylist, channelId);

        return await mysql('articles')
            .select()
            .orderBy('id', 'desc')
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getChannelList,
    getArticleList,
    getFavorateList
}

