<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="container" style="flex-direction: column" v-if='backtest'>
        <div class="md-layout">
          <div class="md-layout-item md-size-60 mx-auto">
        <h2>Performance {{backtest.config.watch.asset}} for {{showYear(backtest.datefrom)}}</h2>
        <performanceSummary :report = 'backtest.backtest.performanceReport' :config='backtest.config' :roundtrips='backtest.backtest.roundtrips' :trades='backtest.backtest.trades'/>
        <chart :roundtrips='backtest.backtest.roundtrips' :config='backtest.config'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';

import { get} from '../service/ajax'
import performanceSummary from './components/performanceSummary.vue'
import chart from './components/performancechart.vue'

export default {
  data: () => {
      return {
       backtest: null  
      }
  },
  components: {
    performanceSummary,
    chart
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/chartSmall.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    id: function() {
        return this.$route.params.id;
    },
  },
  methods: {
    showYear: n => moment.unix(n).year()
  },
  mounted: function() {
      get('backtests/'.concat(this.id), (error, response) => {
        if (error) return;
        console.log(response);
        response.backtest = JSON.parse(response.backtest);
        response.config = JSON.parse(response.config);
        this.backtest = response;
      });
    },
};
</script>

<style lang="scss" scoped>
.page-header {
  height: 60vh;
}
.main-raised {
  margin-top: calc(-60vh + 80px);
}

</style>
