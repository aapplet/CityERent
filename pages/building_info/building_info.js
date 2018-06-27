// pages/building_info/building_info.js
const app = getApp()

Page({

    //页面的初始数据
    data: {
        img: app.data.img,
        page: 1,
        community_id: 1,
        community_list: [],
        markers: [
            {
                latitude: 32.5056200000,
                longitude: 111.0965700000,
                callout: {
                    content: '武当山5A级风景区',
                    display: 'ALWAYS',
                    padding: 10,
                    borderRadius: 10
                }
            },
            {
                latitude: 32.5016200000,
                longitude: 111.0965700000
            },
            {
                latitude: 32.5099200000,
                longitude: 111.0905700000
            }]
    },

    onLoad: function (options) {
        if (options.id) {
            this.setData({
                community_id: options.id
            })
            this.getCommunity(options.id, 1)
        }
    },

    //展示楼盘里所有出租的列表
    getCommunity(id, page) {
        app.api.community({
            page: page,
            community_id: id
        }).then(res => {
            if (res.code === 200 && res.list.length) {
                this.setData({
                    community_list: this.data.rent_list
                })
            }
        })
    },

    //上拉刷新
    onReachBottom() {
        let {page, community_id} = this.data
        ++page
        this.setData({
            page: page
        })
        // this.getCommunity(community_id, page)
    }
})