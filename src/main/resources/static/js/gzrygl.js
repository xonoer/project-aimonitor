$(function() {
    clients = [{'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''},
       {'工作编号':'1012334','姓名':'小王','联系方式':'15158008135','注册时间':'2017/08/26','工作类型':'巡逻','工作评价':'非常好','备注':''}
    ];
    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        // controller: db,
        data:clients,
        fields: [
            { name: "工作编号", type: "text", width: 100 },
            { name: "姓名", type: "text", width: 100 },
            { name: "联系方式", type: "text", width: 100 },
            { name: "注册时间", type: "text", width: 100 },
            { name: "工作类型", type: "text", width: 100 },
            { name: "工作评价", type: "text", width: 100 },
            { name: "备注", type: "text", sorting: true },
            { type: "control" }
        ]
    });

});