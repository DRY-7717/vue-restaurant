<template>
  <div>
    <Navbar2 />
    <section
      class="pt-16 pb-12 lg:pt-36 lg:pb-32 font-poppins bg-center bg-cover bg-no-repeat lg:h-screen"
      style="background-image: url('../src/assets/img/bg-menu5.png')"
      id="about"
    >
      <div class="container lg:max-w-full w-full lg:px-16">
        <h1
          class="text-center text-5xl lg:text-6xl font-bold text-slate-800 mb-7"
        >
          Food Detail
        </h1>
        <div class="flex flex-wrap w-full justify-center">
          <div
            class="detail-food w-full lg:w-3/4 bg-white lg:rounded-2xl lg:shadow-lg flex flex-wrap justify-between overflow-hidden"
          >
            <div class="w-full lg:w-1/2 p-5 overflow-hidden">
              <img
                :src="`../src/assets/img/${foods.product.gambar}`"
                alt=""
                class="w-full h-full rounded-xl"
              />
            </div>
            <div class="w-full lg:w-1/2 p-5 overflow-hidden">
              <h1 class="text-2xl lg:text-4xl font-bold text-slate-800 mb-1">
                {{ foods.product.nama }}
              </h1>
              <h3 class="text-lg text-slate-700 font-semibold mb-2">
                Rp.{{ foods.product.harga }}
              </h3>

              <form action="" v-on:submit.prevent>
                <div class="form-control w-full mb-3">
                  <label
                    for="jumlah_pesanan"
                    class="block text-slate-700 font-semibold text-sm mb-2"
                    >Jumlah Pesanan</label
                  >
                  <input
                    type="text"
                    class="w-full p-1 rounded outline-0 border-2 border-slate-400"
                    v-model="pesan.jml_pesan"
                  />
                </div>
                <div class="form-control w-full mb-3">
                  <label
                    for="jumlah_pesanan"
                    class="block text-slate-700 font-semibold text-sm mb-2"
                    >Keterangan</label
                  >
                  <textarea
                    class="w-full p-1 rounded outline-0 border-2 border-slate-400"
                    placeholder="Keterangan seperti: pedas, otak setengah..."
                    v-model="pesan.keterangan"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full px-6 py-2 rounded-lg bg-slate-700 text-white text-center hover:bg-slate-800 transition"
                  @click="pemesanan"
                >
                  Order Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const toast = useToast();

let foods = reactive({
  product: {},
});

let pesan = reactive({});

const pemesanan = () => {
  if (pesan.jml_pesan) {
    pesan.products = foods.product;
    axios
      .post("http://localhost:3000/keranjangs", pesan)
      .then((response) => {
        toast.success("Terima kasih sudah memesan!", {
          position: "top",
          duration: 2000,
        });
        router.push('/cart')
      })
      .catch((error) => console.log(error));
  } else {
    toast.error("pesanan gagal, silahkan ini jumlah pemesanan dahulu", {
      position: "top",
      duration: 2000,
    });
  }
};

onMounted(() => {
  axios
    .get("http://localhost:3000/products/" + id)
    .then(function (response) {
      const { data } = response;
      foods.product = data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
