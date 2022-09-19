// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (app: any) {
    // 1.0> 权限处理：页面中元素的权限处理
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-explicit-any
    app.directive("auth", (el: any, binding: any, vnode: any, prevVnode: any) => {
        console.log(11);
    });

    // 2.0> xxxxxxx
    // app.directive('xxxx',(el, binding, vnode, prevVnode)=>{

    // });
}
