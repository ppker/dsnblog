(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-52bf4e99":"48bdd765"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dsnblog/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0e5c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticStyle:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}},[n("a-row",{staticClass:"abs toolbar",attrs:{span:24,type:"flex",justify:"space-between"}},[n("a-button",{attrs:{type:"ghost",shape:"circle",icon:"rollback"},on:{click:function(t){return e.$router.push("/demo")}}}),n("a-popover",{attrs:{title:"Setting",placement:"bottomRight"},model:{value:e.showSettings,callback:function(t){e.showSettings=t},expression:"showSettings"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",[n("span",[e._v("数量")]),n("a-slider",{attrs:{min:1},model:{value:e.animateOptions.population,callback:function(t){e.$set(e.animateOptions,"population",t)},expression:"animateOptions.population"}})],1),n("div",[n("span",[e._v("速度")]),n("a-slider",{attrs:{step:1,min:1},model:{value:e.animateOptions.speed,callback:function(t){e.$set(e.animateOptions,"speed",t)},expression:"animateOptions.speed"}})],1),n("div",[n("span",[e._v("半径区间")]),n("a-slider",{attrs:{range:"",min:1,max:30},model:{value:e.animateOptions.radius,callback:function(t){e.$set(e.animateOptions,"radius",t)},expression:"animateOptions.radius"}})],1)]),n("a-button",{attrs:{type:"ghost",shape:"circle",icon:"setting"}})],1)],1),n("canvas",{ref:"canvas",staticClass:"abs",attrs:{width:e.canvasWidth,height:e.canvasHeight}})],1)},r=[],s=(n("b0c0"),n("d3b7"),n("d4ec")),i=n("bee2"),o=n("99de"),c=n("7e84"),l=n("262e"),u=n("9ab4"),p=n("60a3"),v=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.canvasWidth=0,e.canvasHeight=0,e.canvasManager="",e.animateOptions={population:40,color:"",speed:20,radius:[5,15]},e.showSettings=!1,e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"onRouteChange",value:function(e){this.startCanvasAnimate(e.query.name)}},{key:"onAnimateOptionsChange",value:function(e){this.canvasManager.resetOptions(e)}},{key:"mounted",value:function(){var e=this.$refs["canvas"],t=(e.getContext("2d"),e.parentElement);this.canvasWidth=t.clientWidth,this.canvasHeight=t.clientHeight,this.startCanvasAnimate()}},{key:"startCanvasAnimate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bubble";this.canvasManager&&this.canvasManager.stopAnimate();var t=this.$refs["canvas"],a=t.getContext("2d"),r=this;n("d48e")("./"+e).then((function(e){r.canvasManager=new e.default(a,r.canvasWidth,r.canvasHeight,r.population),r.animateOptions=Object.assign({},r.animateOptions,r.canvasManager.presetOptions),r.canvasManager.startAnimate()})).catch((function(e){return console.log(e)}))}}]),t}(p["b"]);u["a"]([Object(p["c"])("$route",{deep:!0})],v.prototype,"onRouteChange",null),u["a"]([Object(p["c"])("animateOptions",{deep:!0})],v.prototype,"onAnimateOptionsChange",null),v=u["a"]([p["a"]],v);var d=v,f=d,h=(n("9750"),n("2877")),_=Object(h["a"])(f,a,r,!1,null,"28c5023c",null);t["default"]=_.exports},1817:function(e,t,n){var a={"./post/font/font.md":"8218","./post/serve/font.md":"c09e"};function r(e){return Promise.resolve().then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=a[e];return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="1817",e.exports=r},"19cc":function(e,t,n){e.exports=n.p+"img/github.7b888055.png"},"1b11":function(e,t,n){"use strict";n("4de4"),n("4160"),n("a630"),n("caad"),n("d3b7"),n("6062"),n("2532"),n("3ca3"),n("159b"),n("ddb0");var a=n("d4ec"),r=n("bee2"),s=[{title:"ttt",tags:["读书12","《JavaScript权威指南》"],date:"2018-11-08 04:10:03",categories:"Web 开发可能有些挑战性——我们会提供足够详细的资料来帮助您轻松愉快地学习相关主题。无论您是正在学习 Web 开发的学生（自学或者参与课程），寻找课堂材料的老师，还是编程爱好者，抑或仅仅想对 Web 技术有更多了解，您都能找到您所需要的信息。",test:"tset infomation",path:"/article/font/font"},{title:"《JavaScript权威指南》第55章数组",tags:["读书456sf","《JavaScript权威指南》"],date:"2018-11-08 04:10:03",categories:"Web 开发可能有些挑战性——我们会提供足够详细的资料来帮助您轻松愉快地学习相关主题。无论您是正在学习 Web 开发的学生（自学或者参与课程），寻找课堂材料的老师，还是编程爱好者，抑或仅仅想对 Web 技术有更多了解，您都能找到您所需要的信息。",test:"",path:"/article/serve/font"}];n.d(t,"a",(function(){return i}));var i=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getAll",value:function(){return s}},{key:"getArticlesByPath",value:function(e){return s.filter((function(t){return t.path.includes("/".concat(e,"/"))}))}},{key:"getFont",value:function(){return s.filter((function(e){return e.path.includes("/font/")}))}},{key:"getServe",value:function(){return s.filter((function(e){return e.path.includes("/serve/")}))}},{key:"getTool",value:function(){return s.filter((function(e){return e.path.includes("/tool/")}))}},{key:"getTags",value:function(){var e=new Set;return s.forEach((function(t){t.tags.forEach((function(t){return e.add(t)}))})),Array.from(e)}},{key:"getArticlesByTag",value:function(e){return s.filter((function(t){return t.tags.includes(e)}))}}]),e}()},"28ea":function(e,t,n){e.exports=n.p+"img/home.ecd462a1.png"},"2a68":function(e,t,n){var a={"./views/Home":"bb51","./views/Home.vue":"bb51","./views/demo":"c0b3","./views/demo.vue":"c0b3","./views/interview":"8b48","./views/interview.vue":"8b48"};function r(e){return Promise.resolve().then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=a[e];return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="2a68",e.exports=r},"2d11":function(e,t,n){var a={"./demoCmp/battery":["af7f"],"./demoCmp/battery.vue":["af7f"],"./demoCmp/canvas":["0e5c"],"./demoCmp/canvas/":["0e5c"],"./demoCmp/canvas/bubble":["ebd3","chunk-52bf4e99"],"./demoCmp/canvas/bubble.ts":["ebd3","chunk-52bf4e99"],"./demoCmp/canvas/index":["0e5c"],"./demoCmp/canvas/index.vue":["0e5c"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="2d11",e.exports=r},3316:function(e,t,n){"use strict";var a=n("4423"),r=n.n(a);r.a},"3a09":function(e,t,n){},4423:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"619a":function(e,t,n){e.exports=n.p+"img/3.e045215f.png"},7215:function(e,t,n){e.exports=n.p+"img/resume.f595b0b5.png"},"81e5":function(e,t,n){e.exports=n.p+"img/2.f79c47b2.png"},8218:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("配置")]),n("p",[e._v("springBoot启动必须配置数据源 server.port=8084")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.datasource.url=jdbc:mysql://47.94.21.34:3306/disk\nspring.datasource.username=root\nspring.datasource.password=soning@mysql\n")])]),n("h3",[e._v("设置文件上传大小")]),n("p",[e._v("例如100MB，-1（该值代表无限制）")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("spring.servlet.multipart.max-file-size=-1\nspring.servlet.multipart.max-request-size=-1\n")])]),n("h3",[e._v("Mybatis")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("# 包扫描路径  src/main/resources/mapper/*.xml\nmybatis.mapper-locations=classpath:mapper/*.xml   \n# 开启下划线与驼峰转换\nmybatis.configuration.map-underscore-to-camel-case=true\n")])]),n("h2",[e._v("注解")]),n("h3",[e._v("@NonNull")]),n("p",[e._v("可以标注在方法,字段，参数之上，白哦四对应的值不能为空")]),n("h3",[e._v("@Nullable")]),n("p",[e._v("可以标注在方法，字段，参数之上，表示对那个的值可以为空")]),n("h3",[e._v("@Bean")]),n("blockquote",[n("p",[e._v('可复用的JAVA对象，在spring中会被交由Spring管理其生命周期和自动注入，常用在方法上。可指定其初始化或销毁方法，防止销毁可用@Bean(destroyMethod="")')])]),n("h4",[e._v("Attr")]),n("ol",[n("li",[n("code",{pre:!0},[e._v("name")]),e._v('="name" || {"name1", "name2"}')]),n("li",[n("code",{pre:!0},[e._v("initMethod")]),e._v('="FuncName" //指定返回的对象的初始化方法，该方法在返回的对象中')]),n("li",[n("code",{pre:!0},[e._v("destroyMethod")]),e._v('="FuncName" //指定对象销毁方法')])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('public class Foo {\n    public void init() { /* initialization logic */ }\n}\n\npublic class Bar {\n    public void cleanup() { /* destruction logic */ }\n}\n\n@Configuration\npublic class AppConfig {\n\n    @Bean(initMethod = "init")\n    public Foo foo() { return new Foo(); }\n\n    @Bean(destroyMethod = "cleanup")\n    public Bar bar() { return new Bar(); }\n\n}\n')])]),n("h3",[e._v('@Scope("prototype")')]),n("h4",[e._v("Attr")]),n("ol",[n("li",[n("p",[e._v("singleton 单例模式，"),n("code",{pre:!0},[e._v("singleton")]),e._v("类型的"),n("code",{pre:!0},[e._v("bean")]),e._v("定义从容器启动到第一次被请求而实例化开始，只要容器不销毁或退出，该类型的"),n("code",{pre:!0},[e._v("bean")]),e._v("的单一实例就会一直存活。（"),n("code",{pre:!0},[e._v("Spring")]),e._v("=父母，"),n("code",{pre:!0},[e._v("Bean")]),e._v("代表独生子女）")])]),n("li",[n("p",[e._v("prototype 原型模式，每次请求都会重新生成一个对象，交由调用方管理并清楚容器对该实例的引用，由请求方自行控制其生命周期。（"),n("code",{pre:!0},[e._v("Spring")]),e._v("=人贩子，只负责偷（创建）不负责养（管理），"),n("code",{pre:!0},[e._v("Bean")]),e._v("=被偷的孩子） 该注解有两个值（"),n("code",{pre:!0},[e._v("singleton")]),e._v("，"),n("code",{pre:!0},[e._v("prototype")]),e._v("），默认为单例（"),n("code",{pre:!0},[e._v("Singleton")]),e._v("），和"),n("code",{pre:!0},[e._v("@Bean")]),e._v("共同使用，标识"),n("code",{pre:!0},[e._v("Bean")]),e._v("的实例数量")])])]),n("h3",[e._v("@Configuration")]),n("p",[e._v("类似于XML配置文件，用于标识该文件（类）中包含有"),n("code",{pre:!0},[e._v("Bean")])]),n("h3",[e._v("@Component,@Service, @Controller, @Mapper, @Repository")]),n("p",[e._v("组件标识，通常标注在类上，作用同"),n("code",{pre:!0},[e._v("@Bean")])]),n("ol",[n("li",[n("code",{pre:!0},[e._v("@Controller")]),e._v(" 控制层")]),n("li",[n("code",{pre:!0},[e._v("@Service")]),e._v(" 服务层")]),n("li",[n("code",{pre:!0},[e._v("@Mapper")]),e._v(", "),n("code",{pre:!0},[e._v("@Repository")]),e._v(" 持久层")]),n("li",[n("code",{pre:!0},[e._v("@Component")]),e._v(" 普通组件")])]),n("h3",[e._v('@ComponentScan("包名")')]),n("p",[e._v("自动扫描"),n("code",{pre:!0},[e._v("@Component")]),e._v("，"),n("code",{pre:!0},[e._v("@Service")]),e._v("等")]),n("h3",[e._v('@ServletComponentScan("com.demo.包名")')]),n("p",[e._v("启动类添加"),n("code",{pre:!0},[e._v("@ServletComponentScan")]),e._v("后，即可在指定包中使用"),n("code",{pre:!0},[e._v("@WebFilter")]),e._v(","),n("code",{pre:!0},[e._v("@WebServlet")]),e._v(","),n("code",{pre:!0},[e._v("@WebListener")]),e._v("标注"),n("code",{pre:!0},[e._v("Servlet")]),e._v("的过滤器和监听器等")]),n("h3",[e._v("@Controller")]),n("h4",[e._v("@RequestMapping(value, method, params, headers, process)")]),n("h4",[e._v("@PathVariable")]),n("h4",[e._v("@RequestParam")]),n("h4",[e._v("@ResponseBody")]),n("h4",[e._v("@RequestHeader")]),n("h4",[e._v("@CookieValue")]),n("h3",[e._v("Mybatis注解")]),n("h3",[e._v("Insert()")]),n("h3",[e._v("@Options")]),n("p",[e._v("开启"),n("code",{pre:!0},[e._v("insert")]),e._v(","),n("code",{pre:!0},[e._v("update")]),e._v("完成返回自增主键，传入"),n("code",{pre:!0},[e._v("entity")]),e._v("对象，自动将"),n("code",{pre:!0},[e._v("auto_increment")]),e._v("类型主键写入该"),n("code",{pre:!0},[e._v("Entity")]),e._v("。")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('@Options(useGeneratedKeys=true, keyProperty="fid", keyColumn="fid") \n')])]),n("p",[e._v("如果方法使用了@Param注解，如："),n("code",{pre:!0},[e._v("void insertUser(@Param(“file”) FileEntity file)")]),e._v("，"),n("code",{pre:!0},[e._v("keyProperty")]),e._v("需要指定为 "),n("code",{pre:!0},[e._v("file.fid")]),e._v("。")]),n("h2",[e._v("全局异常处理类")]),n("p",[n("code",{pre:!0},[e._v("@ControllerAdvice")]),e._v(" + "),n("code",{pre:!0},[e._v("@ExceptionHandler")]),e._v("可捕获"),n("code",{pre:!0},[e._v("@Controller")]),e._v("层的错误, "),n("code",{pre:!0},[e._v("@Controller")]),e._v("层无须使用"),n("code",{pre:!0},[e._v("try-catch")])]),n("h3",[e._v("@ControllerAdvice")]),n("p",[e._v("定义全局异常处理类")]),n("h3",[e._v("@ExceptionHandler(Exception.class)")]),n("p",[e._v("声明异常处理方法 如果未声明要处理的异常类型，则默认为定义的方法的参数列表中的的异常类型")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('/**\n * @ControllerAdvice + @ExceptionHandler 实现全局的 Controller 层的异常处理\n */\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);\n\n    /**\n     * 处理所有不可知的异常\n     * @param e\n     * @return\n     */\n    @ExceptionHandler(Exception.class)\n    @ResponseBody\n    AppResponse handleException(Exception e){\n        LOGGER.error(e.getMessage(), e);\n\n        AppResponse response = new AppResponse();\n        response.setFail("操作失败！");\n        return response;\n    }\n\n    /**\n     * 处理所有业务异常\n     * @param e\n     * @return\n     */\n    @ExceptionHandler(BusinessException.class)\n    @ResponseBody\n    AppResponse handleBusinessException(BusinessException e){\n        LOGGER.error(e.getMessage(), e);\n\n        AppResponse response = new AppResponse();\n        response.setFail(e.getMessage());\n        return response;\n    }\n}\n')])]),n("h2",[e._v("数据校验")]),n("h3",[e._v("@NotNull、@Min、@NotBlank 、、、")]),n("p",[e._v("变量级注解，声明变量校验类型")]),n("table",[n("thead",[n("tr",[n("th",[e._v("注解")]),n("th",[e._v("说明")])])]),n("tbody",[n("tr",[n("td",[e._v("@Null")]),n("td",[e._v("只能是null")])]),n("tr",[n("td",[e._v("@Null")]),n("td",[e._v("限制只能为null")])]),n("tr",[n("td",[e._v("@NotNull")]),n("td",[e._v("限制必须不为null")])]),n("tr",[n("td",[e._v("@NotEmpty")]),n("td",[e._v("验证注解的元素值不为null且不为空（字符串长度不为0、集合大小不为0）")])]),n("tr",[n("td",[e._v("@NotBlank")]),n("td",[e._v("验证注解的元素值不为空（不为null、去除首位空格后长度为0），不同于@NotEmpty，@NotBlank只应用于字符串且在比较时会去除字符串的空格")])]),n("tr",[n("td",[e._v("@AssertFalse")]),n("td",[e._v("制必须为false")])]),n("tr",[n("td",[e._v("@AssertTrue")]),n("td",[e._v("限制必须为true")])]),n("tr",[n("td",[e._v("@Max(value)")]),n("td",[e._v("限制必须为一个不大于指定值的数字")])]),n("tr",[n("td",[e._v("Min(value)")]),n("td",[e._v("限制必须为一个不小于指定值的数字")])]),n("tr",[n("td",[e._v("@Digits(integer,fraction)")]),n("td",[e._v("限制必须为一个小数，且整数部分的位数不能超过integer，小数部分的位数不能超过fraction")])]),n("tr",[n("td",[e._v("@Future")]),n("td",[e._v("限制必须是一个将来的日期")])]),n("tr",[n("td",[e._v("@Past")]),n("td",[e._v("限制必须是一个过去的日期")])]),n("tr",[n("td",[e._v("@Size(max,min)")]),n("td",[e._v("限制字符长度必须在min到max之间")])]),n("tr",[n("td",[e._v("@Length")]),n("td",[e._v("被注释的字符串的大小必须在指定的范围内")])]),n("tr",[n("td",[e._v("@Range(min=, max=)")]),n("td",[e._v("验证注解的元素值在最小值和最大值之间")])]),n("tr",[n("td",[e._v("@Email")]),n("td",[e._v("验证注解的元素值是Email，也可以通过正则表达式和flag指定自定义的email格式")])]),n("tr",[n("td",[e._v("@CreditCardNumber")]),n("td",[e._v("信用卡验证")])]),n("tr",[n("td",[e._v('@Pattern(regexp="reg")')]),n("td",[e._v("验证字符串满足正则")])]),n("tr",[n("td",[e._v("@URL")]),n("td",[e._v("(protocol=,host=, port=,regexp=, flags=)")])])])]),n("h3",[e._v("@Validated @Valid")]),n("table",[n("thead",[n("tr",[n("th",[e._v("区别")]),n("th",[e._v("@Validated")]),n("th",[e._v("@Valid")])])]),n("tbody",[n("tr",[n("td",[e._v("特有")]),n("td",[e._v("分组")]),n("td",[e._v("嵌套验证")])]),n("tr",[n("td",[e._v("作用于")]),n("td",[e._v("类型、方法和方法参数")]),n("td",[e._v("方法、构造函数、方法参数和成员属性")])])])]),n("h3",[e._v("@Validated分组机制")]),n("p",[n("code",{pre:!0},[e._v("@Validated")]),e._v("提供分组机制，在参数有多种验证情景下（如添加和修改），对应不同的验证机制")]),n("ol",[n("li",[e._v("提供分组接口标识")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("public interface Add{ }\npublic interface Update{ }\n")])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("验证注解上标明所属分组")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('public class User{\n    @NotNull(message = "id不能为空", groups = { Update.class })\n    private int id;\n    \n    @NotNull(message = "用户名不能为空", groups = { Add.class, Update.class })\n    @Size(min = 3, max = 12, groups = { Update.class })\n    private String username;\n    \n}\n')])]),n("ol",{attrs:{start:"3"}},[n("li",[n("code",{pre:!0},[e._v("@Controller")]),e._v("上进行验证 BindingResult @Validated/@Valid和BindingResult 是配对出现，并且形参顺序是固定的（一前一后）。")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('public String save(@Validated({Add.class}) User user, BindingResult result){\n    if(result.hasErrors()){\n        return "validate occurrenced error"\n    }\n    return "validate success"\n}\n')])]),n("h3",[e._v("@GroupSequence({interface.class, other.class})")]),n("p",[e._v("默认分组验证时无序的，如果想要分组排序需要使用"),n("code",{pre:!0},[e._v("@GroupSequence")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('/* @interface */\n@GroupSequence( { Add.class, Update.class })\npublic interface Group { }\n\n/* @Controller */\npublic @ResponseBody String addPeople(@Validated({Group.class}) People p,BindingResult result)   {  \n\tif(result.hasErrors())  {  \n\t\treturn "0";  \n\t}  \n\treturn "1";  \n} \n\n')])]),n("h3",[e._v("嵌套验证")]),n("p",[e._v("如果某个入参是复合对象（对象包含对象，例如学生含有班级的相关对象信息），只使用"),n("code",{pre:!0},[e._v("@Validated")]),e._v("无法对学生中的班级对象的属性进行验证")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('public class Student{\n    @NotNull(message = "学生姓名不能为空")\n    private String name;\n    \n    ...\n    \n    @NotNull(message = "班级信息不能为空")\n    private Classes classes;\n}\n\npublic class Classes{\n    @NotNull(message = "班级ID不能为空")\n    @Min(value = 1, message = "id必须为正整数")\n    private int id;\n}\n')])]),n("p",[e._v("此时验证只会对第一层有效（学生），对班级内的验证会忽略. "),n("code",{pre:!0},[e._v("@Valid")]),e._v(" 则可以声明嵌套验证，将"),n("code",{pre:!0},[e._v("@Valid")]),e._v("写在需验证的对象即可")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('public class Student{\n    @NotNull(message = "学生姓名不能为空")\n    private String name;\n    \n    ...\n    @Valid //@Valid 可以用在成员属性上 @Validated不能\n    @NotNull(message = "班级信息不能为空")\n    private Classes classes;\n}\n')])]),n("h3",[e._v("ResponseEntity")]),n("h2",[e._v("文件上传")]),n("h3",[e._v("设置文件上传大小")]),n("p",[e._v("例如100MB，-1（该值代表无限制）")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("spring.servlet.multipart.max-file-size=-1\nspring.servlet.multipart.max-request-size=-1\n")])]),n("p",[e._v("或者使用工厂函数，放在启动类中")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('    /**  \n     * 文件上传配置  \n     * @return  \n     */  \n    @Bean  \n    public MultipartConfigElement multipartConfigElement() {  \n        MultipartConfigFactory factory = new MultipartConfigFactory();  \n        //文件最大  \n        factory.setMaxFileSize("10240KB"); //KB,MB  \n        /// 设置总上传数据总大小  \n        factory.setMaxRequestSize("102400KB");  \n        return factory.createMultipartConfig();  \n    } \n')])]),n("h3",[e._v("获取文件MD5")]),n("p",[n("code",{pre:!0},[e._v("DigestUtils.md5DigestAsHex(new FileInputStream(File));")])])])}],s=n("2877"),i={},o=Object(s["a"])(i,a,r,!1,null,null,null);t["default"]=o.exports},8688:function(e,t,n){"use strict";var a=n("3a09"),r=n.n(a);r.a},8733:function(e,t,n){var a={"./battery.vue":"af7f","./canvas/index.vue":"0e5c"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="8733"},"8b48":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v(" interview ")])},r=[],s=n("d4ec"),i=n("99de"),o=n("7e84"),c=n("262e"),l=n("60a3"),u=function(e){function t(){return Object(s["a"])(this,t),Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(l["b"]),p=u,v=n("2877"),d=Object(v["a"])(p,a,r,!1,null,null,null);t["default"]=d.exports},"8efd":function(e,t,n){e.exports=n.p+"img/7.c18e55ef.png"},9038:function(e,t,n){},9750:function(e,t,n){"use strict";var a=n("f90f"),r=n.n(a);r.a},"9c0c":function(e,t,n){},af7f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticStyle:{padding:"1.5rem",overflow:"hidden"}},[n("section",[n("div",{staticClass:"battery-wrapper wrapper"},[n("div",{staticStyle:{width:"280px",margin:"auto",height:"100%"}},[n("div",{staticClass:"circle"}),n("span",{staticClass:"number"},[e._v("99.6%")]),n("div",{staticClass:"base"},[n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"}),n("span",{staticClass:"bubble"})])])])]),n("section",{staticClass:"static-battery wrapper",staticStyle:{float:"left"}},[n("div",{staticClass:"battery"})]),n("section",{staticClass:"wave-battery wrapper",staticStyle:{float:"left"}},[n("div",{staticClass:"battery"},[n("div",{staticClass:"battery-body"},[n("div",{staticClass:"wave"}),n("div",{staticClass:"wave"}),n("div",{staticClass:"wave"})])])])])}],s=(n("b493"),n("2877")),i={},o=Object(s["a"])(i,a,r,!1,null,"14a38e5f",null);t["default"]=o.exports},b493:function(e,t,n){"use strict";var a=n("c890"),r=n.n(a);r.a},bb51:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter"},[e.currentPage>1?n("a-icon",{staticClass:"page-arrow",attrs:{type:"caret-left"},nativeOn:{click:function(t){return e.prevPage(t)}}}):e._e(),e.currentPage<e.totalPage?n("a-icon",{staticClass:"page-arrow",attrs:{type:"caret-right"},nativeOn:{click:function(t){return e.nextPage(t)}}}):e._e(),e._l(e.showArticles,(function(t,a){return n("article",{key:a,staticClass:"article-card",on:{click:function(n){return e.$router.push(t.path)}}},[n("header",{staticClass:"title"},[e._v(e._s(t.title))]),n("p",{staticClass:"desc"},[e._v(e._s(t.categories))]),n("footer",{staticClass:"footer"},[n("span",{staticClass:"tags"},e._l(t.tags,(function(t,a){return n("span",{key:a},[e._v(" "+e._s(t)+" ")])})),0),n("div",{staticClass:"date"},[e._v(e._s(t.date))])])])}))],2)},r=[],s=(n("fb6a"),n("d4ec")),i=n("bee2"),o=n("99de"),c=n("7e84"),l=n("262e"),u=n("9ab4"),p=n("60a3"),v=n("1b11"),d=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.articleFuncs=new v["a"],e.articleList=[],e.pageSize=3,e.currentPage=1,e.totalPage=0,e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"created",value:function(){this.totalPage=this.articleList.length/this.pageSize}},{key:"mounted",value:function(){this.loadArticleData()}},{key:"onRouteChange",value:function(e){this.loadArticleData(e.query.type)}},{key:"loadArticleData",value:function(e){"string"===typeof e?this.articleList=this.articleFuncs.getArticlesByPath(e):document.body.clientWidth>600&&(this.articleList=this.articleFuncs.getAll())}},{key:"prevPage",value:function(){this.currentPage>1&&this.currentPage--}},{key:"nextPage",value:function(){this.currentPage!==this.totalPage&&this.currentPage++}},{key:"showArticles",get:function(){var e=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;return this.articleList.slice(e,t)}}]),t}(p["b"]);u["a"]([Object(p["c"])("$route",{immediate:!0})],d.prototype,"onRouteChange",null),d=u["a"]([p["a"]],d);var f=d,h=f,_=(n("edd0"),n("2877")),m=Object(_["a"])(h,a,r,!1,null,"5c33c9cc",null);t["default"]=m.exports},c09e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("配置")]),n("p",[e._v("springBoot启动必须配置数据源")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("server.port=8084\n4545fsdfsf45\n")])])])}],s=n("2877"),i={},o=Object(s["a"])(i,a,r,!1,null,null,null);t["default"]=o.exports},c0b3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("a-button",{staticStyle:{position:"absolute","z-index":"99",right:"4rem",top:"1rem"},attrs:{type:"ghost",shape:"circle",icon:"bars"},on:{click:function(t){e.dawerVisible=!e.dawerVisible}}}),n("router-view"),n("a-drawer",{attrs:{title:"Canvas Demos",width:"320",placement:"right",closable:!1,visible:e.dawerVisible},on:{close:e.onDrawerClose}},e._l(e.drawerData,(function(t,a){return n("div",{key:a,staticClass:"demo-list",attrs:{title:t.title},on:{click:function(n){return e.toDemoPage(t)}}},[n("span",{staticClass:"index",style:{background:e.randomColor()}},[e._v(" "+e._s(a+1)+" ")]),e._v(" "+e._s(t.title)+" ")])})),0)],1)},r=[],s=(n("99af"),n("caad"),n("b0c0"),n("2532"),n("d4ec")),i=n("bee2"),o=n("99de"),c=n("7e84"),l=n("262e"),u=n("9ab4"),p=n("60a3"),v=[{title:"canvas实现的动画效果合集 ",path:"/demo/canvas"},{title:"模仿华为手机充电界面动画",path:"/demo/battery"}],d=[{title:"Canvas彩色气泡上升效果",path:"/demo/canvas",name:""}],f=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.demoList=v,e.canvasDemosList=d,e.dawerVisible=!1,e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"randomColor",value:function(){var e=Math.floor(10*Math.random()+2)/10,t=function(){return~~(255*Math.random())};return"rgba(".concat(t(),", ").concat(t(),", ").concat(t(),", ").concat(e,")")}},{key:"onDrawerClose",value:function(){this.dawerVisible=!1}},{key:"toDemoPage",value:function(e){this.$router.push({path:e.path,query:{name:e.name}}).catch((function(e){}))}},{key:"drawerData",get:function(){return this.$route.path.includes("/demo/canvas")?this.canvasDemosList:this.demoList}}]),t}(p["b"]);f=u["a"]([p["a"]],f);var h=f,_=h,m=(n("3316"),n("2877")),b=Object(m["a"])(_,a,r,!1,null,"cd1f187e",null);t["default"]=b.exports},c1c5:function(e,t,n){e.exports=n.p+"img/1.86683083.png"},c2b4:function(e,t,n){var a={"./font/font.md":"8218","./serve/font.md":"c09e"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="c2b4"},c321:function(e,t,n){var a={"./Home.vue":"bb51","./demo.vue":"c0b3","./interview.vue":"8b48"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="c321"},c890:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a-row",{attrs:{id:"nav"}},[n("a-col",{staticStyle:{height:"100%"},attrs:{xs:{span:24},md:{span:12}}},[n("a-col",{staticStyle:{"padding-top":"2rem"},attrs:{xs:{span:24},md:{span:22}}},[n("h1",{staticClass:"white-shadow",staticStyle:{color:"white",cursor:"pointer"},on:{click:function(t){e.$router.push("/home").catch((function(e){}))}}},[e._v(" Focus On ")]),n("p",{staticClass:"white-shadow"},[e._v("前端、后端学习笔记，专注成就自我")])]),n("a-col",{staticStyle:{"max-width":"550px","margin-top":"10%"},attrs:{span:22,offset:1}},[n("home-navigator")],1)],1),n("a-col",{staticClass:"router-wrapper",class:{show:e.showRouterPage},attrs:{xs:{span:24},md:{span:12}}},[n("a-icon",{directives:[{name:"show",rawName:"v-show",value:e.isArticlePage,expression:"isArticlePage"}],staticClass:"backBtn",attrs:{type:"left-circle"},on:{click:e.routerBack}}),n("a-col",{staticClass:"router",class:{"markdown-body":e.isArticlePage},attrs:{span:24}},[n("router-view")],1)],1)],1)],1)},s=[],i=(n("caad"),n("2532"),n("d4ec")),o=n("bee2"),c=n("99de"),l=n("7e84"),u=n("262e"),p=n("9ab4"),v=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"navigation"},[e._l(e.pages,(function(t){return n("div",{key:t.name},[n("router-link",{staticClass:"home-card",attrs:{to:{path:t.path?t.path:"/home",query:{type:t.key}}}},[n("img",{staticClass:"card-img",attrs:{src:t.img,alt:"目录图片"}}),n("span",[e._v(e._s(t.name))])])],1)})),n("div",{staticClass:"links"},e._l(e.links,(function(t,a){return n("a-tooltip",{key:a,attrs:{title:t.name,placement:"top"}},[n("img",{staticClass:"link",attrs:{src:t.img},on:{click:function(n){return e.linkTo(t.path)}}})])})),1)],2)},f=[],h=(n("f5b2"),n("1b11")),_={pages:[{name:"前端·点滴",img:n("c1c5"),key:"font"},{name:"后端·笔记",img:n("619a"),key:"serve"},{name:"生活·工具",img:n("81e5"),key:"tool"},{name:"案例·DEMO",img:n("8efd"),path:"/demo"}],links:[{name:"Home",img:n("28ea"),path:"/home"},{name:"GitHub",img:n("19cc"),path:"https://github.com/Dengsuning"},{name:"简历",img:n("7215"),path:"/demo"}]},m=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.articleFuncs=new h["a"],e.pages=_.pages,e.links=_.links,e.tags=[],e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){this.tags=this.articleFuncs.getTags()}},{key:"linkTo",value:function(e){47===e.codePointAt(0)?this.$router.push(e).catch((function(e){return e})):window.open(e)}}]),t}(v["b"]);m=p["a"]([v["a"]],m);var b=m,g=b,y=(n("8688"),n("2877")),C=Object(y["a"])(g,d,f,!1,null,"5919c90b",null),O=C.exports,w=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.isArticlePage=!1,e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"routerBack",value:function(){this.$router.back()}},{key:"onRouteChange",value:function(e){this.isArticlePage=e.path.includes("/article/")}},{key:"showRouterPage",get:function(){var e=!1;return"/home"===this.$route.path?this.$route.query.type&&(e=!0):e=!0,e}}]),t}(v["b"]);p["a"]([Object(v["c"])("$route",{immediate:!0,deep:!0})],w.prototype,"onRouteChange",null),w=p["a"]([Object(v["a"])({components:{"home-navigator":O}})],w);var k=w,x=k,j=(n("5c0b"),Object(y["a"])(x,r,s,!1,null,null,null)),E=j.exports,S=(n("99af"),n("2909")),P=n("8c4f"),M=(n("d81d"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0"),n("c2b4")),A=M.keys().map((function(e){var t=e.replace("./","").replace(".md","");return{path:"/article/"+t,name:t.replace("/","_"),component:function(){return n("1817")("./post"+e.substring(1))}}})),N=n("8733"),B=n("c321"),R=B.keys().map((function(e){var t=e.replace("./","").replace(".vue","");if("demo"===t){var a=N.keys().map((function(e){var t=e.replace("./","").replace(".vue","").replace(/\/index$/,"");return{path:t,component:function(){return n("2d11")("./demoCmp"+e.substring(1))}}}));return{path:"/"+t,name:t.replace(/\//,"_"),component:function(){return n("2a68")("./views"+e.substring(1))},children:[].concat(Object(S["a"])(a),[{path:"",component:a[0].component}])}}return{path:"/"+t,name:t.replace(/\//,"_"),component:B(e).default||B(e)}}));a["a"].use(P["a"]);var D=[{path:"/",redirect:"/home"}].concat(Object(S["a"])(A),Object(S["a"])(R)),F=new P["a"]({mode:"hash",base:"/dsnblog/",routes:D}),$=F,L=n("2f62");a["a"].use(L["a"]);var U=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),V=(n("202f"),n("e4cb"),n("5efb")),T=n("e32c"),q=n("9571"),H=n("0c63"),G=n("681b"),W=n("9a63"),z=n("fbdf"),J=n("f933");a["a"].config.productionTip=!1,a["a"].use(V["a"]),a["a"].use(T["a"]),a["a"].use(q["a"]),a["a"].use(H["a"]),a["a"].use(G["a"]),a["a"].use(W["a"]),a["a"].use(z["a"]),a["a"].use(J["a"]),a["a"].config.productionTip=!1,new a["a"]({router:$,store:U,render:function(e){return e(E)}}).$mount("#app")},d48e:function(e,t,n){var a={"./":["0e5c"],"./bubble":["ebd3","chunk-52bf4e99"],"./bubble.ts":["ebd3","chunk-52bf4e99"],"./index":["0e5c"],"./index.vue":["0e5c"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="d48e",e.exports=r},edd0:function(e,t,n){"use strict";var a=n("9038"),r=n.n(a);r.a},f90f:function(e,t,n){}});
//# sourceMappingURL=app.13c255d1.js.map