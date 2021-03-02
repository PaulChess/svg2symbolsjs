# svg2symbolsjs
将svg图标批量处理成svg-symbols.js

1. 所有的svg图标都放置在`assets/svg`目录下
2. 运行脚本放置在build文件夹中，其中`export.js`用于压缩svg图标，`gulpfile.js`为主要的将svg图标批量处理成svg-symbols.js的程序
   执行命令:
   ```javascript
   npm run build
   ```
3. 最终生成的文件位于`src/out2/svg-symbols.js`,是压缩后的js文件，拷贝到项目中使用即可。

author: jiaqi shen

### 有关svg的一些资料
1. https://fvsch.com/svg-icons
2. https://zhuanlan.zhihu.com/p/258796445