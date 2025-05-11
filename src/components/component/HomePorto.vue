<template>
    <div class="MyPorto">
      <section class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="Title" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000">
          <h3 class="Title-porto font-bold text-white text-left content-center">
            My Portofolio
          </h3>
          <div class="cursor-pointer">
              <a :href="porto" download class=" Btn-NH
                w-full
                flex
                items-center
                px-8
                py-3
                border border-transparent
                text-sm
                font-bold
                rounded-md
                text-white
                md:py-4 md:text-lg md:px-10
                sm:justify-center
                content-center
                Btn">
                  <img
                    class="mr-5"
                    src="../../assets/icons/download_ic.svg"
                    alt=""
                  />
                  Download File
              </a>
            </div>
        </div>
        <div class="container mx-auto flex flex-wrap">
            <div 
                class="h-full p-4 lg:w-1/3 cursor-pointer" 
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
                v-for="(image, index) in images" 
                :key="index" 
                @click="openModal(image)"
            >
                <div class="relative">
                    <img :src="getImages(image)" alt="certificates"/>
                </div>
            </div>
        </div>
        <router-link
          to="/portofolio"
          class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div class="
              Btn-NH
              w-md-full
              flex
              items-center
              px-8
              py-3
              border border-transparent
              text-base
              font-bold
              rounded-md
              text-white
              md:py-4 md:text-lg md:px-10
              sm: justify-center
              Btn
            ">
                Find More My Portofolio...
          </div>
        </router-link>
      </section>
    </div>
    <Transition name="fade">
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
        >
            <Transition name="scale-fade">
                <div class="flex flex-wrap">
                    <button
                        @click="closeModal"
                        class="absolute top-2 right-2 text-white text-4xl font-bold cursor-pointer" 
                    >
                        &times;
                    </button>

                    <img
                        :src="getImages(selectedImage)"
                        class="rounded-lg shadow-lg porto-img"
                        alt="Selected"
                    />
                </div>
            </Transition>
        
        </div>
    </Transition>
    
</template>

<script lang="js">
import Portofolio from "../../assets/files/portofolio.pdf"

export default {
    data() {
        return {
            images: [
                'mobile_1.jpg',
                'mobile_2.jpg',
                'porto_9.jpg',
                'porto_8.jpg',
                'simpeg_udinus.jpg',
                'simpenpass_backend.jpg'
            ],
            selectedImage: null,
            showModal: false,
            porto: Portofolio,
        };
    },
     methods: {
         openModal(image) {
            this.selectedImage = image;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false; 
            setTimeout(() => (selectedImage.value = null), 300);
        },
        getImages(fileImg) {
            return new URL(`../../assets/image/${fileImg}`, import.meta.url).href
        }
    },
}
</script>

<style scoped>
.MyPorto {
  background-color: #406ca8;
  padding-top: 72px;
  padding-bottom: 148px;
}

.Title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.Title-porto {
  font-size: 36px;
}

.porto-img {
    width: 1000px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scale and fade transition for modal content */
.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: all 0.3s ease;
}
.scale-fade-enter-from,
.scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media screen and (max-width: 900px) {
  .MyPorto section {
    text-align: center;
    margin-inline: 20px;
  }

  .MyPorto section .List-porto .Isi {
    display: flex;
    flex-direction: column;
  }

  .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 640px) {
  .Title {
    display: flex;
    flex-direction: column;
  }

  .Title h3 {
    text-align: center;
  }
}
</style>