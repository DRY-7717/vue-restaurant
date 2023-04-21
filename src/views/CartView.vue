<template>
  <Navbar2 :updatelistorder="carts.list" />
  <div class="bg-center bg-cover bg-no-repeat">
    <section
      class="section-menu pt-20 pb-16 lg:pt-24 lg:pb-32 font-poppins bg-center bg-cover bg-no-repeat"
    >
      <div class="container px-7 lg:mx-auto lg:px-16">
        <div class="title text-center mb-9">
          <h1 class="text-slate-800 text-4xl lg:text-5xl font-bold">
            Order List
          </h1>
        </div>

        <div class="box-table w-full bg-white rounded-2xl shadow-xl px-4 mb-10">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5">
              <div class="py-2 inline-block min-w-full">
                <div class="overflow-hidden">
                  <table class="w-full table-auto">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Food
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          QTY
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Total Price
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(cart, index) in carts.list"
                        :key="cart.id"
                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          {{ index + 1 }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          <img
                            :src="`src/assets/img/${cart.products.gambar}`"
                            class="sm:w-24 lg:w-36 object-cover object-center rounded-lg"
                            alt=""
                          />
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {{ cart.products.nama }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {{ cart.keterangan }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {{ cart.jml_pesan }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          Rp.{{ cart.products.harga }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          Rp.{{ cart.products.harga * cart.jml_pesan }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          <button
                            @click="deletelistorder(cart.id)"
                            class="border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-white text-center"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="6"
                          class="text-md font-medium text-gray-900 text-end py-4"
                        >
                          Total Harga:
                        </td>
                        <td class="text-md font-medium text-gray-900 pl-7 py-4">
                          Rp.{{ totalprice }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap w-full lg:justify-end">
          <div
            class="detail-food w-full lg:w-2/5 bg-white lg:rounded-2xl shadow-lg flex flex-wrap justify-between overflow-hidden"
          >
            <div class="w-full p-5 overflow-hidden">
              <form action="" v-on:submit.prevent>
                <div class="form-control w-full mb-3">
                  <label
                    for="nama"
                    class="block text-slate-700 font-semibold text-sm mb-2"
                    >Nama</label
                  >
                  <input
                    type="text"
                    class="w-full p-1 rounded outline-0 border-2 border-slate-400"
                    v-model="pesan.nama"
                  />
                </div>
                <div class="form-control w-full mb-3">
                  <label
                    for="noMeja"
                    class="block text-slate-700 font-semibold text-sm mb-2"
                    >Nomor meja</label
                  >
                  <input
                    type="text"
                    class="w-full p-1 rounded outline-0 border-2 border-slate-400"
                    v-model="pesan.noMeja"
                  />
                </div>
                <button
                  type="submit"
                  class="w-full px-6 py-2 rounded-lg bg-slate-700 text-white text-center hover:bg-slate-800 transition"
                  @click="checkout"
                >
                  Checkout Now
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
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";

const toast = useToast();
const router = useRouter();
const route = useRoute();

const carts = reactive({
  list: [],
});

let pesan = reactive({});

onMounted(() => {
  axios
    .get("http://localhost:3000/keranjangs")
    .then(function (response) {
      const { data } = response;

      carts.list = data;
    })
    .catch(function (error) {
      console.log(error);
    });
});

const deletelistorder = (id) => {
  axios
    .delete("http://localhost:3000/keranjangs/" + id)
    .then(function (response) {
      toast.success("Order list has been deleted!", {
        position: "top",
        duration: 2000,
      });

      axios
        .get("http://localhost:3000/keranjangs")
        .then(function (response) {
          const { data } = response;

          carts.list = data;
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const checkout = () => {
  if (pesan.nama && pesan.noMeja) {
    pesan.keranjangs = carts.list;

    axios
      .post("http://localhost:3000/pesanans", pesan)
      .then((response) => {
        carts.list.map((item) => {
         return axios
            .delete("http://localhost:3000/keranjangs/" + item.id)
            .catch(function (error) {
              console.log(error);
            });
        });

        toast.success("Terima kasih sudah memesan!", {
          position: "top",
          duration: 2000,
        });
        router.push("/successcheckout");
      })
      .catch((error) => console.log(error));
  } else {
    toast.success("Please input your name and number table!", {
      type: "error",
      position: "top",
      duration: 2000,
    });
  }
};
const totalprice = computed(() => {
  return carts.list.reduce(
    (acc, curr) => acc + curr.products.harga * curr.jml_pesan,
    0
  );
});
</script>
