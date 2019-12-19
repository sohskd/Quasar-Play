import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import highchartsMore from 'highcharts/highcharts-more'

// "async" is optional
export default async ({ Vue }) => {
  console.log('> boot highcharts')
  highchartsMore(Highcharts)
  Vue.use(HighchartsVue, { tagName: 'charts' })
}
