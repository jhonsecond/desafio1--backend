class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.log("Error: Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some((p) => p.code === product.code)) {
        console.log("Error: El código de producto ya existe.");
        return;
      }
  
      product.id = this.currentId++;
      this.products.push(product);
      console.log("Producto agregado con éxito.");
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.log("Error: Producto no encontrado.");
      }
      return product;
    }
  }
  
  // Pruebas
  const productManager = new ProductManager();
  
  console.log("Productos iniciales:", productManager.getProducts()); // []
  
  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  // Producto agregado con éxito.
  
  console.log("Productos después de agregar el producto:", productManager.getProducts());
  
  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  // Error: El código de producto ya existe.
  
  console.log("Productos después de intentar agregar un producto repetido:", productManager.getProducts());
  
  console.log("Buscar producto con id 1:", productManager.getProductById(1));
  // { title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25, id: 1 }
  
  console.log("Buscar producto con id 2:", productManager.getProductById(2));
  // Error: Producto no encontrado.
  