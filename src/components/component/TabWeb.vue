<template>
  <div class="List-porto"> 
    <div
      class="Isi"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/simpenpass_backend.jpg" alt="" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium text-left">SimpenPass Backend API</h3>
        <a
          href="https://github.com/admalfrizi/simpenpass-api"
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
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/simpeg_udinus.jpg" alt="" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium text-left">SIMPEG Udinus</h3>
        <a
          href="https://neosimpeg.dinus.ac.id"
          class="link"
        >
          <img src="../../assets/icons/browser_icon.svg" alt="" />
          <h2 class="text-white font-regular">Link Website</h2>
        </a>
      </div>
    </div>
    <div
      class="Isi mt-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/biro_sdm_udinus.jpg" alt="" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium text-left">Biro SDM Udinus</h3>
        <a
          href="https://sdm.dinus.ac.id/"
          class="link"
        >
          <img src="../../assets/icons/browser_icon.svg" alt="" />
          <h2 class="text-white font-regular">Link Website</h2>
        </a>
      </div>
    </div>
    <div
      class="Isi mt-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/crud_api_laravel.jpg" alt="" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium text-left">Dashboard CRUD API Laravel</h3>
        <a
          href="https://github.com/admalfrizi/DashboardAdminForAppkuApps"
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
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
    >
      <div class="Img">
        <img src="../../assets/image/my_personal_web.jpg" alt="" />
      </div>
      <div class="link-div">
        <h3 class="text-white font-medium text-left">My Personal Web</h3>
        <a
          href="https://adamalfarizi.site/home"
          class="link"
        >
          <img src="../../assets/icons/browser_icon.svg" alt="" />
          <h2 class="text-white font-regular">Link Website</h2>
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
  justify-content: left;
  margin-bottom: 33px;
}

.link img {
  margin-right: 15px;
}

.link h2:hover {
  color: antiquewhite;
}

@media screen and (max-width: 720px) {
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
    width: auto;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
  }

  .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
  }
}
</style>