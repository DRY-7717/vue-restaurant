<template>
  <div>
    <div
      class="navsecond hidden lg:block w-full bg-transparent z-50 absolute top-0 left-0 items-center transition duration-200"
    >
      <div class="container max-w-full">
        <div class="w-full flex justify-center items-center py-4">
          <ul
            class="flex px-3 w-1/2 justify-around items-center text-white font-poppins"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li>
              <router-link to="/" class="font-lobster text-3xl title__nav"
                >Kenyangin!!!</router-link
              >
            </li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <header
      class="lg:hidden bg-transparent absolute top-0 left-0 w-full flex items-center transition duration-200"
    >
      <div class="container">
        <div class="w-full flex justify-between items-center">
          <div class="logo px-7">
            <a href="" class="py-6 block text-white tracking-wide font-lobster"
              >Kenyangin!!!</a
            >
          </div>

          <div class="flex items-center px-7">
            <button
              type="button"
              id="hamburger"
              class="hamburger block lg:hidden absolute right-7"
              @click="clickburger"
            >
              <span
                class="hamburger-line transition duration-300 origin-top-left"
              ></span>
              <span class="hamburger-line transition duration-300"></span>
              <span
                class="hamburger-line transition duration-300 origin-bottom-left"
              ></span>
            </button>

            <nav
              v-show="open"
              class="nav-menu absolute py-5 bg-white max-w-[250px] w-full top-full right-7 shadow-lg rounded-lg lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none lg:bg-transparent"
            >
              <ul class="block lg:flex">
                <li class="group">
                  <a
                    href=""
                    class="mx-8 py-2 text-black group-hover:text-blue-400 transition duration-200 flex"
                    >home</a
                  >
                </li>
                <li class="group">
                  <a
                    href=""
                    class="mx-8 py-2 text-black group-hover:text-blue-400 transition duration-200 flex"
                    >about</a
                  >
                </li>
                <li class="group">
                  <a
                    href=""
                    class="mx-8 py-2 text-black group-hover:text-blue-400 transition duration-200 flex"
                    >contact</a
                  >
                </li>
                <li class="group">
                  <a
                    href=""
                    class="mx-8 py-2 text-black group-hover:text-blue-400 transition duration-200 flex"
                    >sign in</a
                  >
                </li>
                <li class="group">
                  <a
                    href=""
                    class="mx-8 py-2 text-black group-hover:text-blue-400 transition duration-200 flex"
                    >sign up</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let open = ref(false);
onMounted(() => {
  const header = document.querySelector("header");
  const navSecond = document.querySelector(".navsecond");
  const fixnav = header.offsetTop;
  const fixnavSecond = navSecond.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset > fixnav || window.pageYOffset > fixnavSecond) {
      header.classList.add("navbar-fixed");
      navSecond.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
      navSecond.classList.remove("navbar-fixed");
    }
  };
});

const clickburger = () => {
  const hamburger = document.querySelector("header .hamburger");
  hamburger.classList.toggle("hamburger-active");
  open.value = !open.value;
};
</script>
