const app = getApp()

Page({
  data: {
    list: ['hh1','hh2','hh3','hh4']
  },
  onLoad: function () {
    console.log('index load')
  },
  onShow: function () {
    console.log('index show')
  },
  onReady: function () {
    console.log('index ready')
  },
  onHide: function () {
    console.log('index hide')
  },
  onUnload: function () {
    console.log('index unload')
  },
  add(){
    this.setData({
      list: ['iiii1','iiii2','iiii3','iiii4', 'iiii5']
    })
  },
  del(){
    this.setData({
      list: ['iiii1','iiii2']
    })
  },
  navi(){
    var curPages =  getCurrentPages();
    console.log('curPages =====>   ', curPages)    
    wx.navigateTo({
      url: '/user/index',
      success: (result)=>{
        console.log('navigator success')
      },
      fail: (e)=>{
        console.log(e)
      },
    });
  },
  naviLogin(){
    var curPages =  getCurrentPages();
    console.log('curPages =====>   ', curPages)    
    wx.navigateTo({
      url: '/login/index',
      success: (result)=>{
        console.log('navigator to login success')
      },
      fail: (e)=>{
        console.log(e)
      },
    });
  },
  redirect(){
    wx.redirectTo({
      url: '/user/index',
      success: (result)=>{
        console.log('redirect success')
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  reLaunch(){
    wx.reLaunch({
      url: '/user/index',
      success: (result)=>{
        console.log('relaunch success')
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})
