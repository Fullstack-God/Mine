<template>
    <div class="contact-set">
        <a :href="contact.link" class="contact-item" v-for="contact in contacts" :key="contact.name" target="_blank">
            <img :src="require('../assets/img/icons/' + contact.img)" width="20" height="20" :alt="contact.name" loading="lazy">
            {{contact.text}}
        </a>
    </div>
</template>

<script>
export default {
    name: 'ContactSet',
    data() {
        return {
            contacts: [
                {
                    name: 'location',
                    text: 'Kyiv, Ukraine',
                    img: 'location.png',
                    link: 'https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.401699,30.252512,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234'
                },
                {
                    name: 'telegram',
                    text: '@andyalu',
                    img: 'telegram.png',
                    link: 'https://telegram.me/andyalu'
                },
                {
                    name: 'email',
                    text: 'yalunin077@gmail.com',
                    img: 'email.png',
                    link: 'mailto:yalunin077@gmail.com'
                },
                {
                    name: 'phone',
                    text: '+380632117272',
                    img: 'phone.png',
                    link: 'tel:+380632117272'
                },
                {
                    name: 'github',
                    text: 'github.com/yalandr',
                    img: 'github.png',
                    link: 'https://github.com/yalandr'
                },
            ]
        }
    }
}
</script>

<style>
.contact-set {
    width: 100%;
}
.contact-item {
	display: flex;
  align-items: center;
  padding: 1.6rem;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  background-color: var(--main-bg-color);
  backdrop-filter: blur(5px);
  border-radius: var(--box-border-radius);
  border: var(--box-border);
  box-shadow: var(--box-shadow);
  margin-bottom: .3rem;
  transition: all .2s ease
}
.contact-item:hover {
	background-color: var(--contact-item-hover-bg);
  border: var(--box-border);
}
.contact-item img {
	margin-right: 1.5rem;
  height: auto;
  filter: drop-shadow(var(--regular-text-shadow))
}
@media (max-width: 600px) {
  .contact-item {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
@media (max-width: 350px) {
  .contact-item {
    padding: 1.5rem .8rem;
    font-size: 0.9rem;
  }
  .contact-item img {
    margin-right: .5rem;
  }
}
</style>