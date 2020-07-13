//Page Object
Page({
    data: {
        
    },
    //options(Object)
    onLoad: function(options){
        console.log('login load')
    },
    onReady: function(){
        console.log('login ready')
    },
    onShow: function(){
        console.log('login show')
    },
    onHide: function(){
        console.log('login hide')
    },
    onUnload: function(){
        console.log('login unload')
    },
    navi(){
        wx.navigateTo({
            url: '/index/index',
            success: (result)=>{
                console.log('from login navi to index succ')
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
});