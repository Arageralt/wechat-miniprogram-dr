/**
 * banner数据
 */
function getBannerData() {
  var arr = ['../../images/banner_01.jpg', '../../images/banner_02.png', '../../images/banner_03.png', '../../images/banner_04.png']
  return arr
}
/*
 * 首页 navnav 数据
 */
function getIndexNavData() {
  var arr = [{
      id: 1,
      icon: "../../images/nav_icon_01.png",
      title: "医院"
    },
    {
      id: 2,
      icon: "../../images/nav_icon_02.png",
      title: "胃科"
    },
    {
      id: 3,
      icon: "../../images/nav_icon_03.png",
      title: "心内科"
    },
    {
      id: 4,
      icon: "../../images/nav_icon_04.png",
      title: "牙科"
    },
    {
      id: 5,
      icon: "../../images/nav_icon_05.png",
      title: "骨科"
    }
  ]
  return arr
}
/*
 * 首页 对应 标签 数据项
 */
function getIndexNavSectionData() {
  var arr = [
    [{

        subject: "胃科",
        coverpath: "../../images/recommend_img_01.png",
        price: '201科室',
        message: '护好你的胃'
        
      },
      {

        subject: "骨科",
        coverpath: "../../images/recommend_img_02.png",
        price: '202科室',
        message: '护好你的骨',
        bookTap1: function (e) {
          wx.navigateTo({
            url: '../book1/book1'
          })
        }
      },
      {

        subject: "心内科",
        coverpath: "../../images/recommend_img_03.png",
        price: '203科室',
        message: '护好你的心'
      },
      {

        subject: "牙科",
        coverpath: "../../images/recommend_img_05.png",
        price: '301科室',
        message: '护好你的牙'
      },
     
    ],
    [{
      artype: 'stomach',
      subject: "胃科",
      coverpath: "../../images/recommend_img_01.png",
      price: '201科室',
      message: '护好你的胃'
    }],
    [{
        artype: 'heart',
        subject: "心内科",
        coverpath: "../../images/recommend_img_03.png",
        price: '203科室',
        message: '护好你的心'
      },
     
      
    ],
    [

      {
        artype: ' dentistry',
        subject: "牙科小知识",
        coverpath: "../../images/recommend_img_05.png",
        price: '301科室',
        message: '护好你的牙，不妨从以下方面入手'
      }
    ],
    [{
      artype: 'bone',
      subject: "骨科小知识",
      coverpath: "../../images/recommend_img_02.png",
      price: '202科室',
      message: '护好你的骨，不妨从以下方面入手'
    }]
  ]
  return arr
}

/*
 * 对外暴露接口
 */
module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
 

}