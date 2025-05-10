<template>
  <div class="relative overflow-hidden z-10">
    <div class="mx-auto fixed z-10 bg-blue-800 w-full">
      <div class="Nav-out z-10 bg-transparent sm:pb-8 md:pb-8 lg:pb-28 xl:pb-8">
        <Popover>
          <div class="pt-6 w-full">
            <nav class="mx-auto flex justify-between max-w-7xl sm:px-6 lg:px-8">
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <RouterLink to="/">
                    <span class="text-white font-bold Title-nav">AAI Web</span>
                  </RouterLink>
                  <div class="mr-4 flex items-center md:hidden">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div
                class="
                  hidden
                  md:block md:flex
                  flex-row
                  xl:flex
                  flex-row
                  Menu
                  items-right
                  flex flex-row
                "
              >
                <RouterLink
                  to="/home"
                  active-class="activelink"
                  class="
                    block
                    px-5
                    py-2
                    rounded-md
                    font-bold
                    text-white
                    hover:text-yellow-400
                  "
                  >Home</RouterLink
                >
                <RouterLink
                  to="/certificate"
                  active-class="activelink"
                  class="
                    block
                    px-5
                    py-2
                    rounded-md
                    font-bold
                    text-white
                    hover:text-yellow-400
                  "
                  >Certificate</RouterLink
                >
                <RouterLink
                  to="/portofolio"
                  active-class="activelink"
                  class="
                    block
                    px-5
                    py-2
                    rounded-md
                    font-bold
                    text-white
                    hover:text-yellow-400
                  "
                  >Portofolio</RouterLink
                >
                <RouterLink
                  to="/aboutme"
                  active-class="activelink"
                  class="
                    block
                    px-5
                    py-2
                    rounded-md
                    font-bold
                    text-white
                    hover:text-yellow-400
                  "
                  exact
                  >About Me</RouterLink
                >
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="
                absolute
                z-10
                top-0
                inset-x-0
                p-2
                transition
                transform
                origin-top-right
                md:hidden
              "
            >
              <div
                class="
                  rounded-lg
                  shadow-md
                  bg-blue-600
                  ring-1 ring-black ring-opacity-5
                  overflow-hidden
                "
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <h4 class="h-8 w-auto font-bold text-white">Menu View</h4>
                  </div>
                  <div class="mr-1">
                    <PopoverButton
                      class="
                        bg-red-600
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <RouterLink
                    to="home"
                    active-class="activelink"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      font-bold
                      text-white
                      hover:text-yellow-400
                    "
                    >Home</RouterLink
                  >
                  <RouterLink
                    to="portofolio"
                    active-class="activelink"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      font-bold
                      text-white
                      hover:text-yellow-400
                    "
                    >Portofolio</RouterLink
                  >
                  <RouterLink
                    to="aboutme"
                    active-class="activelink"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      font-bold
                      text-white
                      hover:text-yellow-400
                    "
                    exact
                    >About Me</RouterLink
                  >
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
  },
};
</script>

<style scoped>

.activelink {
  color: #ead025;
}

@media screen and (max-width: 1180px) {
  .Nav-out {
    padding-top: 0px;
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 600px) {

  .Title-nav {
    margin-left: 20px;
  }
}
</style>