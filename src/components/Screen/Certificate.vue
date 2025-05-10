<template>
  <div :key="componentKey" class="certificate">
    <section class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="Title">
        <h3 class="title-certificate font-bold text-white text-left">
            My Certificates
            </h3>
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
          class="certificate-img rounded-lg shadow-lg"
          alt="Selected"
        />
      </div>
     </Transition>
    </div>
  </Transition>
  
</template>

<script>
export default {
    data() {
        return {
            images: [
                'sertifikat_toefl.jpg', 
                'sertifikat_progsil_desain_grafis.jpg', 
                'sertifikat_progsil_vb_net.jpg', 
                'sertifikat_progsil_web_programming.jpg',
                'sertifikat_pkl.jpg',
                'sertifikat_dinus_inside.jpg',
                'sertifikat_android_kotlin.jpg',
                'sertifikat_dinacom.jpg',
                'sertifikat_dncc_panitia.jpg',
                'sertifikat_bwa_flutter_laravel.jpg',
                'sertifikat_udemy_flutter_firebase.jpg',
                'sertifikat_mastering_android_kotlin.jpg',
                'sertifikat_multi_modular_android.jpg'
            ],
            selectedImage: null,
            showModal: false,
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
            return new URL(`../../assets/certificates/${fileImg}`, import.meta.url).href

        }
    },
}
</script>

<style scoped>
.certificate {
  background-color: #406ca8;
  padding-top: 152px;
  padding-bottom: 100px;
}

.Title {
  margin-bottom: 40px;
}

.title-certificate {
  font-size: 36px;
}

.certificate-img {
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

@media screen and (max-width: 640px) {
  section {
    padding-inline: 1.5rem;
  }
}

</style>