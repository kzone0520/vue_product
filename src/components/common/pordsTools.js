
// 将对localStorage的操作封装(不同的api函数内部逻辑有所不同)
var pordsTools = {};
pordsTools.save = function(pordObj,num){
    let storage = localStorage;
    // 从本地中获取信息或者为空对象
    let obj = JSON.parse(storage.getItem('pords') || '{}');
    // 判断这个分类是否存在 （存储分类是为了在购物车里方便获取商品）
    if (obj && Object.keys(obj).indexOf(String(pordObj.type)) >= 0 ){
        // 判断song_id这个key是否存在
        if (Object.keys(obj[pordObj.type]).indexOf(String(pordObj.song_id)) >= 0){
            obj[pordObj.type][pordObj.song_id] += num;
        } else {
            obj[pordObj.type][pordObj.song_id] = num;
        }
    } else {
        obj[pordObj.type] = {};
        obj[pordObj.type][pordObj.song_id] = num;
    }
    storage.setItem('pords', JSON.stringify(obj));  
};

pordsTools.del = function(pordObj){
    let storage = localStorage;
    let obj = JSON.parse(storage.getItem('pords') || '{}');
    // 根据song_id删除数据
    delete obj[pordObj.type][pordObj.song_id];
    // 如果类别type中已经没有数据，删除这个type
    if ( Object.keys(obj[pordObj.type]).length === 0){
        delete obj[pordObj.type];
    }
    // 别更新之前的数据
    storage.setItem('pords', JSON.stringify(obj));  
}

export default pordsTools;