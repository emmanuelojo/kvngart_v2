<template>
  <section id="footer" class="max-w-[1440px] flex justify-center mx-auto">
    <div class="w-full bg-[#1c1c1c] px-4 lg:px-12 py-3 bottom-0">
      <!-- <p class="text-xs md:text-base flex text-center justify-center items-center gap-2">
        <span class="mx-1"> Copyright <i class="fa fa-copyright"></i> {{ year }} </span>

        <span> | </span>
        <span>
          <a href="https://jekon-dev.netlify.app" target="_blank"> Emmanuel Ojo </a>
        </span>
        <span> | </span>
        <span>All Rights Reserved.</span>
      </p>

      <div class="relative">
        <transition name="fade">
          <div
            id="pagetop"
            class="absolute right-2 md:right-4 bottom-16 flex items-center justify-center bg-[#daa520]/[0.4] hover:bg-[#daa520]/[0.7] px-3 pt-1 pb-1.5 text-white cursor-pointer"
            @click="toTop"
          >
            ^
          </div>
        </transition>
      </div> -->

      <div class="flex justify-between lg:justify-center gap-10 lg:gap-80 py-16">
        <div class="flex flex-col gap-4">
          <h6 class="footer-subheader">online store</h6>

          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/">
                <p class="footer-text">Joggers</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/">
                <p class="footer-text">Shirts</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/">
                <p class="footer-text">Jackets</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/">
                <p class="footer-text">Joggers</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/">
                <p class="footer-text">Joggers</p>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h6 class="footer-subheader">more info</h6>

          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/">
                <p class="footer-text">Home</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/#about">
                <p class="footer-text">About</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/#contact">
                <p class="footer-text">Contact Us</p>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/shop">
                <p class="footer-text">Shop</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="absolute left-0 right-0 w-full h-[1px] bg-gray-500"></div>

      <div class="relative flex flex-col md:flex-row md:items-center md:justify-between py-10 gap-4">
        <div class="order-1 mx-auto lg:mx-0">
          <p class="text-sm text-white">Nigeria (NGN )</p>
        </div>

        <div
          class="order-3 lg:order-2 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mx-auto lg:mx-none"
        >
          <p class="text-sm text-white">© {{ year }} - KVNG Art</p>
        </div>

        <div class="order-2 lg:order-3 text-white flex justify-center gap-5">
          <a
            href="https://www.facebook.com/profile.php?id=100007778868023&mibextid=LQQJ4d"
            target="_blank"
            @mouseover="facebookHovered = true"
            @mouseout="facebookHovered = false"
          >
            <Facebook :colour="facebookHovered ? '#daa520' : '#ffffff'" />
          </a>
          <a
            href="https://www.instagram.com/kvngartoflagos"
            target="_blank"
            @mouseover="instagramHovered = true"
            @mouseout="instagramHovered = false"
          >
            <Instagram :colour="instagramHovered ? '#daa520' : '#ffffff'" />
          </a>
          <a
            href="https://twitter.com/@kvngartoflagos"
            target="_blank"
            @mouseover="twitterHovered = true"
            @mouseout="twitterHovered = false"
          >
            <Twitter :colour="twitterHovered ? '#daa520' : '#ffffff'" />
          </a>
          <a
            href="https://wa.me/2349025639493"
            target="_blank"
            @mouseover="whatsAppHovered = true"
            @mouseout="whatsAppHovered = false"
          >
            <WhatsApp :colour="whatsAppHovered ? '#daa520' : '#ffffff'" />
          </a>
          <a
            href="https://www.linkedin.com/in/kvngartoflagos"
            target="_blank"
            @mouseover="linkedinHovered = true"
            @mouseout="linkedinHovered = false"
          >
            <Linkedin :colour="linkedinHovered ? '#daa520' : '#ffffff'" />
          </a>
          <a
            href="mailto:princekayleb7@gmail.com"
            target="_blank"
            @mouseover="mailHovered = true"
            @mouseout="mailHovered = false"
          >
            <Mail :colour="mailHovered ? '#daa520' : '#ffffff'" />
          </a>
          <a
            href="https://www.behance.net/KVNGART"
            target="_blank"
            @mouseover="behanceHovered = true"
            @mouseout="behanceHovered = false"
          >
            <Globe :colour="behanceHovered ? '#daa520' : '#ffffff'" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Twitter from "~/assets/icons/Twitter.vue";
import Facebook from "~/assets/icons/Facebook.vue";
import Instagram from "~/assets/icons/Instagram.vue";
import Linkedin from "~/assets/icons/Linkedin.vue";
import Mail from "~/assets/icons/Mail.vue";
import WhatsApp from "~/assets/icons/WhatsApp.vue";
import Globe from "~/assets/icons/Globe.vue";
// import { Mail } from "lucide-vue-next";

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const year = ref(new Date().getFullYear());

const facebookHovered = ref(false);
const instagramHovered = ref(false);
const twitterHovered = ref(false);
const whatsAppHovered = ref(false);
const linkedinHovered = ref(false);
const mailHovered = ref(false);
const behanceHovered = ref(false);
</script>

<style scoped>
.footer-subheader {
  @apply text-sm text-white font-semibold uppercase;
}

.footer-text {
  @apply text-sm text-white;
}
</style>
