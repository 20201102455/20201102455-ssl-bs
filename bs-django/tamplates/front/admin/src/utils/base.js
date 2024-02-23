const base = {
    get() {
        return {
            url : "http://localhost:8080/django1ud3dnd3/",
            name: "django1ud3dnd3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Django的社区诊所医疗系统"
        } 
    }
}
export default base
