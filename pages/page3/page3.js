// pages/personinfo/personinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    nickName : "",
    avatarUrl : "",
    gender : "",
    province : "",
    city : "",
    country : ""
  },

  showUserInfoTap:function(){
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        
        var userInfo = res.userInfo
        console.log(userInfo);
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender  //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        if(gender==1){
          gender = '男'
        }else if(gender==2){
          gender='女'
        }else{
          gender = '未知'
        }
        that.setData({
          nickName : nickName,
          avatarUrl : avatarUrl,
          gender : gender,
          country : country,
          province : province
        })
      }
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
  onShow() {
    this.setData({ active: 2 });
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

  },
  onTabBarChange(event) {
   
    switch (event.detail) {
      case 0:
        wx.navigateTo({ url: '/pages/home/home' });
        break;
      case 1:
        wx.navigateTo({ url: '/pages/page2/page2' });
        break;
      case 2:
        wx.navigateTo({ url: '/pages/page3/page3' });
        break;
    }
  },

  navigateToPage1() {
    wx.navigateTo({ url: '/pages/home/home' });
  },

  navigateToPage2() {
    wx.navigateTo({ url: '/pages/page2/page2' });
  },

  navigateToPage3() {
    wx.navigateTo({ url: '/pages/page3/page3' });
  },
})