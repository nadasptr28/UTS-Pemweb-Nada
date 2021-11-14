const banner = { template: "<p>Beranda</p>" };
const TentangKami = { template: "<p>Tentang Kami</p>" };
const app = { template: "<p>Jasa Layanan</p>" };
const kontak = { template: "<p>Kontak</p>" };

const routes = [
  {
    path: "/banner",
    name: "Beranda",
    component: banner,
  },
  {
    path: "/TentangKami",
    name: "Tentang Kami",
    component: TentangKami,
  },
  {
    path: "/app",
    name: "Jasa Layanan",
    component: app,
  },
  {
    path: "/kontak",
    name: "Kontak",
    component: kontak,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
