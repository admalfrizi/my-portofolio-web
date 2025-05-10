<template>
  <div :key="componentKey" class="MyPorto">
    <section class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="Title">
        <h3 class="Title-porto font-bold text-white text-left">
          My Portofolio
        </h3>
      </div>
      <tab-menu class="w-11/12 lg:w-10/12 mb-16" :tabList="tabList">
        <template v-slot:tabPanel-1>  
          <TabMobileApps/>
        </template>
        <template v-slot:tabPanel-2> 
          <TabWeb/>
        </template>
      </tab-menu>
    </section>
  </div>
</template>

<script>
import TabMenu from "../component/Tab.vue";
import TabWeb from "../component/TabWeb.vue";
import TabMobileApps from "../component/TabMobileApps.vue";

export default {
  
  name: "Portofolio",
  components: {
    TabMenu,TabWeb, TabMobileApps
  },
  data() {
    return {
      componentKey: 2,
      tabList: ["Mobile Apps", "Web"],
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
};
</script>

<style scoped>
.MyPorto {
  background-color: #406ca8;
  padding-top: 152px;
  padding-bottom: 100px;
}

.Title {
  margin-bottom: 40px;
}

.Title-porto {
  font-size: 36px;
}

.List-porto .Isi {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.List-porto .Isi .Img {
  margin-right: 20px;
}

.List-porto .Isi .Img img {
  width: 1034px;
}
.link-div h3 {
  margin-bottom: 33px;
  font-size: 24px;
}

.link {
  display: flex;
  flex-direction: row;
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
    margin: auto;
    width: 100%;
  }

  .MyPorto section .List-porto .Isi {
    display: flex;
    flex-direction: column;
  }

  .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 640px) {
  section {
    padding-inline: 1.5rem;
  }
}

</style>