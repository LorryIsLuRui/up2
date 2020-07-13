//Page Object
Page({
    data: {
        
    },
    //options(Object)
    onLoad: function(options){
        console.log('user load')
    },
    onReady: function(){
        console.log('user ready')
    },
    onShow: function(){
        console.log('user show')
    },
    onHide: function(){
        console.log('user hide')
    },
    onUnload: function(){
        console.log('user unload')
    },
    back(){
        wx.navigateBack({
            delta: 1
        });
    },
    navi(){
        wx.navigateTo({
            url: '/index/index',
            success: (result)=>{
                console.log('from user navi to index')
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
});