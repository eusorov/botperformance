<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <h1 class="title">Crypto Trading Signals</h1>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <h3>Quality signals for Bitcoin and Etherium, with average performance 30 % per anno.</h3>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h2 class="title text-center">Latest Signals</h2>
          <div class="md-layout" style="justify-content:center">
            <div class="md-layout-item md-size-60 md-small-size-90 md-xsmall-size-100">
              <md-card>
                <md-card-content>
              <div style="margin-top 10px;margin-bottom: 10px;">
                <span class="badge badge-success">buy</span> on Kraken at: 2020-10-10 15:06
              </div>
              <div style="display: flex; justify-content:space-between ">
                <img :src="coinEthImg" />
                <div>
                  <div>ETH - EUR</div>
                  <div>Etherium</div>
                </div>
                <div class="price">
                  <div>at: 188.02€</div>
                </div>
                <div class="profit">
                  <div class="badge badge-success">14.10 %</div>
                  <div>Age: 15 days</div>
                </div>
              </div>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-60 md-small-size-90 md-xsmall-size-100">
              <md-card>
                <md-card-content>
                  <div style="margin-top 10px;margin-bottom: 10px;">
                    <span class="badge badge-success">buy</span> on Kraken at: 2020-10-10 15:06
                  </div>
                  <div style="display: flex; justify-content:space-between ">
                    <img :src="coinEthImg" style="width: auto;"/>
                    <div>
                      <div>ETH - EUR</div>
                      <div>Etherium</div>
                    </div>
                    <div class="price">
                      <div>at: 188.02€</div>
                    </div>
                    <div class="profit">
                      <div class="badge badge-success">14.10 %</div>
                      <div>Age: 15 days</div>
                    </div>
                  </div>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-60 md-small-size-90 md-xsmall-size-100">
              <md-card>
                <md-card-content>
              <div>
                <div style="margin-top 10px;margin-bottom: 10px;">
                  <span class="badge badge-error">sell</span> on Kraken at: 2020-10-10 15:06
                </div>
                <div style="display: flex; justify-content:space-between ">
                  <img :src="coinBitcoinImg" />
                  <div>
                    <div>BTC - EUR</div>
                    <div>Bitcoin</div>
                  </div>
                  <div class="price">
                    <div>at: 9588.02€</div>
                  </div>
                  <div class="profit">
                    <div class="badge badge-success">14.10 %</div>
                    <div>Age: 5 days</div>
                  </div>
                </div>
              </div>
               </md-card-content>
              </md-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/chartSmall.jpg")
    },
    coinEthImg: {
      type: String,
      default: require("@/assets/img/eth.png")
    },
     coinBitcoinImg: {
      type: String,
      default: require("@/assets/img/bitcoin.png")
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .page-header {
//   height: 50vh;
// }
//.main-raised {
  // margin-top: calc(-50vh + 80px);
//}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 80%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.badge-success {
  color: #fff;
  background-color: #28a745;
}
.badge-error {
  color: #fff;
  background-color: red;
}
.price.profit {
  color: #28a745;
}

.border-blue {
  border: 1px solid blue;
  border-radius: 3px
}
</style>
