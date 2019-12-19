import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import highchartsMore from 'highcharts/highcharts-more'
import mapInit from 'highcharts/modules/map'
import addWorldMap from '../js/worldmap.js'

// "async" is optional
export default async ({ Vue }) => {
  console.log('> boot highcharts')
  mapInit(Highcharts)
  addWorldMap(Highcharts)
  highchartsMore(Highcharts)
  Vue.use(HighchartsVue, { tagName: 'charts' })
  console.log('< boot highcharts')
}
