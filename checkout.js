function renderCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("checkout-container");
  const totalContainer = document.getElementById("checkout-total");

  if (cart.length === 0) {
    container.innerHTML = "<p>Không có sản phẩm trong giỏ hàng.</p>";
    totalContainer.textContent = "";
    return;
  }

  let total = 0;
  container.innerHTML = "";

  cart.forEach(item => {
    total += item.price;

    const itemDiv = document.createElement("div");
    itemDiv.className = "checkout-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-info">
        <h4>${item.name}</h4>
        <p>Giá: ${item.price.toLocaleString()} VND</p>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  totalContainer.textContent = `Tổng cộng: ${total.toLocaleString()} VND`;
}

function confirmCheckout() {
  const fullname = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const paymentMethod = document.getElementById("payment-method").value;

  if (!fullname || !phone || !address) {
    alert("❗ Vui lòng nhập đầy đủ thông tin khách hàng.");
    return;
  }

  // Thông tin đơn hàng
  const order = {
    customer: {
      fullname,
      phone,
      address,
    },
    paymentMethod,
    items: JSON.parse(localStorage.getItem("cart")) || [],
    total: document.getElementById("checkout-total").textContent
  };

  // (Tùy chọn: lưu vào localStorage để demo)
  console.log("Đơn hàng:", order);

  alert("🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
  localStorage.removeItem("cart");
  window.location.href = "index.html"; // Chuyển về trang chủ
}

document.addEventListener("DOMContentLoaded", renderCheckout);
