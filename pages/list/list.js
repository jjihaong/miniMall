// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        id:'friut',
        name:'水果'
      },
      {
        id:'vagetable',
        name:'蔬菜'
      },
      {
        id:'rice',
        name:'粗粮'
      }
    ],
    listMain:[
      {id:'friut',info:'this is friut area',prev:'/images/c1.png'},
      {id:'vagetable',info:'this is vagetable area',prev:'/images/c1.png'},
      {id:'rice',info:'this is rice area',prev:'/images/c1.png'}
    ],
    curIndex:0,
    toView:'friut',
    isScroll:false
  },
  switchItem(e){
    console.log(e)
    const $this = this;
    this.setData({
      isScroll:true
     }) 
    setTimeout(function(){
      $this.setData({
        toView: e.currentTarget.dataset.id,
        curIndex : e.currentTarget.dataset.index
      })
   },0)
    setTimeout(function(){
       $this.setData({
        isScroll:false
       }) 
    },1)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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