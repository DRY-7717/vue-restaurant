<template>
  
  <div class="container lg:max-w-full w-full lg:px-16">
    <div class="row text-center font-poppins mb-11">
      <h1 class="text-slate-800 text-4xl lg:text-5xl font-bold">The Best Menu</h1>
    </div>
    <div class="flex flex-wrap w-full justify-center">
      <div class="w-full lg:w-1/3 overflow-hidden p-4" v-for="(bp, index) in bestproduct" :key="bp.id">
        <div class="w-full bg-white p-5 rounded-xl shadow-lg">
          <div
            class="rounded-xl box-img w-full h-48 shadow-lg border border-l-slate-400 overflow-hidden"
          >
            <img
              :src="`src/assets/img/${bp.gambar}`"
              class="w-full h-full object-cover object-center"
              alt=""
            />
          </div>

          <div class="box-desc px-4 w-full">
            <h3 class="text-2xl font-semibold text-slate-800 mt-5">{{ bp.nama }}</h3>
            <h5 class="text-lg font-base text-slate-400 mt-1">Rp.{{ bp.harga }}</h5>
            <p class="text-justify mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab
              ipsa tenetur in facere quaerat, eligendi.
            </p>
            <router-link :to="`/foods/${bp.id}`"
              class="w-full px-4 py-3 bg-slate-700 mt-3 rounded-lg text-base text-center text-white block"
            >
              Order Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/foods" class="text-center  px-9 py-3 bg-white rounded-md mt-5 shadow-lg w-56 mx-auto text-black block hover:text-blue-500 transition">Look All Menu</router-link>
  </div>
</template>
<script setup>
const props = defineProps({
  bestproduct: Object,
});
</script>
