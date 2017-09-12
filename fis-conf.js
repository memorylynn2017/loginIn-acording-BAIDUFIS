//项目根目录：FIS3 配置文件（默认fis-conf.js）所在的目录为项目根目录。


fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {
    useHash: true
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

// You need install it.
// npm i fis-optimizer-html-minifier [-g]
//
fis.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: fis.plugin('html-minifier')
});

//在这里设置，FIS的基础语法一般就是
//fis.match('应对文件'，{配置信息，使用什么样的插件能及插件的配置})

//// 加 md5
// fis.match('*.{js,css,png}', {
//   useHash: true
// });

// 启用 fis-spriter-csssprites 插件
// fis.match('::package', {
//   spriter: fis.plugin('csssprites')
// });

// 对 CSS 进行图片合并
// fis.match('*.css', {
//   // 给匹配到的文件分配属性 `useSprite`
//   useSprite: true
// });

// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   // fis-optimizer-clean-css 插件进行压缩，已内置
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   // fis-optimizer-png-compressor 插件进行压缩，已内置
//   optimizer: fis.plugin('png-compressor')
// });


// 可能有时候开发的时候不需要压缩、合并图片、也不需要 hash。那么给上面配置追加如下配置；

// fis.media('debug').match('*.{js,css,png}', {
//   useHash: false,
//   useSprite: false,
//   optimizer: null
// })

// fis3 release debug 启用 media debug 的配置，覆盖上面的配置，把诸多功能关掉。
// 
// 
// 
// 可能上传测试机是最后联调时才会有的，更好的做法是设置特定 media。

// 其他配置
// ...
// fis.media('qa').match('*', {
//   deploy: fis.plugin('http-push', {
//     receiver: 'http://cq.01.p.p.baidu.com:8888/receiver.php',
//     to: '/home/work/htdocs' // 注意这个是指的是测试机器的路径，而非本地机器
//   })
// });
// fis3 release qa 上传测试机器
// fis3 release 产出到本地测试服务器根目录
// 
// fis3 release -d /Users/my-name/work/htdocs
// 如果想执行 fis3 release 直接发布到此目录下，可在配置文件配置；

// fis.match('*', {
//   deploy: fis.plugin('local-deliver', {
//     to: '/Users/my-name/work/htdocs'
//   })
// })
