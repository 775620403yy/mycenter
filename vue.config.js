module.exports = {
  configureWebpack:{
      devServer:{
        host:'0.0.0.0',
        hot:true,
        disableHostCheck:true,
        //Mock接口编写的地方 
        //每次更改这个配置文件的时候，都必须重启项目
        before(app){
          // app.get('请求地址',(req,res)=>{
          //   res.json({
          //     xinxi
          //   })
          // })

          //用户信息池
          let userpoor=[
              {username:'xiaomu',password:'123456'},
              {username:'tim',password:'123456'}
          ]
          //注册接口
          app.get('/api/register',(req,res)=>{
            const {username,password}=req.query
            const userlength=userpoor.filter(v=>v.username==username).length
            if(userlength>0){
              res.json({
                success:false,
                message:'用户名已存在'
              })
            }else{
              res.json({
                success:true,
                message:'注册成功'
              })
            }
          })
          //登录接口
          let tokenkey = 'yyclass'
          app.get('/api/login',(req,res)=>{
            const {username,password}=req.query
            if(username=='xiaomu' && password=='123456' || username=='tim' && password=='123456'){
                res.json({
                  code:0,
                  message:'登陆成功',
                  token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
                })
            }else{
              res.json({
                code:1,
                message:'账号密码错误'
              })
            }
          })
          //获取轮播图接口
          app.get('/api/banner',(req,res)=>{
            res.json({
                data:[  {
                    url: 'https://www.mi.com/',
                    image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340'
                  },
                  {
                    url: 'https://www.mi.com/',
                    image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90'
                  },
                  {
                    url: 'https://www.mi.com/',
                    image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340'
                  }]
            })
        })
        //滚动分类接口
        app.get('/api/rollinglist',(req,res)=>{
          res.json({
              data:[
                  [
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                       {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&h=340',
                        label:'分类一'
                    },
                  ],
                  [
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                     {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                    {
                        url: 'https://www.mi.com/',
                        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8339fa1a6fb2c265b7453c7d426be7a5.jpg?thumb=1&w=1303&h=489&f=webp&q=90',
                        label:'分类一'
                    },
                  ],
                ]
            })
        })
        //获取分类页的分类接口
        app.get('/api/classify',(req,res)=>{
          switch(req.query.type){
              case '0':
              res.json({
                  data:[
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      
                  ]
              });
              break;
              case '1':
              res.json({
                  data: [
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ]
              });
              break;
              case '2':
              res.json({
                  data: [
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      }
                  ]
              });
              break;
              case '3':
              res.json({
                  data: [
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                  ]
              });
              break;
              case '4':
              res.json({
                  data: [
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ]
              });
              break;
              case '5':
              res.json({
                  data: [
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                  ]
              });
              break;
              case '6':
              res.json({
                  data: [
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ]
              });
              break;
            }
          })
        }
      }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
