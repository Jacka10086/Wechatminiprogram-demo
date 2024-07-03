Page({
  data: {
    active: 2,
    nickName: "",
    avatarUrl: "",
    gender: "",
    province: "",
    city: "",
    country: ""
  },

  // 自动获取用户信息
  onLoad: function (options) {
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
        if (gender == 1) {
          gender = '男'
        } else if (gender == 2) {
          gender = '女'
        } else {
          gender = '未知'
        }
        that.setData({
          nickName: nickName,
          avatarUrl: avatarUrl,
          gender: gender,
          country: country,
          province: province
        })
      }
    })
  },

  onShow() {
    this.setData({ active: 2 });
  },

  onTabBarChange(event) {
    this.setData({ active: event.detail });
    switch (event.detail) {
      case 0:
        wx.redirectTo({ url: '/pages/home/home' });
        break;
      case 1:
        wx.redirectTo({ url: '/pages/page2/page2' });
        break;
      case 2:
        wx.redirectTo({ url: '/pages/page3/page3' });
        break;
    }
  },

  navigateToPage1() {
    wx.redirectTo({ url: '/pages/home/home' });
  },

  navigateToPage2() {
    wx.redirectTo({ url: '/pages/page2/page2' });
  },

  navigateToPage3() {
    wx.redirectTo({ url: '/pages/page3/page3' });
  }
});
