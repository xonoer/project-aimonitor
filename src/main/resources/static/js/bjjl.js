$(function() {
    clients = [{'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':4,'报警时间':'2018-02-26 18:00','报警原因':2,'结果':1,'备注':''},
      {'报警位置':20,'报警时间':'2018-02-26 18:00','报警原因':3,'结果':1,'备注':''},
      {'报警位置':17,'报警时间':'2018-02-26 18:00','报警原因':3,'结果':1,'备注':''},
      {'报警位置':15,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':1,'备注':''},
      {'报警位置':13,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':1,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':5,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':6,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':9,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''},
      {'报警位置':2,'报警时间':'2018-02-26 18:00','报警原因':1,'结果':2,'备注':''}
    ];
    var location = [
        {name:'',Id:0},
        {name:'东大门',Id:1},
        {name:'南大门',Id:2},
        {name:'西大门',Id:3},
        {name:'北大门',Id:4},
        {name:'1栋',Id:5},
        {name:'2栋',Id:6},
        {name:'3栋',Id:7},
        {name:'4栋',Id:8},
        {name:'5栋',Id:9},
        {name:'6栋',Id:10},
        {name:'7栋',Id:11},
        {name:'8栋',Id:12},
        {name:'9栋',Id:13},
        {name:'10栋',Id:14},
        {name:'11栋',Id:15},
        {name:'12栋',Id:16},
        {name:'13栋',Id:17},
        {name:'14栋',Id:18},
        {name:'15栋',Id:19},
        {name:'16栋',Id:20}
    ]
    var reason = [
        {name:'',Id: 0 },
        {name:'非法闯入',Id: 1 },
        {name:'门未关闭',Id: 2 },
        {name:'恶意毁坏',Id: 3 }
    ]
    var result = [
        {name:'',Id:0},
        {name:'已解决',Id:1},
        {name:'未解决',Id:2}
    ]
    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        // filtering: true,
        editing: true,
        // inserting: true,
        // sorting: true,
        paging: true,
        confirmDeleting: false,
        autoload: true,
        pageSize: 17,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        // controller: db,
        data:clients,
        fields: [
            { name: "报警位置", type: "select", items: location, valueField: "Id", textField: "name"},
            { name: "报警时间", type: "text", width: 100 },
            { name: "报警原因", type: "select", items: reason, valueField: "Id", textField: "name" },
            { name: "结果", type: "select", items: result, valueField: "Id", textField: "name" },
            { name: "备注", type: "text", sorting: true },
            { type: "control" }
        ]
    });

});