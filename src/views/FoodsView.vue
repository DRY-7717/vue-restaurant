<template>
  <div class="bg-center bg-cover bg-no-repeat h-screen section-foods">
    <Navbar2 />
    <section
      class="section-menu pt-20 pb-16 lg:pt-24 lg:pb-32 font-poppins bg-center bg-cover bg-no-repeat"
      style="background-image: url('src/assets/img/bg-menu5.png')"
    >
      <div class="row text-center font-poppins mb-9">
        <h1 class="text-slate-800 text-4xl lg:text-5xl font-bold">
          The Best Menu
        </h1>

        <input
          v-model="search"
          type="text"
          class="border-4 border-slate-500 outline-none w-3/6 mt-7 p-2 rounded-lg text-slate-500"
          placeholder="Search your menu favorite"
          @keyup="searchfood"
        />
      </div>
      <Foods :foods="product.list" />
    </section>
  </div>
</template>
<script setup>
import Foods from "../components/Foods.vue";
import { onMounted, reactive, ref } from "vue";

const product = reactive({
  list: [],
});

const search = ref("");
const searchfood = () => {

  axios
    .get(`http://localhost:3000/products?q=${search.value}`)
    .then(function (response) {
      const { data } = response;
      product.list = data;

    })
    .catch(function (error) {
      console.log(error);
    });

};

onMounted(() => {
  axios
    .get("http://localhost:3000/products")
    .then(function (response) {
      const { data } = response;
      product.list = data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
