<template>
  <el-table :data="tableData"
            border
            style="width: 100%">
    createdAt
    <el-table-column prop="createdAt"
                     label="抓取日期"
                     width="150">
    </el-table-column>
    <el-table-column prop="title"
                     label="电影名称"
                     width="150">
    </el-table-column>
    <el-table-column prop="director"
                     label="导演"
                     width="120">
    </el-table-column>
    <el-table-column prop="starring"
                     label="热度"
                     width="120">
    </el-table-column>
    <el-table-column prop="film_type"
                     label="电影类型"
                     width="120">
    </el-table-column>
    <el-table-column prop="score"
                     label="评分"
                     width="300">
    </el-table-column>
    <el-table-column prop="evaluation_count"
                     label="评论人数"
                     width="120">
    </el-table-column>
    <el-table-column prop="making_countries"
                     label="制作国家"
                     width="120">
    </el-table-column>
    <el-table-column prop="production_areas"
                     label="拍摄地区"
                     width="120">
    </el-table-column>
    <el-table-column prop="year_of_production"
                     label="年份"
                     width="120">
    </el-table-column>
    <el-table-column prop="updatedAt"
                     label="更新日期"
                     width="120">
    </el-table-column>
    <el-table-column fixed="right"
                     label="操作"
                     width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)"
                   type="text"
                   size="small">查看</el-button>
        <el-button type="text"
                   size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>
