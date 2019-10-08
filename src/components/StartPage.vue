<template>
  <div class="wrapper_inner">
    <div class="wrapper_info">
      <header class="header">
        <p class="info">извещение для соискателя</p>
        <hr class="line"/>
      </header>
      <main>
        <h1 class="info_heading">Вам письмо
          <span class="info_header_mistake">из Хогвартса</span>
          от Sibext
        </h1>
        <button class="button" @click="$router.push('welcome')">читать</button>
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
    margin: 48px 13% 60px 13%;
  }
  .info {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    margin-bottom: 0;
  }
  .info_heading {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
  }

  .info_header_mistake {
    text-decoration: line-through;
  }
  .button {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding: 1% 9%;
    border: none;
    border-radius: 5px;
    margin: 15px auto 45px auto;
    background: linear-gradient(135deg, #dc5d78, #12c2f4);
    position: relative;
    display: block;
  }
  .button::after {
    content: "1";
    color: white;
    background-color: #12c2f4;
    font-size: 0.5rem;
    position: absolute;
    bottom: 77%;
    padding: 0.8% 1.7%;
    right: -7px;
    border: 1px solid white;
  }
</style>
