// component/pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:false,
    goods:[
      {id:1,title:'新鲜芹菜 半斤',image:'/images/s5.png',num:4,price:0.01,selected:true},
        {id:2,title:'素米 500g',image:'/images/s6.png',num:1,price:0.03,selected:true},
    ],
    totalPrice:0
  },
  // 计算价格
  countPrice(){
    let goodList = this.data.goods;
    let total=0
    for(let item of goodList){
      total += item.price*item.num
    }
    this.setData({
      totalPrice:total.toFixed(2)
    })
  },
  // 付款
  pay(){
    wx.showModal({
      title:'提示',
      content:'暂时无法付款，请联系管理员',
      complete(){
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countPrice()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})