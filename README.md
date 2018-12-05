# What's this
PVCount.js 是一个统计网页 Page View 的脚本，访问数据匿名存储于 Serverless 服务中。

# How to use
## Step 1. 在 *.html 页面中载入脚本

```
<script src="https://blog.5howel.com/js/PVCount_0.0.1.js"></script>
```


如：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div>content</div>
</body>
<script src="https://blog.5howel.com/js/PVCount_0.0.1.js"></script>
</html>
```

## Step 2. 复写定位样式(可选)
PVCount.js 载入后会在 dom 中插入一个 id 为 '___pv_footer' 的元素，默认样式定位于页面的右下角。

可通过改写 #___pv_footer 的 css 来自定义样式

如我的博客将该 dom 放置在了右上角，并复写了颜色与定位方式
```
#___pv_footer {
  color: rgb(90, 90, 90) !important;
  top: 10px !important;
  right: 14px !important;
  position: fixed !important;
}
```
![演示图](https://s1.ax1x.com/2018/12/06/FloLT0.jpg)

## Step 3. 没有第三步了了，甚至都不用第二步


