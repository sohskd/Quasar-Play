<template>
  <q-page class="q-pa-lg">
    <h1>Maps</h1>
      <charts :constructor-type="'mapChart'" :options="mapOptions" class="map"></charts>
    <h1>Maps</h1>
  </q-page>
</template>

<script>
import mapData from '../../js/mapData'

export default {
  data () {
    return {
      mapOptions: {
        chart: {
          map: 'myMapName'
        },
        title: {
          text: 'Highmaps basic demo'
        },
        subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0
        },
        series: [{
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: true,
          data: mapData.array
        }]
      }
    }
  }
}
</script>

<style>
.map {
  min-height: 500px;
}
</style>
