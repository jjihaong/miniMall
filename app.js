//app.js
App({
  onLaunch: function (options) {
    console.log('onLaunch')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code){
          // wx.request({
          //   url: "https://api.weixin.qq.com/sns/jscode2session?appid="+this.globalData.APPID+"&secret="+this.globalData.SECRET+"&js_code="+res.code+"&grant_type=authorization_code",
          //   success:function(res){
          //   },
          //   fail:function(){
              
          //   }
          // })
        }
      }
    })
    wx.getSetting({
      withSubscriptions: true,
      success:(res)=>{
        console.log(res)
        if(res.authSetting['scope.userInfo']){
          console.log(res,res.authSetting['scope.userInfo'])
          //判断用户是否已经授权 
          // 已经授权则去首页，否则去授权页
          wx.getUserInfo({
            lang: 'en',
            success(res){
              if(res.userInfo){
                getApp().globalData.userInfo = res.userInfo;
              }
            }
          })
          wx.switchTab({
            url: '/pages/index/index'
          })
        }else{
          wx.redirectTo({
            url: '../home/home',
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    APPID:'wx84faffe239320222',
    SECRET:'569836566579cf11392fe5c9a7b30919'
  }
})