<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="container" style="flex-direction: column">
        <div class="description text-center">
          <h2>Performance for last years</h2>
        </div>
        <div class="md-layout" style="justify-content:center">
            <div class="md-layout-item md-size-70 md-small-size-90">
            <backtestlist/>
          </div>  
        </div>
          
      </div>
    </div>
  </div>
</template>

<script>

import backtestlist from './components/backtestlist.vue'

export default {
  components: {
    backtestlist
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
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  height: 60vh;
}
.main-raised {
  margin-top: calc(-60vh + 80px);
}

.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
