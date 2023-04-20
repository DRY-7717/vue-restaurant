<template>
  <Navbar2 />
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

        <div class="box-table w-full bg-white rounded-2xl shadow-xl px-4">
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
                            class=" sm:w-24 lg:w-36 object-cover object-center rounded-lg"
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
                          {{ cart.products.harga }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          {{ cart.products.harga * cart.jml_pesan }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                        >
                          @mdo
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";

const carts = reactive({
  list: [],
});

onMounted(() => {
  axios
    .get("http://localhost:3000/keranjangs")
    .then(function (response) {
      const { data } = response;

      carts.list = data;
      console.log(carts.list);
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
