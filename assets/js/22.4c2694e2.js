(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{605:function(t,e,r){"use strict";r.r(e);var o=r(4),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"idea使用和插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#idea使用和插件"}},[t._v("#")]),t._v(" IDEA使用和插件")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#flag"}},[t._v("flag")])]),r("li",[r("a",{attrs:{href:"#建立多级项目"}},[t._v("建立多级项目")])]),r("li",[r("a",{attrs:{href:"#插件"}},[t._v("插件")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"flag"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" flag")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/judasn/IntelliJ-IDEA-Tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/judasn/IntelliJ-IDEA-Tutorial"),r("OutboundLink")],1)])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/XFoOBeTaBwBAsRgadxMLfQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("教育邮箱免费申请JetBrains教育许可证"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.fuocu.cn/archives/jetbrains-crack",target:"_blank",rel:"noopener noreferrer"}},[t._v("JetBrains全系列软件激活教程激活码以及JetBrains系列软件汉化包"),r("OutboundLink")],1)])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.imooc.com/learn/924",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA神器使用技巧"),r("OutboundLink")],1)])]),t._v(" "),r("details",[r("summary",[r("b",[t._v("展开查看思维导图")])]),t._v(" "),r("img",{attrs:{src:"/images/IDEA使用技巧.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"建立多级项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#建立多级项目"}},[t._v("#")]),t._v(" 建立多级项目")]),t._v(" "),r("blockquote",[r("p",[t._v("特别说明：每个模块中的顶级包名（java目录下的包名）一定不能一样，否则编译器会把多个模块中的代码编译相互串连。\n如："),r("code",[t._v("src/main/java/com/bajins/demo")]),t._v("这里的"),r("code",[t._v("com/bajins/demo")]),t._v("就是顶级包名，\n应该加上当前项目名"),r("code",[t._v("src/main/java/com/bajins/demo/admin")])])]),t._v(" "),r("p",[r("strong",[t._v("创建顶级项目（根项目）")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("点击顶部菜单栏 "),r("code",[t._v("File")]),t._v(" -> "),r("code",[t._v("New")]),t._v(" -> "),r("code",[t._v("Project")]),t._v("（或者在欢迎页面点击"),r("code",[t._v("Create New Project")]),t._v("） ->\n"),r("code",[t._v("Maven")]),t._v("（不要勾选"),r("code",[t._v("Create from archetype")]),t._v("） -> "),r("code",[t._v("Next")])])]),t._v(" "),r("li",[r("p",[t._v("填写 "),r("code",[t._v("Name")]),t._v("（项目名）、"),r("code",[t._v("GroupId")]),t._v("（包名）、"),r("code",[t._v("Artifact")]),t._v("（项目名），点击 "),r("code",[t._v("Next")])])]),t._v(" "),r("li",[r("p",[t._v("打开 "),r("code",[t._v("pom.xml")]),t._v(" ，添加 "),r("code",[t._v("<packaging>pom</packaging>")]),t._v("（聚合工程或传递依赖用），如果有了就不用添加")])]),t._v(" "),r("li",[r("p",[t._v("删除除了 "),r("code",[t._v("pom.xml")]),t._v(" 以外的其他文件和目录（包括"),r("code",[t._v("src")]),t._v("）")])])]),t._v(" "),r("p",[r("strong",[t._v("创建子项目（二级项目）")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("在顶级项目名上点击"),r("kbd",[t._v("右键")]),t._v("弹出菜单（或者点击顶部菜单栏"),r("code",[t._v("File")]),t._v("） -> "),r("code",[t._v("New")]),t._v(" -> "),r("code",[t._v("Module")]),t._v(" ->\n"),r("code",[t._v("Maven")]),t._v("（不要勾选"),r("code",[t._v("Create from archetype")]),t._v("） -> "),r("code",[t._v("Next")])])]),t._v(" "),r("li",[r("p",[t._v("填写 "),r("code",[t._v("Name")]),t._v("（项目名）、"),r("code",[t._v("GroupId")]),t._v("（包名）、"),r("code",[t._v("Artifact")]),t._v("（项目名） -> 点击 "),r("code",[t._v("Next")]),t._v(" ->\n选择 "),r("code",[t._v("Parent")]),t._v("（上级项目）放在最后操作是因为修改 "),r("code",[t._v("Name")]),t._v(" 时会自动变化")])]),t._v(" "),r("li",[r("p",[t._v("打开 "),r("code",[t._v("pom.xml")]),t._v(" ，添加 "),r("code",[t._v("<packaging>pom</packaging>")]),t._v("（聚合工程或传递依赖用）")])]),t._v(" "),r("li",[r("p",[t._v("删除除了 "),r("code",[t._v("pom.xml")]),t._v(" 以外的其他文件和目录（包括"),r("code",[t._v("src")]),t._v("）")])])]),t._v(" "),r("p",[r("strong",[t._v("创建子模块（最后一级项目）")])]),t._v(" "),r("blockquote",[r("p",[t._v("如果还需要创建下级项目，重复创建子项目的操作即可")])]),t._v(" "),r("blockquote",[r("p",[t._v("创建子模块只需要重复创建子项目，但是不要删除任何其他文件和目录，也不要添加"),r("code",[t._v("<packaging>pom</packaging>")])])]),t._v(" "),r("details",[r("summary",[r("b",[t._v("展开查看示例结构")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("demo                        # 顶级项目（根项目）\n│  pom.xml\n│  \n├─admin                     # 二级项目\n│  │  pom.xml\n│  │  \n│  ├─admin-api              # 二级项目模块\n│  │  │  pom.xml\n│  │  │  \n│  │  └─src\n│  │      ├─main\n│  │      │  ├─java\n│  │      │  └─resources\n│  │      └─test\n│  │          └─java\n│  └─admin-web              # 二级项目模块\n│      │  pom.xml\n│      │  \n│      └─src\n│          ├─main\n│          │  ├─java\n│          │  └─resources\n│          └─test\n│              └─java\n└─buyer                     # 二级项目\n    │  pom.xml\n    │  \n    ├─shop                  # 三级项目\n    │  │  pom.xml\n    │  │  \n    │  ├─shop-api           # 三级项目模块\n    │  │  │  pom.xml\n    │  │  │  \n    │  │  └─src\n    │  │      ├─main\n    │  │      │  ├─java\n    │  │      │  └─resources\n    │  │      └─test\n    │  │          └─java\n    │  └─shop-client        # 三级项目模块\n    │      │  pom.xml\n    │      │  \n    │      └─src\n    │          ├─main\n    │          │  ├─java\n    │          │  └─resources\n    │          └─test\n    │              └─java\n    └─user                  # 三级项目\n        │  pom.xml\n        │  \n        ├─user-api          # 三级项目模块\n        │  │  pom.xml\n        │  │  \n        │  └─src\n        │      ├─main\n        │      │  ├─java\n        │      │  └─resources\n        │      └─test\n        │          └─java\n        └─user-client       # 三级项目模块\n            │  pom.xml\n            │  \n            └─src\n                ├─main\n                │  ├─java\n                │  └─resources\n                └─test\n                    └─java\n")])])])]),t._v(" "),r("h2",{attrs:{id:"插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_37645838/article/details/85953193",target:"_blank",rel:"noopener noreferrer"}},[t._v("实用IDEA工具"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Free Mybatis plugin")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://gitee.com/wuzhizhan/free-idea-mybatis",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/wuzhizhan/free-idea-mybatis"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("mybatis-lite")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mustfun/mybatis-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mustfun/mybatis-plus"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("mybatis-plus")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/kana112233/mybatis-plus-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kana112233/mybatis-plus-plugin"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("MyBatisCodeHelper-Pro")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://gejun123456.github.io/MyBatisCodeHelper-Pro/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://brucege.com/pay/getfreetrial?",target:"_blank",rel:"noopener noreferrer"}},[t._v("MybatisCodeHelperPro试用key获取"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhile.io/categories/software-debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhile.io/categories/software-debug"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-7690faea398dd0c6.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("MyBatis Log Plugin")])]),t._v(" "),r("blockquote",[r("p",[t._v("直接将Mybatis执行的sql脚本显示出来，无需处理，可以直接复制出来执行")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/kookob/mybatis-log-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kookob/mybatis-log-plugin"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v(".ignore")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/JetBrains/idea-gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/JetBrains/idea-gitignore"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("生成各种ignore文件，一键创建git ignore文件的模板，免得自己去写")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://plugins.jetbrains.com/files/7495/screenshot_14958.png",alt:"https://upload-images.jianshu.io/upload_images/11962894-754e5940196db0ce.gif"}})]),t._v(" "),r("p",[r("strong",[t._v("Add to gitignore")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/fallenprogrammr/addtogitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/fallenprogrammr/addtogitignore"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("在项目视图中右键单击文件/目录并将其添加到"),r("code",[t._v(".gitignore")])])]),t._v(" "),r("p",[r("strong",[t._v("Maven Helper")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/krasa/MavenHelper",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/krasa/MavenHelper"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("一键查看maven依赖，查看冲突的依赖，一键进行exclude依赖")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000017542396",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Maven Helper解决Maven依赖冲突"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://plugins.jetbrains.com/files/7179/screenshot_19711.png",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("GsonFormat")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/zzz40500/GsonFormat",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zzz40500/GsonFormat"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("google出的一键根据json文本生成java类，非常方便")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-09e7a540af46231f.png",alt:"https://plugins.jetbrains.com/files/7654/screenshot_15729.png"}})]),t._v(" "),r("p",[r("strong",[t._v("RoboPOJOGenerator")])]),t._v(" "),r("blockquote",[r("p",[t._v("从JSON生成Java和Kotlin POJO文件：GSON，FastJSON，AutoValue（GSON），Logan Square，Jackson，空注释模板。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/robohorse/RoboPOJOGenerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/robohorse/RoboPOJOGenerator"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://github.com/robohorse/RoboPOJOGenerator/blob/master/images/tutorial_v201.gif?raw=true",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("Json2Pojo")])]),t._v(" "),r("blockquote",[r("p",[t._v("允许使用GSON注释和访问器从JSON轻松创建Java POJO。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/8533-json2pojo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/8533-json2pojo"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("JSON-P to JSON generator")])]),t._v(" "),r("blockquote",[r("p",[t._v("使用"),r("a",{attrs:{href:"https://github.com/eclipse-ee4j/jsonp",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON-P"),r("OutboundLink")],1),t._v("在Java文件中自动创建"),r("code",[t._v("toJson()")]),t._v("方法")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/13724-json-p-to-json-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/13724-json-p-to-json-generator"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Toolkit")])]),t._v(" "),r("blockquote",[r("p",[t._v("JavaBean复制为Json字符串，Json字符串格式化，Json字符串转换为JavaBean，Json压缩")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/liuzhihangs/toolkit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/liuzhihangs/toolkit"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("JsonToKotlinClass")])]),t._v(" "),r("blockquote",[r("p",[t._v("从JSON字符串生成Kotlin")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wuseal/JsonToKotlinClass",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuseal/JsonToKotlinClass"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("bean2json")])]),t._v(" "),r("blockquote",[r("p",[t._v("把bean对象转json")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/dakuohao/bean2json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dakuohao/bean2json"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Java Bean To Json Tool")])]),t._v(" "),r("blockquote",[r("p",[t._v("一个简单的Json工具将Java Bean转换为Json或Json-Schema")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/12019-java-bean-to-json-tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/12019-java-bean-to-json-tool"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("BoB Beans Builder")])]),t._v(" "),r("blockquote",[r("p",[t._v("使用标准的getter，hashcode和equals以及生成器生成模式化的类。它非常适合生成的JSON序列化类或数据传输对象。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/12032-bob-the-builder-of-beans",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/12032-bob-the-builder-of-beans"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://bytebucket.org/atlassianlabs/bob-the-builder-of-beans/raw/a5ab4be99a25f07cee5e29595b3de84bdebd05b2/bob.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("Code generator")])]),t._v(" "),r("blockquote",[r("p",[t._v("提供操作以从自定义模板生成代码")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/13595-code-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/13595-code-generator"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("codehelper.generator")])]),t._v(" "),r("blockquote",[r("p",[t._v("生成器，可以更轻松，更高效地生成代码。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/zhengjunbase/codehelper.generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zhengjunbase/codehelper.generator"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://github.com/zhengjunbase/codehelper.generator/raw/master/setter.gif",alt:"https://plugins.jetbrains.com/files/8640/screenshot_16302.png"}})]),t._v(" "),r("p",[r("strong",[t._v("GenerateAllSetter")])]),t._v(" "),r("blockquote",[r("p",[t._v("一键调用一个对象的所有set方法并且赋予默认值 在对象字段多的时候非常方便")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/gejun123456/intellij-generateAllSetMethod",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/gejun123456/intellij-generateAllSetMethod"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-bd972369154914fa.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("POJO Generator")])]),t._v(" "),r("blockquote",[r("p",[t._v("从数据库表生成JPA实体POJO")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Jukien/POJO-Generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Jukien/POJO-Generator"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Protobuf Support")])]),t._v(" "),r("blockquote",[r("p",[t._v("Google Protobuf对JetBrains产品的支持，Java序列化库，原型编译器，代码生成器")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/protostuff/protobuf-jetbrains-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/protostuff/protobuf-jetbrains-plugin"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("GoogleProtobufTool")])]),t._v(" "),r("blockquote",[r("p",[t._v("protobuf生成java文件的IDEA插件.支持生成一个或者多个文件.")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/13562-googleprotobuftool",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/13562-googleprotobuftool"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Lombok plugin")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mplushnikov/lombok-intellij-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mplushnikov/lombok-intellij-plugin"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("支持lombok的各种注解，从此不用写getter setter这些 可以把注解还原为原本的java代码,除此之外还有其他更多注解以减少代码")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-59615f71a052e3b4.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("Translation")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/8579-translation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/8579-translation"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("最好用的翻译插件，功能很强大，界面很漂亮")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-1f7936b32d920801.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("probie")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/13397-probie",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/13397-probie"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("这款插件可以让英语没那么好的开发者在定义类、方法、参数的时候更为合理，增加代码可读性。同时，也可以帮助我们快速的翻译英文注释来理解源码内容！")])]),t._v(" "),r("p",[r("strong",[t._v("CamelCase")])]),t._v(" "),r("blockquote",[r("p",[t._v("命名风格转换插件，可以在 kebab-case，SNAKE_CASE，PascalCase，camelCase，snake_case 和 空格风格之间切换。\n快捷键苹果为"),r("kbd",[t._v("⇧")]),t._v(" + "),r("kbd",[t._v("⌥")]),t._v(" + "),r("kbd",[t._v("U")]),t._v("，windows下为"),r("kbd",[t._v("Shift")]),t._v(" + "),r("kbd",[t._v("Alt")]),t._v(" + "),r("kbd",[t._v("U")]),t._v("。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/netnexus/camelcaseplugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/netnexus/camelcaseplugin"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("String Manipulation")])]),t._v(" "),r("blockquote",[r("p",[t._v("强大的字符串转换工具，驼峰、大小写、连接符等")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/2162",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/2162"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("FindBugs-IDEA")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/3847-findbugs-idea",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/3847-findbugs-idea"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("检测代码中可能的bug及不规范的位置，检测的模式相比p3c更多，写完代码后检测下 避免低级bug，强烈建议用一下，一不小心就发现很多老代码的bug")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-971a0da4b7fde363.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("p3c")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/alibaba/p3c",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alibaba/p3c"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("阿里巴巴出品的java代码规范插件,可以扫描整个项目 找到不规范的地方 并且大部分可以自动修复")])]),t._v(" "),r("p",[r("strong",[t._v("Alibaba Java Coding Guidelines")])]),t._v(" "),r("blockquote",[r("p",[t._v("阿里巴巴代码规范检查插件，当然规范可以参考《阿里巴巴Java开发手册》")])]),t._v(" "),r("p",[r("strong",[t._v("CheckStyle-IDEA")])]),t._v(" "),r("blockquote",[r("p",[t._v("代码规范检查")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/1065",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/1065"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("MetricsReloaded")])]),t._v(" "),r("blockquote",[r("p",[t._v("代码复杂度检查")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/93",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/93"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Statistic")])]),t._v(" "),r("blockquote",[r("p",[t._v("代码统计")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/4509",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/4509"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("VisualVM Launcher")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/krasa/VisualVMLauncher",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/krasa/VisualVMLauncher"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("运行java程序的时候启动visualvm，方便查看jvm的情况 比如堆内存大小的分配，某个对象占用了多大的内存，jvm调优必备工具")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/VisualVM-Launcher.gif",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("Rainbow Brackets")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/10080-rainbow-brackets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/10080-rainbow-brackets"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("彩虹颜色的括号，看着很舒服 敲代码效率变高")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11962894-e06934b99588f66c.png",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("CodeGlance")])]),t._v(" "),r("blockquote",[r("p",[t._v("代码编辑区迷你缩放插件，可以进行代码的全局预览。")])]),t._v(" "),r("p",[r("strong",[t._v("Markdown Navigator")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vsch/idea-multimarkdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vsch/idea-multimarkdown"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("带有GFM 的Markdown插件和匹配的预览样式。")])]),t._v(" "),r("p",[r("strong",[t._v("IDEA Mind Map")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/raydac/netbeans-mmd-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/raydac/netbeans-mmd-plugin"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("思维导图支持多种格式文件的导入和导出，同步更新时便于合并「以文本格式保存，支持 markdown 的语法，方便解决冲突」")])]),t._v(" "),r("p",[r("strong",[t._v("ASM Bytecode Outline")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/melix/asm-bytecode-intellij",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/melix/asm-bytecode-intellij"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("查看 Class 类的字节码")])]),t._v(" "),r("p",[r("strong",[t._v("stackoverflow")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/gejun123456/IntellijGoToStackOverFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/gejun123456/IntellijGoToStackOverFlow"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("这个插件对于查找问题特别方便，定位异常，点击右键快速跳转到"),r("code",[t._v("stackoverflow")]),t._v("网站，每次至少为你节约了"),r("code",[t._v("10")]),t._v("秒。")])]),t._v(" "),r("p",[r("strong",[t._v("Codota")])]),t._v(" "),r("blockquote",[r("p",[t._v("代码智能提示")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7638-codota",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/7638-codota"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://plugins.jetbrains.com/files/7638/screenshot_19077.png",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("Presentation Assistant")])]),t._v(" "),r("blockquote",[r("p",[t._v("快捷键展示")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7345-presentation-assistant",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/7345-presentation-assistant"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Presentation Assistant")])]),t._v(" "),r("blockquote",[r("p",[t._v("显示调用的操作的名称和键盘快捷键。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/11631-presentation-assistant",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/11631-presentation-assistant"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Key promoter X")])]),t._v(" "),r("blockquote",[r("p",[t._v("很多人不愿意切换 IDE 就是因为快捷键的习惯问题。刚好这个插件可以提醒快捷键，有代入感，提醒的多了你就会了。\n对于新手建议安装熟悉一下快捷键。")])]),t._v(" "),r("p",[r("strong",[t._v("Key promoter")])]),t._v(" "),r("blockquote",[r("p",[t._v("快捷键提示插件，会统计你鼠标点击某个功能的次数，提示你应该用什么快捷键，帮助记忆快捷键，等熟悉了之后可以关闭掉这个插件。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/4455",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/4455"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("IDE Features Trainer")])]),t._v(" "),r("blockquote",[r("p",[t._v("可以在IDE内部以交互方式学习基本快捷方式和基本功能。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/8554-ide-features-trainer",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/8554-ide-features-trainer"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("JavaDoc")])]),t._v(" "),r("blockquote",[r("p",[t._v("快速生成 java 注释的插件有很多，评分比较高的就是 JavaDoc ，注意作者为 Sergey Timofiychuk 。通过快捷 就可以生成注释。mac 的快捷键需要自己去设置， windows 快捷键如下：")])]),t._v(" "),r("ul",[r("li",[t._v("要为活动元素生成 javadocs，请按 shift + alt + G。")]),t._v(" "),r("li",[t._v("要为当前 java 文件中的所有元素生成 javadocs，请按 shift + ctrl + alt + G。")]),t._v(" "),r("li",[t._v("删除当前/选定元素上的 javadocs 请按 shift + alt + Z。")]),t._v(" "),r("li",[t._v("删除当前类所有元素上的 javadocs：请按 shift + ctrl + alt + Z。")])]),t._v(" "),r("p",[r("strong",[t._v("Git Commit Template")])]),t._v(" "),r("blockquote",[r("p",[t._v("Git格式化模版，你可以按照实际情况格式化你的提交信息")])]),t._v(" "),r("p",[r("strong",[t._v("Git Flow Integration")])]),t._v(" "),r("blockquote",[r("p",[t._v("Git Flow 的图形界面操作")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7315-git-flow-integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/7315-git-flow-integration"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Eclipse Code Formatter")])]),t._v(" "),r("blockquote",[r("p",[t._v("使用 Eclipse 的代码格式化风格，在一个团队中如果公司有规定格式化风格，这个可以使用。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/6546",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/6546"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Jindent-Source Code Formatter")])]),t._v(" "),r("blockquote",[r("p",[t._v("自定义类、方法、doc、变量注释模板")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://plugins.jetbrains.com/plugin/2170",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://plugins.jetbrains.com/plugin/2170"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Properties to YAML Converter")])]),t._v(" "),r("blockquote",[r("p",[t._v("把 Properties 的配置格式改为 YAML 格式")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/8000-properties-to-yaml-converter",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/8000-properties-to-yaml-converter"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("mongo4idea")])]),t._v(" "),r("blockquote",[r("p",[t._v("mongo客户端")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/dboissier/mongo4idea",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dboissier/mongo4idea"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("iedis")])]),t._v(" "),r("blockquote",[r("p",[t._v("redis客户端")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/9228-iedis",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/9228-iedis"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Cloud Toolkit")])]),t._v(" "),r("blockquote",[r("p",[t._v("帮助开发者更高效地开发、测试、诊断并部署应用。通过插件，可以将本地应用一键部署到任意服务器")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/11386-alibaba-cloud-toolkit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/11386-alibaba-cloud-toolkit"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("RestfulToolkit")])]),t._v(" "),r("blockquote",[r("p",[t._v("一套RESTful服务开发辅助工具集")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/10292-restfultoolkit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/10292-restfultoolkit"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("RESTMan")])]),t._v(" "),r("blockquote",[r("p",[t._v("RESTful接口调试工具, 支持json和xml格式报文，借助原生编辑器实现语法高亮和语法检查。")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/13466-restman",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.jetbrains.com/plugin/13466-restman"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://plugins.jetbrains.com/files/13466/screenshot_20629.png",alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);