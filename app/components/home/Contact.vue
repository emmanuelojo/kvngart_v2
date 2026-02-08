<template>
  <section id="contact" data-aos="zoom-in-down" class="max-w-[1440px] flex justify-center mx-auto">
    <div class="pt-10 md:pt-32 w-full">
      <div class="py-10 grid gap-5 bg-black">
        <p class="text-3xl text-center text-[#daa520] font-semibold">Connect Via</p>
        <div class="text-white flex justify-center gap-5">
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
// import AOS from "aos";
import { onMounted, ref } from "vue";
import Twitter from "~/assets/icons/Twitter.vue";
import Facebook from "~/assets/icons/Facebook.vue";
import Instagram from "~/assets/icons/Instagram.vue";
import Linkedin from "~/assets/icons/Linkedin.vue";
import Mail from "~/assets/icons/Mail.vue";
import WhatsApp from "~/assets/icons/WhatsApp.vue";
import Globe from "~/assets/icons/Globe.vue";

const facebookHovered = ref(false);
const instagramHovered = ref(false);
const twitterHovered = ref(false);
const whatsAppHovered = ref(false);
const linkedinHovered = ref(false);
const mailHovered = ref(false);
const behanceHovered = ref(false);

// onMounted(() => {
//   AOS.init();
// });
</script>

<style>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
</style>
