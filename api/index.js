import ajax from './ajax.js'

export default {
    //登录并获取手机号
    login(param) {
        return ajax.post('/login/getOpenidKey', param)
    },
    //电话号码接口
    tel(param) {
        return ajax.post('/lease/tel', param)
    },
    //关注
    focus(param) {
        return ajax.post('/lease/focus', param)
    },
    //获取城市列表
    areas(param) {
        return ajax.post('/Areas/areas', param)
    },
    //获取当前城市
    area(param) {
        return ajax.post('/Areas/area', param)
    },
    //获取当前城市地铁
    subway(param) {
        return ajax.post('/Areas/subway', param)
    },
    //获取当前城市地铁
    subwayinfo(param) {
        return ajax.post('/Areas/subwayinfo', param)
    },
    //首页推荐的楼盘
    getLease(param) {
        return ajax.post('/lease/getLease', param)
    },
    //首页轮播图
    showImage(param) {
        return ajax.post('/lease/showImage', param)
    },
    //展示楼盘信息
    community(param) {
        return ajax.post('/lease/community', param)
    },
    //获取(厂房/商铺/写字楼/住宅)列表
    leaseList(param) {
        return ajax.post('/lease/leaseList', param)
    },
    //更多选项
    other(param) {
        return ajax.post('/lease/other', param)
    },
    //租金
    rent(param) {
        return ajax.post('/lease/rent', param)
    },
    //面积
    acreage(param) {
        return ajax.post('/lease/acreage', param)
    }
}