Page({
  data: {
    active: 0, // 确保默认选中第一个导航项
    activeTab: 0,
    devices: [],
    category1Devices: [],
    category2Devices: []
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
    // 在页面显示时刷新底部导航栏的 active 状态
    this.setData({
      active: 0
    });
  },

  onTabBarChange(event) {
    this.setData({ active: event.detail });
    // 根据 active 值导航到对应的页面
    switch (event.detail) {
      case 0:
        this.navigateToPage1();
        break;
      case 1:
        this.navigateToPage2();
        break;
      case 2:
        this.navigateToPage3();
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

  onSwitchChange(event) {
    const { id } = event.currentTarget.dataset;
    const { devices, category1Devices, category2Devices } = this.data;
    
    // 更新所有设备列表
    const updatedDevices = devices.map(device => {
      if (device.id === id) {
        return { ...device, enabled: !device.enabled };
      }
      return device;
    });
    
    // 更新分类设备列表
    const updatedCategory1Devices = updatedDevices.filter(device => device.category === 1);
    const updatedCategory2Devices = updatedDevices.filter(device => device.category === 2);

    this.setData({
      devices: updatedDevices,
      category1Devices: updatedCategory1Devices,
      category2Devices: updatedCategory2Devices
    });
  }
});
