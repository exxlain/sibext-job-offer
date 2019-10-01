<template>
  <div class="wrapper_inner">
    <div class="wrapper_info">
      <header class="header">
        <div class="header_wrapper">
          <img class="header_logo" src="../assets/logo.png" width="100"/>
          <div  class="info">Ух ты, отличные новости!</div>
        </div>
        <hr class="line"/>
      </header>
      <main>
        <h1 class="info_heading">Илья,</h1>
        <p class="info_text">мы рады предложить тебе позицию
          <span class="info_header_bold">Android-разработчика</span>
          в нашей команде!</p>
        <div class="button_wrapper">
          <div class="info_text_second">У нас есть все,
            что нужно для продуктивной деятельности!</div>
          <button class="button" @click="$router.push('offer')">Жми сюда</button>
        </div>
        <hr class="line"/>
      </main>
    </div>
  </div>
</template>


<script>
export default {

};
</script>


<style scoped>
  .wrapper_inner {
    position: relative;
    max-width: 960px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: white;
    background-clip: padding-box;
    margin: 0 auto;
  }
  .wrapper_inner::after {
    position: absolute;
    top: -1px; bottom: -1px;
    left: -1px; right: -1px;
    content: '';
    z-index: -1;
    background: linear-gradient(135deg, #dc5d78, #12c2f4);
    border-radius: 5px;
  }
  .wrapper_info {
    margin: 25px 13% 60px 13%;
  }
  .header_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .info {
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  .info_heading {
    text-align: left;
    font-size: 2.8rem;
    line-height: 0.7;
    margin-top: 35px;
    margin-bottom: 0;
  }
  .info_text {
    text-align: left;
    font-size: 1.3rem;
    line-height: 0.7;
  }
  .info_text_second {
    text-align: left;
    font-size: 1.3rem;
    margin-top: 3px;
    line-height: 0.7;
  }
  .info_header_bold {
    font-weight: bold;
  }
  .button {
    color: white;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 1% 4%;
    border: none;
    border-radius: 5px;
    margin-bottom: 28px;
    background: linear-gradient(135deg, #dc5d78, #12c2f4);
    position: relative;
  }
  .button::after {
    content: "1";
    color: white;
    background-color: #12c2f4;
    font-size: 0.5rem;
    position: absolute;
    bottom: 20px;
    padding: 0.8% 1.9%;
    right: -7px;
    border: 1px solid white;
  }
  .button_wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
