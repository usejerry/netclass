<template>
    <div class="amap-wrapper">
      <el-amap vid="amapDemo" 
        :center="center" 
        :zoom="zoom"
        :events="events"
        >
         <el-amap-marker vid="marker" 
          :position="center" 
          :label="label"
           >
        </el-amap-marker> 
      </el-amap>
    </div>

</template>
<style scoped>
.amap-wrapper{
    height:500px;
    width:500px;
}
</style>

<script lang="ts">
import Vue from "vue";
import VueAMap from "vue-amap";
let amapManager = new VueAMap.AMapManager();
export default Vue.extend({
    data() {
        return {
          
          zoom: 13,
          center: [121.59996, 31.197646],
          address: '',
          label:{
        content:'',
        offset:[10,12]
      },
          events: {
            click(e) {
              let { lng, lat } = e.lnglat;
              this.lng = lng;
              this.lat = lat;
             
             this.center=[this.lng,this.lat]
              // 这里通过高德 SDK 完成。
              console.log(this.center)
              var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
              });        
              geocoder.getAddress([this.lng ,this.lat], function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.regeocode) {

                    this.address=result.regeocode
                    // this.$nextTick();
                     console.log(this.address);
                  }
                }
              }.bind(this));        
            }
          }
        
        };
    }
   
})
</script>