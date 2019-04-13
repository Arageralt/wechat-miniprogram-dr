// pages/index3/index3.js
Page({
  mapyiyuan: function (e) {
    wx.navigateTo({
      url: '../maptry/maptry'
    })
  },
  gonggaoxx: function (e) {
    wx.navigateTo({
      url: '../gonggaoxx/gonggaoxx'
    })
  },
  lxwm: function (e) {
    wx.navigateTo({
      url: '../lxwm/lxwm'
    })
  },
  version: function (e) {
    wx.navigateTo({
      url: '../version-detail/version-detail'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  login:function(e){
    wx.showToast({
      title: '正在登录',
      icon: 'loading',
      duration: 3000,
    })
   //网络请球开始
   wx.request({
     url: '',
   })
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