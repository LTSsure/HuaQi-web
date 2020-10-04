<template>
    <Tabs type="card">
        <TabPane label="所有组合">
            <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
        </TabPane>
        <TabPane label="我的推荐">标签二的内容</TabPane>
    </Tabs>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chartPie: null
    }
  },
  methods: {
    drawPieChart () {
      this.chartPie = echarts.init(document.getElementById('chartPie'))
      this.chartPie.setOption({
        title: {
          text: 'Pie Chart',
          subtext: '基金组合',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['基金1', '基金2', '基金3', '基金4', '基金5']
        },
        series: [
          {
            name: '基金名称',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '基金1' },
              { value: 310, name: '基金2' },
              { value: 234, name: '基金3' },
              { value: 135, name: '基金4' },
              { value: 1548, name: '基金5' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawCharts () {
      this.drawPieChart()
    }
  },
  mounted: function () {
    this.drawCharts()
  }
  // updated: function () {
  //     this.drawCharts()
  // }
}
</script>
<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    .el-col {
        padding: 30px 20px;
    }
</style>
