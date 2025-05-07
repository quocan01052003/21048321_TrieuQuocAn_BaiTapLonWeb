// Dữ liệu sản phẩm
// Dữ liệu sản phẩm mẫu
const motorcycles = [
    {
        name: "Nhớt Castrol Power 1",
        price: 150000,
        image: "images/nhot.png",
      },
      {
        name: "Găng tay xe máy",
        price: 350000,
        image: "images/gangtay.png",
      },
      {
        name: "Kính chiếu hậu",
        price: 500000,
        image: "images/kinhchieuhau.png",
      },
      {
        name: "Lốp xe",
        price: 1200000,
        image: "images/lop1.png",
      },
      {
        name: "Ruột xe máy",
        price: 350000,
        image: "images/ruot.png",
      },
      {
        name: "Kính xe",
        price: 500000,
        image: "images/kinhchieuhau.png",
      },
  ];
  const accessories = [
    {
      name: "Mũ bảo hiểm Fullface",
      price: 2200000,
      image: "images/full.png",
    },
    {
      name: "Găng tay xe máy",
      price: 350000,
      image: "images/gangtay.png",
    },
    {
      name: "Kính xe",
      price: 500000,
      image: "images/kinhchieuhau.png",
    },
  ];
  // Hàm render danh sách sản phẩm
    function renderProducts(products, containerId) {
      const container = document.getElementById(containerId);
      products.forEach((item, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString()} VND</p>
          <button onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">🛒 Thêm vào giỏ</button>
        `;
        container.appendChild(productDiv);
      });
    }
  // Gọi hàm để render sản phẩm
  renderProducts(motorcycles, "motorcycle-list");
  renderProducts(accessories, "accessory-list");
  // Thêm vào giỏ hàng
  function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`🛒 Đã thêm "${name}" vào giỏ hàng!`);
  }
  
  // Gọi hàm render khi trang tải xong
  document.addEventListener("DOMContentLoaded", renderProducts);
  
  const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", () => {
    const name = product.querySelector("h3").textContent;
    const price = Math.floor(Math.random() * 1000000) + 500000; // demo giá ngẫu nhiên

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} đã được thêm vào giỏ hàng!`);
  });
});
function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`🛒 Đã thêm "${name}" vào giỏ hàng!`);
  }
  // Dữ liệu sản phẩm xe máy
  // Hàm lấy thông tin xe máy từ URL
function getMotorcycleById(id) {
    return motorcycles.find(motorcycle => motorcycle.id === parseInt(id));
  }
  
  // Hàm render thông tin chi tiết xe máy
  function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Lấy id từ URL
    const product = getMotorcycleById(productId);
    
    if (!product) {
      document.getElementById("product-detail").innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
      return;
    }
    const productDetailHTML = `
      <div class="product-detail-info">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price.toLocaleString()} VND</p>
        <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">🛒 Thêm vào giỏ</button>
      </div>
    `;
    
    document.getElementById("product-detail").innerHTML = productDetailHTML;
  }
  // Hàm render các sản phẩm xe máy vào trang
function renderMotorcycles() {
    const container = document.getElementById("motorcycle-list");
    
    motorcycles.forEach((item) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="product-img">
        <h4 class="product-name">${item.name}</h4>
        <p class="product-description">${item.description}</p>
        <p class="product-price">${item.price.toLocaleString()} VND</p>
        <a href="motorcycles-single.html?id=${item.id}" class="view-detail-btn">Xem chi tiết</a>
        <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">🛒 Thêm vào giỏ</button>
      `;
      container.appendChild(productDiv);
    });
    
  }
  

  
  