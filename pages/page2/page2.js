Page({
  data: {
    current: 0,
    swiperItems: [
      { src: 'https://via.placeholder.com/600x400?text=Image+1' },
      { src: 'https://via.placeholder.com/600x400?text=Image+2' },
      { src: 'https://via.placeholder.com/600x400?text=Image+3' },
      { src: 'https://via.placeholder.com/600x400?text=Image+4' }
    ],
  },

  onLoad() {
    // 如果需要，可以在这里加载初始化数据
  },

  prevSlide() {
    const current = this.data.current > 0 ? this.data.current - 1 : this.data.swiperItems.length - 1;
    this.setData({ current });
  },

  nextSlide() {
    const current = this.data.current < this.data.swiperItems.length - 1 ? this.data.current + 1 : 0;
    this.setData({ current });
  },

  onSearch() {
    // 处理搜索逻辑
    wx.showToast({
      title: '搜索功能暂未实现',
      icon: 'none'
    });
  }
});
