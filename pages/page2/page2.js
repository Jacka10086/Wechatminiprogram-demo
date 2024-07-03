Page({
  data: {
    active: 1,
    swiperItems: [],
    gridItems: [
      { icon: 'add-o', text: '加一页' },
      { icon: 'minus', text: '减一页' },
      { icon: 'bulb-o', text: '暗夜' },
      { icon: 'bulb-o', text: '白昼' },
      { icon: 'warning-o', text: '原神' }
    ],
    imageItems: []
  },

  onLoad: function (options) {
    const productData = require('../../data/ProductData.js');
    this.setData({
      swiperItems: productData.products,
      imageItems: productData.imageItems
    });
  },

  addSwiperPage: function () {
    const newPage = { src: `https://via.placeholder.com/600x400?text=New+Image` };
    this.setData({
      swiperItems: [...this.data.swiperItems, newPage]
    });
  },

  removeSwiperPage: function () {
    const swiperItems = [...this.data.swiperItems];
    swiperItems.pop();
    this.setData({ swiperItems });
  },

  onGridItemTap: function(event) {
    const index = event.currentTarget.dataset.index;
    if (index === 0) {
      wx.showToast({
        title: '添加页面成功！',
        icon: 'none'
      });
      this.addSwiperPage();
    } else if (index === 1) {
      wx.showToast({
        title: '删除页面成功！',
        icon: 'none'
      });
      this.removeSwiperPage();
    } else if (index === 2) {
      wx.showToast({
        title: '暗夜模式启动！',
        icon: 'none'
      });
      this.setData({ 
        backgroundColor: '#000080'
      });
    } else if (index === 3) {
      wx.showToast({
        title: '白昼模式启动！',
        icon: 'none'
      });
      this.setData({
        backgroundColor: '#FFFFFF'
      });
    } else if (index === 4) {
      wx.showModal({
        title: '警告',
        content: '您没有原神内测资格！',
        showCancel: false,
        confirmText: '确定'
      });
    }
  },

  onShow() {
    this.setData({ active: 1 }); // 设置当前页面为激活状态
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

  onSearch() {
    wx.showToast({
      title: '搜索功能尚未实现',
      icon: 'none',
      duration: 2000
    });
  }
});
