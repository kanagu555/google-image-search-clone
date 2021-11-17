import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YxzzLVAorfWVfICQwON96qp7hvoFDQ64a4kXslvkLRk",
  },
});
