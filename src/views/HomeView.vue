<template>
  <div>
    <Navbar />
    <section id="home"
      class="pt-36 pb-32 h-screen bg-center bg-cover  bg-no-repeat bg-slate-600 bg-fixed   bg-blend-multiply font-poppins"
      style="background-image: url('src/assets/img/hero.jpg')"
    >
    <div class="container max-w-full lg:max-w-6xl text-white mx-auto text-center font-lobster mt-20 lg:mt-7 px-6">
      <h1 class="text-5xl lg:text-7xl  mb-3">Welcome To The</h1>
      <h1 class="text-7xl lg:text-9xl  mb-7">Kenyangin</h1>
      <h4 class="text-2xl lg:text-5xl mb-11">Silahkan pilih makanan yang kamu inginkan sesukamu</h4>
      <router-link to="" class="px-12 py-3  text-center  rounded-full outline outline-2 outline-white text-2xl">pesan sekarang</router-link>
    </div>
  </section>

  <!-- About Start -->
  <section class="pt-36 pb-32  font-poppins bg-center bg-cover  bg-no-repeat" style="background-image: url('src/assets/img/bg-about.png');">
    <div class="container lg:max-w-full w-full px-16">
      <div class="flex flex-wrap w-full justify-center">
        <div class="w-full lg:w-1/2 px-11 overflow-hidden ">
          <img src="../assets/img/people-cooking.jpg" alt="" class="w-full h-[600px] object-cover object-center rounded-xl">
        </div>
        <div class="w-full lg:w-1/2 py-14 text-justify pr-11">
          <h1 class="text-slate-800  font-bold text-5xl mb-6">Kenyangin is..?</h1>
          <p class="text-slate-900 text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eos, tempora nesciunt repellat in eum quam qui dicta nam. Maiores eius harum ipsam exercitationem asperiores veritatis repudiandae quos fugit magnam?</p>
        </div>
      </div>
    </div>
  </section>
  <!-- About End -->
  
  </div>
</template>
<script>
export default {};
</script>
