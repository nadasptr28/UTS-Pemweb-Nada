const app = Vue.createApp({
  data() {
    return {
      Pesan: "Pesan",
      Batal: "Batal",
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
  },
});
