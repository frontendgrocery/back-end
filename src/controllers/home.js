import { get } from '../utils/request';
import filter from '../utils/filter';
import mysql from '../utils/mysql';
import url from '../config/url';

const getArticleList = async (ctx) => {

    const data = {
        src: 'web',
        category: '5562b415e4b00c57d9b94ac8',
        limit: 2,
    }

    try {
        const res = await get(url.getArticleList, data);
        const {
            entrylist
        } = res;

        ctx.state.data = {
            list: await getArticle(entrylist)
        };
    } catch(err) {
        console.log(err);
    }
}


const saveArticle = async (entrylist) => {
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
               user
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
               channel: '掘金'
           }

           try {
                const selectResult = await mysql('articles').select().where('object_id', objectId);
                if (selectResult.length === 0) {
                    await mysql('articles').insert(itemInfo);
                }
           } catch (err) {
                console.log(err);
           }
       })
}

const getArticle = async (entrylist) => {
    try {
        await saveArticle(entrylist);

        return await mysql('articles').select('*');
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getArticleList
}