<template>

  <div class="container">
    
    <!-- <div class="big_title">
      B端-活动管理系统
    </div> -->

    <div class="navi">
      <el-col :span="24">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#606266"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item  index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>活动列表</span>
        </template>
      </el-menu-item>
      

      <el-menu-item index="2" @click="push_task">
        <i class="el-icon-menu"></i>
        <span slot="title">发布活动</span>
      </el-menu-item>


      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">待添加功能</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">待添加功能</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </div>




    <div class="table">
      <el-table
    :data="tableData"
    style="font-size:16px"
    :row-style="rowStyle">
    <el-table-column
      label="活动名称"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-film"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="活动时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="活动创建者"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

        <el-table-column
      label="活动状态"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-loading "></i>
        <span style="margin-left: 10px">{{ scope.row.conditon }}</span>
      </template>
    </el-table-column>

        <el-table-column
      label="活动时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>




  <el-dialog
  title="发布活动"
  :visible.sync="task_diglog"
  width="30%"
  :before-close="handleClose">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动地点">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="华中师范大学南湖校区" value="wuhan"></el-option>
      <el-option label="华中师范大学校本部" value="wuhan"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

  <el-form-item label="报名时间">
    <el-col :span="11">
       <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
       <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

  <el-form-item label="人数上限">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="签到方式">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="网上签到" name="type"></el-checkbox>
      <el-checkbox label="现场签到" name="type"></el-checkbox>
      <el-checkbox label="免签到" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

<el-form-item label="签到时间">
    <el-col :span="11">
       <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>


  <el-form-item label="活动内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    
    <el-alert
    title="创建成功"
    v-if="msg_diglog"
    type="success"
    show-icon>
    </el-alert>
    
    <el-button @click="undo">取消</el-button>
  </el-form-item>
</el-form>
 
  </el-dialog>
    
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        task_diglog: false,
        msg_diglog:false,
        tableData: [{
          date: '快乐running',
          time:'2020-9-26',
          name: '伍伦贡联合研究院辅导员',
          address: '联系方式：138xxx',
          conditon:'进行中',
        }, {
          date: '华师开学典礼',
          time:'2020-9-20',
          name: '华中师范大学团委',
          address: '联系方式：138xxx',
          conditon:'进行中',
        }, {
          date: '华中师范大学讲座',
          time:'2020-9-15',
          name: '伍伦贡联合研究院学生会',
          address: '联系方式：138xxx',
          conditon:'已完成',
        }, {
          date: '入学须知',
          time:'2020-9-13',
          name: '华中师范大学社团',
          address: '联系方式：138xxx',
          conditon:'已完成',
        },
        {
          date: 'happy activities',
          time:'2020-9-11',
          name: '华师教师',
          address: '联系方式：138xxx',
          conditon:'已完成',
        },
]
      }
    },
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.vvv = true;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      push_task() {
        // console.log("hello");
        this.task_diglog = true
      },
      undo() {
        this.task_diglog = false;
        this.msg_diglog = false;
      },
      onSubmit() {
        this.mag_diglog=true;
        console.log(this.form.region);
        this.msg_diglog=true;
      },
      rowStyle(row, rowIndex) {

        return {"height":"90px" }
      //"background-color":"#ecf5ff", 
      }

  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    margin-top: 100px;
    /* border: 1px solid red; */
  }
  .navi {
    width: 300px;
    height: 500px;
    margin-left: 50px;
    /* border: 1px solid yellow; */
    float: left;
  }
  .table {
    width: 1100px;
    height: 500px;
    /* border: 1px solid grey; */
    float: left;
  }
  .el-menu-vertical-demo {
    height: 500px;
  }


</style>