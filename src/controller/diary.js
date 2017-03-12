const DiaryModel = require('../model/diary');

function Diary(params) {
    this.params = params;
}

// 新增日记
Diary.prototype.add = function(callback) {
    const _self = this;

    let diaryDoc = new DiaryModel({
        title: _self.params.title,
        content: _self.params.content
    });

    diaryDoc.save((err, doc) => {
        if (err) {
            callback({
                success: false,
                errorMsg: '新增日记失败',
                errorCode: 100001,
                data: null
            });
            return;
        }

        callback({
            success: true,
            errorMsg: '新增日记成功',
            errorCode: 200,
            data: doc
        });
    });
};

// 修改日记
Diary.prototype.edit = function(callback) {
    const _self = this;

    DiaryModel.findById(_self.params.id, (err, doc) => {
        if (err) {
            callback({
                success: false,
                errorMsg: '日记修改失败',
                errorCode: 100002,
                data: null
            });
            return;
        }

        doc.title = _self.params.title;
        doc.content = _self.params.content;
        doc.save((err, doc) => {
            if (err) {
                callback({
                    success: false,
                    errorMsg: '日记修改失败',
                    errorCode: 100002,
                    data: null
                });
                return;
            }

            callback({
                success: true,
                errorMsg: '日记修改成功',
                errorCode: 200,
                data: {
                    id: doc._id,
                    title: doc.title,
                    content: doc.content
                }
            });
        });
    });
};

// 查询日记标题列表
Diary.prototype.queryTitleList = function(callback) {
    const _self = this;

    DiaryModel.find((err, docs) => {
        if (err) {
            callback({
                success: false,
                errorMsg: '查询日记标题列表失败',
                errorCode: 100001,
                data: null
            });
            return;
        }

        let titleList = [];
        for(let i=0; i<docs.length; i++){
            titleList.push({
                id: docs[i]._id,
                title: docs[i].title
            });
        }

        callback({
            success: true,
            errorMsg: '查询日记标题列表成功',
            errorCode: 200,
            data: titleList
        });
    });
};

// 按_id查询日记内容
Diary.prototype.queryById = function(callback) {
    const _self = this;

    DiaryModel.findById(_self.params.id,(err, doc) => {
        if (err) {
            callback({
                success: false,
                errorMsg: '查询日记内容失败',
                errorCode: 100001,
                data: null
            });
            return;
        }

        callback({
            success: true,
            errorMsg: '查询日记内容成功',
            errorCode: 200,
            data: {
                id: doc._id,
                title: doc.title,
                content: doc.content
            }
        });
    });
};

// 按_id删除日记
Diary.prototype.deleteById = function(callback) {
    const _self = this;

    DiaryModel.findById(_self.params.id,(err, doc) => {
        if (err) {
            callback({
                success: false,
                errorMsg: '日记删除失败',
                errorCode: 100001,
                data: null
            });
            return;
        }

        doc.remove((err) => {
            if (err) {
                callback({
                    success: false,
                    errorMsg: '日记删除失败',
                    errorCode: 100001,
                    data: null
                });
                return;
            }

            callback({
                success: true,
                errorMsg: '日记删除成功',
                errorCode: 200,
                data: {
                    id: doc._id,
                }
            });
        });
    });
};

module.exports = Diary;
