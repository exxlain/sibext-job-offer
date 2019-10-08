<template>
  <div class="wrapper_inner">
    <div class="wrapper_info">
      <header class="header">
        <div class="header_wrapper">
          <img class="header_logo" src="../assets/logo.png" width="100" height="37"/>
          <div class="info_wrapper">
            <div  class="info">Мы готовы предложить</div>
          </div>
        </div>
        <hr class="line"/>
      </header>
      <main>
        <h1 class="info_heading">Открой для себя все преимущества работы в нашей команде!</h1>
        <section class="main_items_wrapper">
          <div>
            <div class="first_item_wrapper">
              <img class="logo"  src='../img/one-color.png' height="45"/>
              <div class="item_text_wrapper">
                <div>ДОСТОЙНУЮ ЗАРПЛАТУ</div>
                <div class="item_accent">100 000p</div>
              </div>
            </div>
          <hr class="lineColor"/>
        </div>
        <ul class="main_ul">
          <li v-for="item in items" :key=item.message>
            <InfoBlock
              :buttonName='item.buttonName'
              :infoText='item.infoText'
              :colorIcon='item.colorIcon'
              :grayIcon='item.grayIcon'
              :iconHeight='item.iconHeight'
              :infoTextAccent='item.infoTextAccent'
            />
          </li>
        </ul>
        </section>
      </main>
      <footer class="footer">
        <div class="button_wrapper">
          <div class="welcome">
            <div>Приходи, будет круто!</div>
            <div>Мы ждем тебя!</div>
          </div>
          <button class="button">
            <a class="mail_link" href="mailto:job@sibext.com">Написать ответ</a>
          </button>
        </div>
        <div class="quote_border">
          <div class="quote">Если я и видел дальше других, то потому, что стоял на плечах гигантов.</div>
        </div>
        <cite class="cite_text">(Исаак Ньютон)</cite>
      </footer>
    </div>
  </div>
</template>


<script>
import InfoBlock from './InfoBlock.vue';

  export default {
    components: {
      InfoBlock
    },
    data() {
      return {
        items: [
          {
            buttonName: 'Супер удобно',
            infoText: 'Гибкий график',
            colorIcon: 'two-color',
            grayIcon: 'two-gray',
            iconHeight: 40,
          },
          {
            buttonName: 'Это в порядке вещей',
            infoText: 'Ежегодный оплачиваемый отпуск',
            infoTextAccent: '28 дней',
            colorIcon: "three-color",
            grayIcon: "three-gray",
            iconHeight: 40,
          },
          {
            buttonName: 'Очень полезно',
            infoText: 'Корпоративное обучение английскому языку',
            colorIcon: "four-color",
            grayIcon: "four-gray",
            iconHeight: 45,
          },
          {
            buttonName: 'Нужно? - Будет!',
            infoText: 'Прокачанное рабочее место в нашем уютном офисе',
            colorIcon: "five-color",
            grayIcon: "five-gray",
            iconHeight: 40,
          },
          {
            buttonName: 'Самое главное',
            infoText: 'Сильную команду увлечённых профессионалов',
            colorIcon: "six-color",
            grayIcon: "six-gray",
            iconHeight: 40,
          },
        ]
      }
    },
    methods: {
      closeWindow () {
        window.open('', '_self', '');
        window.close()
      },
    },
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
    margin: 20px 13.5%;
  }
  .header_wrapper {
    display: flex;
    justify-content: space-between;
  }
  .info_wrapper {
    margin: 0 auto;
  }
  .header_logo {
    margin-top: 5px;
  }
  .info {
    font-size: 2.0rem;
    font-weight: bold;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    }
  .info_heading {
    margin: 0 0 0 25%;
    font-size: 1rem;
    font-weight: normal;
  }
  .main_items_wrapper {
    margin: 35px 10% 0 18%;
    width: 75%;
  }
  .item_accent {
    color: red;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
  }
  .first_item_wrapper {
    display: flex;
    margin: 0 6%;
  }
  .item_text_wrapper {
    margin: 0 auto;
  }
  .main_ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .lineColor {
    background-image: linear-gradient(135deg, #dc5d78, #12c2f4);
    height: 3px;
    border: none;
  }
  .button_wrapper {
    display: flex;
    justify-content: space-around;
    margin-bottom: 32px;
  }
  .footer {
    margin: 20px 10% 0 18%;
    width: 75%;
  }
  .welcome {
    color: red;
    text-align: center;
    font-size: 1.2rem;
  }
  .button {
    background-color: transparent;
    border-width: 1.5px;
    border-style: solid;
    border-radius: 5px;
    border-color: #169bd5;
    font-size: 0.8rem;
    position: relative;
  }
  .button::after {
    content: "1";
    color: white;
    background-color: #12c2f4;
    font-size: 0.5rem;
    position: absolute;
    top: -10%;
    padding: 0.8% 1.9%;
    right: -7px;
    border: 1px solid white;
  }
  .button::before {
    content: 'job@sibext.com';
    position: absolute;
    font-size: 0.8rem;
    bottom: -20px;
  }
  .mail_link {
    color: #169bd5;
    text-decoration: none;
  }
  .quote {
    padding-left:3%;
    padding-top: 3px;
    padding-bottom: 8px;
  }
  .quote_border {
    border-left: gray;
    border-left-width: 4px;
    border-left-style: solid;
  }
  .cite_text {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }
  @media (max-width:768px) {
    .wrapper_info {
      margin: 10px 5%;
    }
    .main_items_wrapper {
      margin: 20px auto;
    }
    .header_logo {
      width: 70px;
      height: 28px;
      margin-top: 0;
    }
    .logo {
      display: none;
    }
    .info {
      font-size: 1.3rem;
    }
    .info_heading, .quote_border, .cite_text{
     display: none;
    }
    .button {
      font-size: 1.0rem;
      position: relative;
      width: 50%;
    }
    .footer {
      margin: 10px 5%;
      width: 90%;
    }
    .button::before {
      font-size: 1.0rem;
      bottom: -27px;
    }
  }
</style>
