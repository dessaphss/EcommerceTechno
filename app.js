const vm = new Vue ({
  el: "#app",
  data: {
    produtos: []
  },
  methods: {
    fetchProdutos(){
      fetch("./api/produtos.json")
      .then(r => r.json())
      .then(r => {
        this.produtos = r;
      })
    }
  },
    //ao criar o vue.js esse método será ativado
    created(){
      this.fetchProdutos();
    }
});