<template>
    <!-- <div class="search"></div> -->
    <div class="bigContainer">
  <div class="containerC">

  <el-container class="el_container">
  <el-aside width="220px" height="280px"><img :src="imgUrl1" width="210px" height="230px" display:inline-block></el-aside>
  <el-container>
 <el-main>
   <div class="actTitle"><p class="text-actTitle">活动名称：快乐running</p></div>
   <div class="actTitle"><p class="text-actTitle">活动时间：2020年9月26日&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp活动地点：华中师范大学校本部</p></div>
   <div class="actContent"><p class="text-actContent">活动内容：受换季影响，近期武汉天气忽冷忽热，极易受寒，为了增强同学们的身体素质，加强免疫力，华中师范大学在校本部开展每日的快乐running活动.我们决定用多样化的运动形式，带给同学不一样的运动体验。 </p></div>
</el-main>
  </el-container>
</el-container>

<el-container>
<el-aside width="220px" height="280px"><img :src="imgUrl2" width="210px" height="230px" display:inline-block></el-aside>
  <el-container>
    <el-main>
         <div class="actTitle"><p class="text-actTitle">活动名称：华中师范大学开学开学典礼</p></div>
         <div class="actTitle"><p class="text-actTitle">活动时间：2020年9月26日&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp活动地点：华中师范大学南湖校区</p></div>
         <div class="actContent"><p class="text-actContent">活动内容：新学期，新气象，首先祝大家开学快乐！金秋九月，我们重新相聚在校园，让我们为相遇干杯，为梦想启航 </p></div>
    </el-main>
  </el-container>
</el-container>

<el-container>
<el-aside width="220px" height="280px"><img :src="imgUrl3" width="210px" height="230px" display:inline-block></el-aside>
  <el-container>
    <el-main>
        <div class="actTitle"><p class="text-actTitle">活动名称：华中师范大学入学须知 </p></div>
        <div class="actTitle"><p class="text-actTitle">活动时间：2020年9月26日&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp活动地点：华中师范大学南湖校区</p></div>
        <div class="actContent"><p class="text-actContent">活动内容：华中师范大学为新入学的同学们特别举办的入学须知的活动，让大家能够更加了解华中师范大学背后的历史底蕴，环境文化，居住生活，使得大家快速得适应新生活，开始新学期，赢得新梦想！ </p></div>
    </el-main>
  </el-container>
</el-container>

<el-container>
<el-aside width="220px" height="280px"><img :src="imgUrl4" width="210px" height="230px" display:inline-block></el-aside>
  <el-container>
    <el-main>
         <div class="actTitle"><p class="text-actTitle" >活动名称:华中师范大学迎新晚会</p></div>
         <div class="actTitle"><p class="text-actTitle">活动时间：2020年9月26日&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp活动地点：华中师范大学南湖校区</p>：</div>
         <div class="actContent"><p class="text-actContent">活动内容：为了给金秋的开学日增加属于当代大学生别样的活力，由人工智能教育学部主办，伍伦贡联合研究院参与的迎新晚会已经来了！！劲歌热舞、小品相声，只要你敢想，只要你大胆表演，舞台属于你 </p></div>
    </el-main>
  </el-container>
</el-container>
    </div>
         <div class = "search_input_btn">
           <div class="search_input">
            <el-input v-model="input" placeholder="请输入内容" ></el-input>
            </div>
            <el-button @click="handleBtnClick" size="medium" type="primary" class="search_btn">搜索</el-button>
          </div>

          <div class="swiper">
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in image_list" :key="item.id">
              <img :src="item.url" width="560px" height="350px" >
              </el-carousel-item>
            </el-carousel>
            <el-divider></el-divider>
          </div>


          <div class="introCCNU">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item  class="introTitle" title="掌上华师" name="1">
                   <div class="introContent">掌上华师系统：服务华师在校师生，于2016年9月正式开始在华中师范大学投入使用。</div>
                   <div class="introContent">在学校的大力支持下，经过四年多的正式运营，本系统对应的微信服务号“掌上华师”截止到今年8月份已经吸引了40000以上的校内关注量。</div>
              </el-collapse-item>
              <el-collapse-item title="招新 | 掌上华师" name="2">
                   <div>招聘职位众多</div>
                   <div>前端——桥梁、后端——基石、数据组——分析、运营组——信息通道、产品组——粘合、设计组——多元</div>
              </el-collapse-item>
              <el-collapse-item title="掌上华师报名方式" name="3">
                   <div>微信扫码进群</div>
                   <div>进行面试</div>
                   <div>进入实习期</div>
               </el-collapse-item>
               <el-collapse-item title="掌上华师————我们等你！" name="4">
                   <div>等你等你等你</div>
                   <div>截止日期：2020年10月</div>
               </el-collapse-item>
            </el-collapse>
          </div>
    </div>
</template>

<script>
export default {
data(){
  return{
    imgUrl1:require("@/assets/1.jpg"),
    imgUrl2:require("@/assets/2.jpg"),
    imgUrl3:require("@/assets/3.jpg"),
    imgUrl4:require("@/assets/4.jpg"),
    image_list: [ {url: require("@/assets/11.jpg"), id: 1 }, {url: require("@/assets/22.jpg"), id: 2},  {url: require("@/assets/3.jpg"), id: 3}]
  }
}  
}
</script>

<style>
/* .introTitle{
  font-size: 15px;
  color: #333;
  height: 30px;
} */
.text-actContent{
  text-align: center;
  color: #606266;
  font-size: 15px;
  line-height: 30px;
}
.introCCNU{
  float: left;
  height: 400px;
  width: 560px;
  /* border: hotpink solid 1px; */
}
.swiper{
  float: left;
  height: 350px;
  width: 560px;
}
.search_input_btn{
    float: left;
    width: 500px;
    height: 10%;
    /* border: 1px solid red; */
    margin-left: 25px;
    margin-top: 170px;
  }
  .search_btn {
    float: left;
    width: 120px;
    height: 40px;
    margin-left: 30px;
    /*border: 1px solid black;*/
  }
  .search_input {
    float: left;
    width: 350px;
    height: 40px;
    /* border:1px solid red; */
  }
.buttonCSS{
  float: left;
  width: 60px;
  height: 30px;
}
.textCSS{
  width: 300px;
  height: 50px;
  float: left;
}
.bigContainer{
  width: 1500px;
  height: 1500px;
  /* border:rebeccapurple solid 5px; */
}
.text-actTitle{
  font-family:"Hiragino Sans GB";
  font-size: 15px ;
  font-weight: 500;
  line-height:1.5;
  color:#333;
  text-align: center;
}
.el-container{
  width: 750px;
  height: 280px;
}

.search{
  float: left;
  width: 450px;
  height: 60px;
  margin-top: 150px;
  /* border:rebeccapurple dotted 5px; */
}

.actTitle{
  float:left;
  /* border:black solid 2px; */
  width: 500px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

}

.actContent{
  float:left;
  /* border:orange solid 2px; */
  width: 500px;
  height: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

  .containerC{
    margin-top: 150px;
    margin-left: 50px;
    margin-right: 100px;
    float: left;
    /* border: cornflowerblue solid 2px; */

  }
  .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    border:red solid 2px;
    text-align: center;
    line-height: 60px;
  }

  .el-footer{
    line-height: 100px;
    /* background-color: #B3C0D1; */
    color: #333;
    border:yellow solid 2px;
    text-align: center;
    line-height: 100px;
  }

  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    /* border:red solid 2px; */
    float: left;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    float: left;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
