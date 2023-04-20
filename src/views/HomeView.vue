<template>
  <div>
    <Navbar />
    <section
      id="home"
      class="pt-36 pb-32 h-screen bg-center bg-cover bg-no-repeat bg-slate-600 bg-fixed bg-blend-multiply font-poppins hero-section"
    >
      <div
        class="container max-w-full lg:max-w-6xl text-white mx-auto text-center font-lobster mt-20 lg:mt-7 px-6"
      >
        <h1 class="text-5xl lg:text-7xl mb-3">Welcome To The</h1>
        <h1 class="text-7xl lg:text-9xl mb-7">Kenyangin</h1>
        <h4 class="text-2xl lg:text-5xl mb-11">
          Silahkan pilih makanan yang kamu inginkan sesukamu
        </h4>
        <router-link
          to="/foods"
          class="px-12 py-3 text-center rounded-full outline outline-2 outline-white text-2xl"
          >pesan sekarang</router-link
        >
      </div>
    </section>

    <!-- About Start -->
    <section
      class="pt-20 pb-16 lg:pt-36 lg:pb-32 font-poppins bg-center bg-cover bg-no-repeat bg-fixed section-about"
      id="about"
    >
      <div class="container lg:max-w-full w-full lg:px-16">
        <div class="flex flex-wrap w-full justify-center">
          <div class="w-full lg:w-1/2 px-7 lg:px-11 overflow-hidden">
            <img
              src="../assets/img/people-cooking.jpg"
              alt=""
              class="w-full h-96 lg:h-[600px] object-cover object-center rounded-xl"
            />
          </div>
          <div class="w-full lg:w-1/2 py-14 text-justify px-7 lg:px-0 lg:pr-11">
            <h1
              class="text-slate-800 font-bold text-4xl lg:text-5xl mb-6 text-center lg:text-start"
            >
              Kenyangin is..?
            </h1>
            <p
              class="text-slate-900 text-xl bg-white lg:bg-inherit lg:text-3xl"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eos,
              tempora nesciunt repellat in eum quam qui dicta nam. Maiores eius
              harum ipsam exercitationem asperiores veritatis repudiandae quos
              fugit magnam?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="pt-12 pb-36 font-poppins bg-cover bg-bottom bg-fixed section-founder"
      
    >
      <div class="container lg:max-w-full w-full px-7 lg:px-16">
        <div class="flex w-full justify-center items-center">
          <div class="kotak w-full lg:w-3/4 text-white text-center">
            <h1 class="font-lobster text-3xl lg:text-6xl mb-8">
              Founder of Kenyangin
            </h1>

            <div
              class="box-image w-48 h-48 overflow-hidden mx-auto rounded-full group mb-5"
            >
              <div
                class="w-full h-full bg-cover bg-center group-hover:scale-125 transition duration-500 profile-founder"
              ></div>
            </div>

            <h3 class="font-lobster text-3xl lg:text-4xl mb-4 lg:mb-2">
              Bima Arya Wicaksana
            </h3>
            <h4 class="text-lg lg:text-2xl">
              (Web Development | Student in Pamulang University)
            </h4>
          </div>
        </div>
      </div>
    </section>
    <!-- About End -->

    <!-- The best menu Start -->
    <section
      class="pt-20 pb-16 lg:pt-24 lg:pb-32 font-poppins bg-center bg-cover bg-no-repeat bg-fixed section-bestmenu"
      id="menu"
    >
      <BestFood :bestproduct="product.list" />
    </section>

    <!-- The best menu End -->

    <!-- Contact Start -->
    <section
      class="pt-12 pb-12 font-poppins bg-cover bg-bottom bg-fixed section-contact"
      id="contact"
    >
      <div class="container lg:max-w-full w-full px-7 lg:px-16">
        <div class="flex w-full justify-center items-center">
          <div
            class="kotak w-full px-7 lg:px-20 lg:w-[600px] text-white h-[800px] bg-cover bg-center papper-old"
          >
            <h1
              class="mt-36 text-slate-800 text-5xl lg:text-6xl font-bold font-lobster text-center"
            >
              Contact Us
            </h1>

            <form action="" class="mt-11 lg:mt-14 ">
              <div class="form-control mb-7">
                <label
                  for="nama"
                  class="text-slate-800 text-3xl font-lobster tracking-wide block mb-3"
                  >Name</label
                >
                <input type="text" class="w-full p-3 text-slate-700 rounded-lg border-0 outline-4 outline-amber-800" placeholder="Input your name..." id="nama">
              </div>
              <div class="form-control mb-7">
                <label
                  for="message"
                  class="text-slate-800 text-3xl font-lobster tracking-wide block mb-3"
                  >Message</label
                >
                <textarea class="w-full h-48 p-3 text-slate-700 rounded-lg border-0 outline-4 outline-amber-800" name="" id="message" placeholder="input your message..."></textarea>
                <!-- <text-a type="text" class="" placeholder="Input your name..." id="message"> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact End -->
    <footer class="w-full py-4 text-center font-poppins text-slate-500 bg-black">Copyright Bima Arya Wicaksana</footer>
  </div>
</template>
<script setup>
import BestFood from "../components/BestFood.vue";
import { onMounted, reactive } from "vue";

const product = reactive({
  list: [],
});

onMounted(() => {
  axios
    .get("http://localhost:3000/best-products")
    .then(function (response) {
      const { data } = response;
      product.list = data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
