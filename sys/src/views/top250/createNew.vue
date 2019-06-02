<template>
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="电影名称">
        <el-input v-model="sizeForm.title"></el-input>
      </el-form-item>
      <el-form-item label="导演">
        <el-input v-model="sizeForm.director"></el-input>
      </el-form-item>
      <el-form-item label="电影热度">
        <el-input v-model="sizeForm.starring"></el-input>
      </el-form-item>
      <el-form-item label="电影类型">
        <el-select v-model="sizeForm.film_type" placeholder="请选择电影类型">
          <el-option label="科幻" value="科幻"></el-option>
          <el-option label="喜剧" value="喜剧"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电影评分">
        <el-input v-model="sizeForm.score"></el-input>
      </el-form-item>
      <el-form-item label="评论次数">
        <el-input v-model="sizeForm.evaluation_count"></el-input>
      </el-form-item>
      <el-form-item label="制作国家">
        <el-input v-model="sizeForm.marking_countries"></el-input>
      </el-form-item>
      <el-form-item label="电影地区">
        <el-input v-model="sizeForm.production_areas"></el-input>
      </el-form-item>
      <el-form-item label="年份">
        <el-input v-model="sizeForm.year_of_production"></el-input>
      </el-form-item>
      <el-form-item label="抓去时间">
        <el-input v-model="sizeForm.createAt"></el-input>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="sizeForm.updateAt"></el-input>
      </el-form-item>
      <el-form-item label="修改次数">
        <el-input v-model="sizeForm.version"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Api from '@/api/index'
export default {
  data () {
    return {
      sizeForm: {
        title: '',
        director: '',
        starring: '',
        file_type: '',
        score: '',
        evaluation_count: '',
        making_countries: '',
        production_areas: '',
        year_of_production: '',
        createAt: '',
        updateAt: '',
        version: ''
      }
    }
  },
  methods: {
    onSubmit () {
      Api.postMovies(this.sizeForm).then(res => {
        console.log(res)
        console.log('submit!')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
