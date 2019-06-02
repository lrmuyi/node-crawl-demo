<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="createdAt" label="抓取日期" width="150"></el-table-column>
      <el-table-column prop="title" label="电影名称" width="150"></el-table-column>
      <el-table-column prop="director" label="导演" width="120"></el-table-column>
      <el-table-column prop="starring" label="热度" width="120"></el-table-column>
      <el-table-column prop="film_type" label="电影类型" width="120"></el-table-column>
      <el-table-column prop="score" label="评分" width="300"></el-table-column>
      <el-table-column prop="evaluation_count" label="评论人数" width="120"></el-table-column>
      <el-table-column prop="making_countries" label="制作国家" width="120"></el-table-column>
      <el-table-column prop="production_areas" label="拍摄地区" width="120"></el-table-column>
      <el-table-column prop="year_of_production" label="年份" width="120"></el-table-column>
      <el-table-column prop="updatedAt" label="更新日期" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
          <el-popover placement="top" width="160" :model="scope.row.visible">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="handleDeleteCancal(scope.row,scope.$index)">取消</el-button>
              <el-button type="primary" size="mini" @click="handleDeleteConfirm(scope.row,scope.$index)">确定</el-button>
              <!-- <el-button size="mini" type="text" @click="!scope.row.visible">取消</el-button> -->
              <!-- <el-button type="primary" size="mini" @click="!scope.row.visible">确定</el-button> -->

            </div>
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Api from '@/api/index'
export default {
  data () {
    return {
      loading: true,
      tableData: []
    }
  },
  created () {
    this.getMoviesList()
  },
  methods: {
    handleDeleteConfirm (row, index) {
      // this.row
      // return !row.visible
      this.tableData[index].visible = false
      // console.log(row, index)
      // console.log(row)
    },
    handleDeleteCancal (row, index) {
      // this.row
      this.tableData[index].visible = false

      console.log(row, index)
    },
    /**
     * @desc 调用api请求所有数据
     */
    getMoviesList () {
      this.loading = true
      Api.getMoviesList().then(res => {
        this.tableData = this.ProcessingData(res.results, 'visible', false)
        console.log(this.tableData)
        this.loading = false
      })
    },
    /**
     * @desc  数据清洗 添加popover状态
     * @params   Array
     * @params   String
     * @params   Number|String|Boolean
     * @returns   Array
     */
    ProcessingData (arr, attrs, value) {
      return arr.map(item => {
        item[attrs] = value
        return item
      })
    }
  }
}
</script>
