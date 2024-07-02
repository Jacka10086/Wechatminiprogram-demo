// pages/page2/page2.js
Page({
  data: {
    active: 1,
    swiperItems: [
      { src: 'https://via.placeholder.com/600x400?text=Image+1' },
      { src: 'https://via.placeholder.com/600x400?text=Image+2' },
      { src: 'https://via.placeholder.com/600x400?text=Image+3' },
      { src: 'https://via.placeholder.com/600x400?text=Image+4' }
    ],
    gridItems: [
      { icon: 'https://via.placeholder.com/100', text: '加一页' },
      { icon: 'https://via.placeholder.com/100', text: '减一页' },
      { icon: 'https://via.placeholder.com/100', text: '按钮3' },
      { icon: 'https://via.placeholder.com/100', text: '按钮4' },
      { icon: 'https://via.placeholder.com/100', text: '按钮5' }
    ],
    imageItems: [
      { src: 'https://via.placeholder.com/600x400?text=Image+1', text: '1' },
      { src: 'https://via.placeholder.com/600x200?text=Image+2', text: '2' },
      { src: 'https://via.placeholder.com/600x200?text=Image+3', text: '3' }
    ]
  },

  onLoad: function (options) {},

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
      this.addSwiperPage();
    } else if (index === 1) {
      this.removeSwiperPage();
    }
  },

  onShow() {
    this.setData({ active: 1 }); // 设置当前页面为激活状态
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
  onSearch() {
    wx.showToast({
      title: '搜索功能尚未实现',
      icon: 'none',
      duration: 2000
    });
  }
});