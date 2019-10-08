<template>
  <div v-if="showButton">
      <div class="item_wrapper">
        <img class="logo"  v-bind:src='`./img/${grayIcon}.png`' :height='iconHeight'/>
        <div class="item_button_wrapper">
          <button class="button" v-on:click="hideButton">{{buttonName}}</button>
        </div>
      </div>
      <hr class="line lineGray"/>
  </div>
  <div v-else>
    <div class="item_wrapper">
      <img class="logo"  v-bind:src='`./img/${colorIcon}.png`' :height='iconHeight'/>
        <div class="item_text_wrapper">
          <div class="item_text">{{infoText}}</div>
          <div class="item_accent">{{infoTextAccent}}</div>
        </div>
    </div>
    <hr class="line lineColor"/>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        showButton: true
      }
    },
    methods: {
      hideButton () {
        this.showButton = false
      },
    },
    props: {
      buttonName: String,
      infoText: String,
      colorIcon: String,
      grayIcon: String,
      iconHeight: Number,
      infoTextAccent: String,
    }
  };
</script>


<style scoped>
  .button {
    color: white;
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 5% 0;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    background: #169bd5;
    width: 100%;
  }
  .line {
    height: 3px;
    border: none;
  }
  .lineColor {
    background-image: linear-gradient(135deg, #dc5d78, #12c2f4);
  }
  .lineGray {
     background-image: linear-gradient(135deg, grey, white);
  }
  .item_wrapper {
    display: flex;
    margin: 30px 4% 0 4%;
  }
  .item_button_wrapper {
    margin: 0 auto;
    width: 35%;
  }
  .item_text {
    margin: 0 auto;
    padding: 0;
    text-transform: uppercase;
    text-align: center;
  }
  .item_accent {
    color: red;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
  }
   .item_text_wrapper {
     margin: 0 auto;
     width: 65%;
   }
  @media (max-width:768px) {
    .logo {
      display: none;
    }
    .item_text_wrapper {
      width: 100%;
    }
    .item_wrapper {
      height: 60px;
      align-items: center;
    }
    .button {
      font-size: 1.0rem;
    }
    .item_button_wrapper {
      width: 55%;
    }
  }

</style>
