<template>
  <q-page class="q-pa-lg">
    <div class="row q-ma-sm">
      <div class="col-12">
        <charts class="q-mt-none" :options="chartOptions"></charts>
      </div>
    </div>
    <div class="row q-ma-sm">
      <div class="col-12">
        <charts :options="chartOptionsTwo"></charts>
      </div>
    </div>
    <div class="row q-ma-sm">
      <div class="col-12">
        <charts @click.native="clickThree(charts)" :options="chartOptionsThree"></charts>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="add"
        direction="up"
        color="pink-12"
      >
        <q-fab-action @click="onClickPerson()" color="primary" icon="person_add" />
        <q-fab-action @click="onClickMail()" color="primary" icon="mail" />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'areaspline',
          backgroundColor: 'rgb(30, 30, 30)'
        },
        title: {
          text: 'Trend Chart',
          style: {
            color: '#FF00FF'
          }
        },
        series: [{
          data: [1, 2, 3, 2] // sample data
        }, {
          data: [10, 4, 2, 1] // sample data
        }],
        tooltip: {
          backgroundColor: '#FCFFC5',
          borderColor: 'black',
          borderRadius: 10,
          borderWidth: 3
        }
      },
      chartOptionsTwo: {
        title: {
          text: 'Bubble Charts',
          style: {
            color: '#FF00FF'
          }
        },
        chart: {
          type: 'bubble',
          backgroundColor: 'rgb(30, 30, 30)'
        },
        legend: {
          enabled: true,
          align: 'left',
          layout: 'vertical',
          verticalAlign: 'top',
          itemMarginTop: 10,
          bubbleLegend: {
            enabled: true,
            sizeBy: 'width',
            ranges: [{
              value: 1000
            }, {
              value: 700,
              color: 'rgba(144, 237, 125, 0.5)',
              borderColor: 'rgb(144, 237, 125)',
              connectorColor: 'rgb(144, 237, 125)'
            }, {
              value: 400,
              color: 'rgba(67, 67, 72, 0.5)',
              borderColor: 'rgb(67, 67, 72)',
              connectorColor: 'rgb(67, 67, 72)'
            }, {
              value: 100,
              color: 'rgba(247, 163, 92, 0.5)',
              borderColor: 'rgb(247, 163, 92)',
              connectorColor: 'rgb(247, 163, 92)'
            }],
            connectorDistance: 40,
            maxSize: 70
          }
        },
        plotOptions: {
          series: {
            sizeBy: 'width',
            maxSize: 70,
            marker: {
              lineWidth: 3
            }
          }
        },
        series: [{
          data: [
            { x: 95, y: 95, z: 834 },
            { x: 86.5, y: 102.9, z: 1000 },
            { x: 80.8, y: 91.5, z: 242 },
            { x: 80.4, y: 102.5, z: 121 }
          ]
        }, {
          data: [
            { x: 80.3, y: 86.1, z: 358 },
            { x: 78.4, y: 70.1, z: 450 },
            { x: 74.2, y: 68.5, z: 598 }
          ]
        }, {
          data: [
            { x: 73.5, y: 83.1, z: 678 },
            { x: 71, y: 93.2, z: 314 },
            { x: 69.2, y: 57.6, z: 415 },
            { x: 68.6, y: 20, z: 799 }
          ]
        }, {
          data: [
            { x: 65.5, y: 126.4, z: 35.3 },
            { x: 65.4, y: 50.8, z: 28.5 },
            { x: 63.4, y: 51.8, z: 15.4 },
            { x: 64, y: 82.9, z: 31.3 }
          ]
        }]
      },
      chartOptionsThree: {
        chart: {
          type: 'column',
          backgroundColor: 'rgb(30, 30, 30)'
        },
        title: {
          text: 'Highcharts responsive chart',
          style: {
            color: '#FF00FF'
          }
        },
        subtitle: {
          text: 'Resize the frame to see the legend position change'
        },
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical'
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Bananas']
        },
        yAxis: {
          title: {
            text: 'Amount'
          }
        },
        series: [{
          name: 'Christmas Eve',
          data: [1, 4, 3]
        }, {
          name: 'Christmas Day before dinner',
          data: [6, 4, 2]
        }, {
          name: 'Christmas Day after dinner',
          data: [8, 4, 3]
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
              }
            }
          }]
        }
      }
    }
  },
  methods: {
    clickThree (charts) {
      console.log('Click Three')
      console.log(charts)
    },
    onClickPerson () {
      console.log('onClickPerson')
    },
    onClickMail () {
      console.log('onClickMail')
    }
  }
}
</script>

<style lang="scss">
h1 {
  color: rgb(53, 53, 53);
}
</style>
