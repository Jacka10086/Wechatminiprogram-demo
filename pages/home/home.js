Page({
  data: {
    active: 0, // 确保默认选中第一个导航项
    activeTab: 0,
    devices: [],
    category1Devices: [],
    category2Devices: [],
    touchStartX: 0,
    touchStartY: 0,
    touchEndX: 0,
    touchEndY: 0
  },

  onLoad() {
    const deviceData = require('../../data/deviceData.js');
    this.setData({
      devices: deviceData.devices,
      category1Devices: deviceData.devices.filter(device => device.category === 1),
      category2Devices: deviceData.devices.filter(device => device.category === 2),
      active: 0 // 确保底部导航栏显示我的设备
    });
  },
  onShow() {
    this.setData({
      active: 0
    });
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

  onTabChange(event) {
    this.setData({ activeTab: event.detail.index });
  },

  onSwitchChange(event) {
    const { id } = event.currentTarget.dataset;
    const { devices, category1Devices, category2Devices } = this.data;
    
    const updatedDevices = devices.map(device => {
      if (device.id === id) {
        return { ...device, enabled: !device.enabled };
      }
      return device;
    });
    
    const updatedCategory1Devices = updatedDevices.filter(device => device.category === 1);
    const updatedCategory2Devices = updatedDevices.filter(device => device.category === 2);

    this.setData({
      devices: updatedDevices,
      category1Devices: updatedCategory1Devices,
      category2Devices: updatedCategory2Devices
    });
  },

  onTouchStart(event) {
    this.setData({
      touchStartX: event.touches[0].clientX,
      touchStartY: event.touches[0].clientY
    });
  },

  onTouchMove(event) {
    this.setData({
      touchEndX: event.touches[0].clientX,
      touchEndY: event.touches[0].clientY
    });
  },

  onTouchEnd(event) {
    const deltaX = this.data.touchEndX - this.data.touchStartX;
    const deltaY = this.data.touchEndY - this.data.touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 200 && this.data.activeTab > 0) {
        this.setData({ activeTab: this.data.activeTab - 1 });
      } else if (deltaX < -200 && this.data.activeTab < 2) {
        this.setData({ activeTab: this.data.activeTab + 1 });
      }
    }
  }
});
