Page({
  onShareAppMessage() {
    return {
      title: 'swiper demo',
      path: 'page/swiper/swiper'
    }
  },
  data:{
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  }
})