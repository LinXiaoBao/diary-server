const Diary = require('./controller/diary');

module.exports = (app) => {
    // 新增日记
    app.post('/diary/add', (req, res) => {
        var diary = new Diary(req.body);
        diary.add((data) => {
            res.json(data);
            res.end();
        });
    });

    // 修改日记
    app.post('/diary/edit', (req, res) => {
        var diary = new Diary(req.body);
        diary.edit((data) => {
            res.json(data);
            res.end();
        });
    });

    // 按_id删除日记
    app.post('/diary/deleteById', (req, res) => {
        var diary = new Diary(req.body);
        diary.deleteById((data) => {
            res.json(data);
            res.end();
        });
    });

    // 查询日记标题列表
    app.post('/diary/queryTitleList', (req, res) => {
        var diary = new Diary(req.body);
        diary.queryTitleList((data) => {
            res.json(data);
            res.end();
        });
    });
    // 按_id查询日记内容
    app.post('/diary/queryById', (req, res) => {
        var diary = new Diary(req.body);
        diary.queryById((data) => {
            res.json(data);
            res.end();
        });
    });
};
