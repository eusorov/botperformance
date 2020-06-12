<template>
<div>
  Single Performance
</div>  
</template>

<script>
  import { get} from '../../service/ajax'
  import performanceSummary from './performanceSummary.vue'

  export default {
    data: () => {
      return {
       backtest: null  
      }
    },
    components: {
      performanceSummary
    },
    computed: {
      id: function() {
        return this.$route.params.id;
      },
      config: function() {
        return _.get(this, 'backtest.config');
      },
      tradingAdvisor: function() {
        return _.get(this, 'backtest.config.tradingAdvisor');
      },
    },
    mounted: function() {
      get('backtests/'.concat(this.id), (error, response) => {
        this.backtest = response;
      });
    },
    methods: {
        moment: mom => moment.utc(mom),
        fmt: mom => moment.unix(mom).format('YYYY-MM-DD HH:mm'),
        round: n => (+n).toFixed(3)
    },
  }
</script>

<style lang="scss" scoped>


</style>