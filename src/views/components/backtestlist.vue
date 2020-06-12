<template>
<div>
  <div class="md-table ">
    <div class="md-table-content">
    <table v-if='backtests.length' >
      <thead class="">
        <tr class="md-table-row">
          <th class="md-table-head"><div class="md-table-head-container"><div class="md-table-head-label">currency</div></div> </th>
          <th class="md-table-head"><div class="md-table-head-container"><div class="md-table-head-label">asset</div></div></th>
          <th class="md-table-head"><div class="md-table-head-container"><div class="md-table-head-label">from</div></div></th>
          <th class="md-table-head"><div class="md-table-head-container"><div class="md-table-head-label">to</div></div></th>
          <th class="md-table-head"><div class="md-table-head-container"><div class="md-table-head-label">profit</div></div></th>
        </tr>
      </thead>
      <tbody class="md-table-cell-container">
        <tr v-for='backtest in backtests' v-on:click='$router.push({path: `/performance/${backtest.id}`})' :key="backtest.id" class="md-table-row">
          <td class="md-table-cell"><div class="md-table-cell-container">{{ backtest.currency }}</div></td>
          <td class="md-table-cell"><div class="md-table-head-container">{{ backtest.asset }} </div></td>
          <td class="md-table-cell"><div class="md-table-head-container">{{ fmt(backtest.datefrom) }} </div></td>
          <td class="md-table-cell"><div class="md-table-head-container">{{ fmt(backtest.dateto) }} </div></td>
          <td class="md-table-cell"><div class="md-table-head-container">{{ backtest.method }}</div></td>
        </tr>    
      </tbody>
  </table>
  </div>
  </div>

  <div>
  </div>

</div>  
</template>

<script>
   import { get} from '../../service/ajax'
  //import backtestsjson from './mocks/backtests.json'
  import moment from 'moment';

  export default {
    data: () => {
      return {
       backtests: {},
       fetching : false
      }
    },
    mounted: function() {
      this.getBacktests();
    },
    methods: {
        moment: mom => moment.utc(mom),
        fmt: mom => moment.unix(mom).format('YYYY-MM-DD HH:mm'),
        round: n => (+n).toFixed(3),
        profit : performanceReport => {
          if (performanceReport){
            return performanceReport.relativeProfit;
          }else {
            return 0;
          }
        },
        getBacktests: function() {
          this.fetching = true;
          get("backtests", (error, response) => {
            if (error) return; //TODO react to error
            this.fetching = false;
            this.backtests = response._embedded.backtests;
          }); 
        }
    },
  }
</script>

<style lang="scss" scoped>


</style>