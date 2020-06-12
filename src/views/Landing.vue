<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50">
            <h1 class="title">Tradingbot Signals</h1>
            <h3>
              Here are quality signals for Bitcoin and Etherium, with average performance > 30 % per anno.
            </h3>
            <br />
          </div>
        </div>
      </div>
    </parallax>
      
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-100" >
              <h2 class="title text-center">Latest Signals</h2>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 " style="margin-left: auto; margin-right: auto; margin-bottom: 20px;">
              <div>
                    <div style="margin-top 10px;margin-bottom: 10px;"> <span class="badge badge-success">buy</span> on Kraken at: 2020-10-10 15:06  </div>
                    <div style="display: flex; justify-content:space-between ">
                        <img :src="coinEthImg"/>
                        <div>
                          <div>ETH - EUR</div>
                          <div>Etherium</div>
                        </div>
                        <div class="price">
                            <div>at: 188.02€</div>
                        </div>                
                        <div class="profit">
                            <div class="badge badge-success">14.10 %</div>
                            <div >Age: 15 days</div>
                        </div>                        
                   </div>
              </div>                                 
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 " style="margin-left: auto; margin-right: auto;">
              <div>
                    <div style="margin-top 10px;margin-bottom: 10px;"> <span class="badge badge-error">sell</span> on Kraken at: 2020-10-10 15:06  </div>
                    <div style="display: flex; justify-content:space-between ">
                        <img :src="coinBitcoinImg"/>
                        <div>
                          <div>BTC - EUR</div>
                          <div>Bitcoin</div>
                        </div>
                        <div class="price">
                            <div>at: 9588.02€</div>
                        </div>                
                        <div class="profit">
                            <div class="badge badge-success">14.10 %</div>
                            <div >Age: 5 days</div>
                        </div>                        
                   </div>
              </div>                                 
            </div>            
          </div>
        </div>
      </div>


      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center"></h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
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
};
</script>

<style lang="scss" scoped>
.signal {
  width: 50%;
  margin: auto;
}
.badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 80%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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

</style>
