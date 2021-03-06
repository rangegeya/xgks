// pages/swper1/swper1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //题   所以背题模式就是把正确答案的选项 checked 属性设置为 true。 checked = true
    question: [{
      options: [{ checked: false, name: "夹具不牢固导致物件飞出伤人", value: "A" },
      { checked: false, name: "金属切屑飞出伤人", value: "B" },
      ],
      answer: "B",
      answered: false,
      rightandwrong: 0,
      title: "下列哪种伤害不属于机械伤害的范围?11( )",
      id: 1
    },
    {
      options:
        [{ checked: false, name: "夹具不牢固导致物件飞出伤人", value: "A" },
        { checked: false, name: "金属切屑飞出伤人", value: "B" },
        { checked: false, name: "红眼病", value: "C" },
        { checked: false, name: "机器漏电", value: "D" }],
      answer: "C",
      answered: false,
      rightandwrong: 0,
      title: "下列哪种伤害不属于机械伤害的范围?22( )",
      id: 2
    },
    {
      options:
        [{ checked: false, name: "夹具不牢固导致物件飞出伤人", value: "A" },
        { checked: false, name: "金属切屑飞出伤人", value: "B" },
        { checked: false, name: "红眼病", value: "C" },
        { checked: false, name: "机器漏电", value: "D" }],
      answer: "B",
      answered: false,
      rightandwrong: 0,
      title: "下列哪种伤害不属于机械伤害的范围?33( )",
      id: 3
    }

    ],
    currentTab: 0,//当前的id号
    isRuleTrue: false,//显示弹窗与否
    length: 0,//题的个数
    right: 0,//答对的个数
    wrong: 0,//答错的个数
  },
  choose: function (e) {
    var that = this
    var currentTab = that.data.currentTab
    var index = e.currentTarget.dataset.index
    var answer = e.currentTarget.dataset.answer
    var value = e.currentTarget.dataset.value

    var question = that.data.question
    //选择哪个选项
    for (let i = 0; i < question[currentTab].options.length; i++) {
      question[currentTab].options[i].checked = false
    }
    question[currentTab].options[index].checked = true
    //设置题是否被答过
    question[currentTab].answered = true
    //答对还是答错
    if (answer == value) {
      question[currentTab].rightandwrong = 1
    } else {
      question[currentTab].rightandwrong = -1
    }
    this.answerwrong()
    this.answerrigth()
    console.log(e)
    console.log(currentTab)
    console.log(index)
    that.setData({
      question: question,
    })
  },
  answerwrong: function () {
    var that = this
    var num = 0
    var question = that.data.question
    for (let i = 0; i < question.length; i++) {
      if (question[i].rightandwrong == -1) {
        num = num + 1;
      }
    }
    that.setData({
      wrong: num
    })
  },
  answerrigth: function () {
    var that = this
    var num = 0
    var question = that.data.question
    for (let i = 0; i < question.length; i++) {
      if (question[i].rightandwrong == 1) {
        num = num + 1;
      }
    }
    that.setData({
      right: num
    })
  },
  // 切換題
  switchTab: function (e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    });
  },
  //题跳转
  changeIndex: function (e) {
    var that = this
    var currentTab = e.target.dataset.tiaotarget
    that.setData({
      currentTab: currentTab
    })
    setTimeout(function () {
      that.hideRule()
    }, 300)
  },
  // 显示透明弹窗
  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },
  //关闭透明层
  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var length = that.data.question.length
    that.setData({
      length: length
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})