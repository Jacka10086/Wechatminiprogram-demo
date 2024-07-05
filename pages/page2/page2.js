Page({
  data: {
    active: 1,
    swiperItems: [],
    gridItems: [
      { icon: 'https://via.placeholder.com/100', text: '加一页' },
      { icon: 'https://via.placeholder.com/100', text: '减一页' },
      { icon: 'https://via.placeholder.com/100', text: '暗夜' },
      { icon: 'https://via.placeholder.com/100', text: '白昼' },
      { icon: 'https://via.placeholder.com/100', text: '原神' }
    ],
    imageItems: [],
    backgroundColor: '#FFFFFF',
    showAddImageDialog: false,
    newImageUrl: ''
  },

  onLoad: function (options) {
    const productData = require('../../data/ProductData.js');
    const savedSwiperItems = wx.getStorageSync('swiperItems') || productData.products;
    const savedImageItems = wx.getStorageSync('imageItems') || productData.imageItems;

    this.setData({
      swiperItems: savedSwiperItems,
      imageItems: savedImageItems
    });
  },

  addSwiperPage: function () {
    this.setData({ showAddImageDialog: true });
  },

  onAddImageConfirm: function () {
    const newPage = { src: this.data.newImageUrl };
    const updatedSwiperItems = [...this.data.swiperItems, newPage];

    this.setData({
      swiperItems: updatedSwiperItems,
      showAddImageDialog: false,
      newImageUrl: ''
    });

    wx.setStorageSync('swiperItems', updatedSwiperItems);
  },

  onAddImageClose: function () {
    this.setData({ showAddImageDialog: false, newImageUrl: '' });
  },

  onNewImageUrlChange: function (event) {
    this.setData({ newImageUrl: event.detail });
  },

  removeSwiperPage: function () {
    const swiperItems = [...this.data.swiperItems];
    swiperItems.pop();
    this.setData({ swiperItems });

    wx.setStorageSync('swiperItems', swiperItems);
  },

  onGridItemTap: function(event) {
    const index = event.currentTarget.dataset.index;
    if (index === 0) {
      this.addSwiperPage();
    } else if (index === 1) {
      this.removeSwiperPage();
    } else if (index === 2) {
      this.setData({ backgroundColor: '#000080' });
    } else if (index === 3) {
      this.setData({ backgroundColor: '#FFFFFF' });
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
    this.setData({ active: 1 });
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
