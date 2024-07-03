Page({
  data: {
    active: 2,
    nickName: "",
    avatarUrl: "",
    gender: "",
    province: "",
    city: "",
    country: "",
    showEditSheet: false,
    actions: [{ name: '保存', color: '#07c160' }],
    editNickName: '',
    editGender: '',
    editProvince: '',
    editCity: ''
  },

  onLoad: function(options) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);

        var userInfo = res.userInfo;
        console.log(userInfo);
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gender = userInfo.gender; // 性别 0：未知、1：男、2：女
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;
        if (gender == 1) {
          gender = '男';
        } else if (gender == 2) {
          gender = '女';
        } else {
          gender = '未知';
        }
        that.setData({
          nickName: nickName,
          avatarUrl: avatarUrl,
          gender: gender,
          country: country,
          province: province,
          city: city,
          editNickName: nickName,
          editGender: gender,
          editProvince: province,
          editCity: city
        });
      }
    });
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
  },

  onEditTap() {
    this.setData({ showEditSheet: true });
  },

  onClose() {
    this.setData({ showEditSheet: false });
  },

  onSelect() {
    this.setData({
      nickName: this.data.editNickName,
      gender: this.data.editGender,
      province: this.data.editProvince,
      city: this.data.editCity,
      showEditSheet: false
    });
  },

  onNickNameChange(event) {
    this.setData({ editNickName: event.detail });
  },

  onGenderChange(event) {
    this.setData({ editGender: event.detail });
  },

  onProvinceChange(event) {
    this.setData({ editProvince: event.detail });
  },

  onCityChange(event) {
    this.setData({ editCity: event.detail });
  }
});
