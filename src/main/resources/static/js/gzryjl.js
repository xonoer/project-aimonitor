$(function() {
    clients = [{'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''},
        {'工作人员名称':'小武','工作编号':'01-1-1-2','进门时间':"2018-09-10 7:00",'出门时间':"2018-09-10 18:00",'备注':''}
    ];
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
            { name: "工作人员名称", type: "text", width: 100 },
            { name: "工作编号", type: "text", width: 100 },
            { name: "进门时间", type: "text", width: 100 },
            { name: "出门时间", type: "text", width: 100},
            { name: "备注", type: "text", sorting: true },
            { type: "control" }
        ]
    });

});