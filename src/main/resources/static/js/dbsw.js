$(function() {
    clients = [{'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},
        {'管理处':1,'房间编号':'01-1-1-2','客户名称':'王二麻子','客户属性':'业主','固定电话':1,'移动电话':'14717771796','身份证号':'370882196908102828','接房日期':'2017-10-19','入住日期':'2017-01-01','收费开始日期':'2017-01-01','收费结束日期':'2018-12-31'},

    ];
    var guanli = [
        {name:'',Id: 0 },
        {name:'新天泽国际',Id: 1 },
        {name:'阳光花园',Id: 2 },
        {name:'紫金',Id: 3 },
        {name:'世纪天城',Id: 4 },
        {name:'岳泰',Id: 5 },
        {name:'千岛人家',Id: 6 },
        {name:'海明饭店',Id: 7 }
    ]
    var type = [
        {name:'',Id:0},
        {name:'1级',Id:1},
        {name:'2级',Id:2},
        {name:'3级',Id:3},
        {name:'4级',Id:4}
    ]
    $("#jsGrid1").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 5,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        // controller: db,
        data:clients,
        fields: [
            { name: "管理处", type: "select", items: guanli, valueField: "Id", textField: "name" },
            { name: "房间编号", type: "text", width: 100 },
            { name: "客户名称", type: "text", width: 100 },
            { name: "客户属性", type: "text", width: 50},
            { name: "固定电话", type: "select", items: type, valueField: "Id", textField: "name",width:50 },
            { name: "移动电话", type: "text", width : 100 },
            { name: "身份证号", type: "text", width : 200 },
            { name: "接房日期", type: "text", width : 100 },
            { name: "入住日期", type: "text", width : 100 },
            { name: "收费开始日期", type: "text", width : 100 },
            { name: "收费结束日期", type: "text", width : 100 },
            { type: "control" }
        ]
    });

    clients2 = [{'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},
        {'管理处':1,'区域':'四区','车位编号':'001','状态':'在用','房间编号':'1A-201','合同起始日期':'2018-03-02','合同结束日期':'2018-03-28','联系人姓名':'张三','联系人电话':'18193606853','车牌号':'甘GC5555','备注':''},

    ];
    var guanli2 = [
        {name:'',Id: 0 },
        {name:'新天泽国际',Id: 1 },
        {name:'阳光花园',Id: 2 },
        {name:'紫金',Id: 3 },
        {name:'世纪天城',Id: 4 },
        {name:'岳泰',Id: 5 },
        {name:'千岛人家',Id: 6 },
        {name:'海明饭店',Id: 7 }
    ]
    var type2 = [
        {name:'',Id:0},
        {name:'1级',Id:1},
        {name:'2级',Id:2},
        {name:'3级',Id:3},
        {name:'4级',Id:4}
    ]
    $("#jsGrid2").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 5,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        // controller: db,
        data:clients2,
        fields: [
            { name: "管理处", type: "select", items: guanli2, valueField: "Id", textField: "name" },
            { name: "区域", type: "text", width: 100 },
            { name: "车位编号", type: "text", width: 100 },
            { name: "状态", type: "text", width: 50},
            { name: "房间编号", type: "select", items: type2, valueField: "Id", textField: "name",width:50 },
            { name: "合同起始日期", type: "text", width : 100 },
            { name: "合同结束日期", type: "text", width : 200 },
            { name: "联系人姓名", type: "text", width : 100 },
            { name: "联系人电话", type: "text", width : 100 },
            { name: "车牌号", type: "text", width : 100 },
            { name: "备注", type: "text", width : 100 },
            { type: "control" }
        ]
    });
});