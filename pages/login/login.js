// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },
  phoneInput: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function () {
    var that = this;
  
    wx.request({
      url: 'http://127.0.0.1:8080/login',
      
      data: {
        username: that.data.account,
        password: that.data.password,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.username === "常酱油" && res.data.password === "123456"){
          console.log(res.data)
          wx.switchTab({
            url: '/pages/index/index'
          })  
          // wx.navigateTo({
          //   url: 'pages/index/index'
          // }) 
        }else{
          console.log('用户名或密码错误');
        }
      },
      fail: function (res) {
        console.log("--------fail--------");
      }

    })
  }
})