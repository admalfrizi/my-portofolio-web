<template>
  <div class="List-porto"> 
    <div
      class="Isi mt-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/porto_1.jpg" alt="" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium">aaistore web</h3>
        <a href="http://aai-store.great-site.net/?i=1" class="link">
          <img src="../../assets/icons/browser_icon.svg" alt="" />
          <h2 class="text-white font-regular">Link Website</h2>
        </a>
        <a
          href="https://github.com/admalfrizi/uas_pbw_adamalfarizi"
          class="link"
        >
          <img src="../../assets/icons/browser_icon.svg" alt="" />
          <h2 class="text-white font-regular">Link Github</h2>
        </a>
      </div>
    </div>
    <div
      class="Isi mt-10"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/web_2.jpg" alt="porto" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium">KuproyKoding</h3>
        <a href="https://github.com/admalfrizi/tugas_pbw" class="link">
          <img src="../../assets/icons/browser_icon.svg" alt="" />
          <h2 class="text-white font-regular">Link Github</h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.List-porto .Isi {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: rgb(51, 54, 143);
  border-radius: 20px;
}

.List-porto .Isi .Img {
    width: 100%;
}

.List-porto .Isi .Img img {
    border-top-left-radius: 20px; /* 8px */
    border-bottom-left-radius: 20px; /* 8px */
    width: 100%;
}

.link-div {
    width: 40%;
}

.link-div h3 {
    margin-top: 30px;
    margin-right: 10px;
    margin-bottom: 33px;
    font-size: 24px;
}

.link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 33px;
}

.link img {
  margin-right: 15px;
}

.link h2:hover {
  color: antiquewhite;
}

@media screen and (max-width: 600px) {

  .MyPorto {
    padding-top: 120px;
  }
  .MyPorto section {
    text-align: center;
    padding-left: 10px;
  }

  .MyPorto section .List-porto .Isi {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .MyPorto section .List-porto .Isi .Img img {
    border-top-left-radius: 20px; /* 8px */
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px; 
  }

  .MyPorto section .List-porto .Isi .link-div{
    width: 100%;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }

  .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
  }
}
</style>