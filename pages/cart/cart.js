// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[
      {id:1,title:'新鲜芹菜 半斤',image:'/images/s5.png',num:4,price:0.01,selected:true},
        {id:2,title:'素米 500g',image:'/images/s6.png',num:1,price:0.03,selected:true},
        {id:1,title:'新鲜芹菜 半斤',image:'/images/s5.png',num:4,price:0.01,selected:true},
        {id:2,title:'素米 500g',image:'/images/s6.png',num:1,price:0.03,selected:true},
        {id:1,title:'新鲜芹菜 半斤',image:'/images/s5.png',num:4,price:0.01,selected:true},
        {id:2,title:'素米 500g',image:'/images/s6.png',num:1,price:0.03,selected:true},
        {id:1,title:'新鲜芹菜 半斤',image:'/images/s5.png',num:4,price:0.01,selected:true},
        {id:2,title:'素米 500g',image:'/images/s6.png',num:1,price:0.03,selected:true}
    ],
    total:''
  },
  countDown(e){
    let $index = e.target.dataset.index;
    let cart = this.data.carts;
    cart[$index].num-->0?
    this.setData({
      carts:cart
    }):'';
    this.price();
  },
  countAdd(e){
    let $index = e.target.dataset.index;
    let cart = this.data.carts;
    cart[$index].num++>0?
    this.setData({
      carts:cart
    }):'';
    this.price();
  },
  delete(e){
    let $index = e.target.dataset.index;
    let cart = this.data.carts;
    cart.splice($index,1);
    this.setData({
      carts:cart
    })
    this.price();
  },
  price(){
    let carts = this.data.carts;
    let totalPrice = 0;
    for(let item of carts){
      console.log(item)
      totalPrice += item.price*item.num
    }
    this.setData({
      total:totalPrice.toFixed(2)
    })
    console.log(totalPrice)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad',this.delete);
    this.price()
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
    console.log('onShow')
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