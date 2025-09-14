

let cart = [];

const CartTable = document.querySelector("#cartTable");
const addButtons = document.querySelectorAll(".add");
const removeButton = document.querySelectorAll(".remove");
const totalAmount = document.getElementById("totalAmount");

function updateCart() {
  CartTable.innerHTML = `
      <tr>
      <th>S.No</th>
      <th>Service Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>total</th>
      </tr>
      `;
  let total = 0;
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    const itemtotal = item.price * item.Quantity;

    row.innerHTML = `
      <tr>
      <th>${index + 1}</th>
      <th>${item.name}</th>
      <th>₹${item.price}.00</th>
      <th>${item.Quantity}</th>
      <th>₹${itemtotal}</th>
      </tr>
      `;

    CartTable.appendChild(row);

    total += itemtotal;
  });

  totalAmount.textContent = `₹${total}.00`;
};

addButtons.forEach(button => {
  button.addEventListener("click", (evt) => {
    const serviceItem = evt.target.parentElement;
    const name = serviceItem.getAttribute("data-name");
    const price = parseInt(serviceItem.getAttribute("data-price"));

    const itemExist = cart.find((item) => item.name == name);

    if (itemExist) {
      itemExist.Quantity += 1;
    }
    else {
      cart.push({ name, price, Quantity: 1 });
    }

    updateCart();
  });
});

removeButton.forEach(button => {
  button.addEventListener("click", (evt) => {
    const serviceItem = evt.target.parentElement;
    const name = serviceItem.getAttribute("data-name");

    const itemExist = cart.find((item) => {
      item.name == name;
    });

    if (itemExist) {
      if (itemExist.Quantity > 1) {
        itemExist.Quantity -= 1;
      }
    }
    else {
      cart = cart.filter((item) => item.name !== name);
    }
    updateCart();
  });
});


let form = document.getElementById("bookingForm");
let msg = document.getElementById("confirmationMsg");

form.addEventListener('submit' , function(evt){
      evt.preventDefault();
      
      if(cart.length === 0){
        alert('please add services in the cart first !!');
        return;
      }
      const name = document.getElementById("name").value;
      msg.textContent = `thank you ${name} ! for using our services `;

      cart = [];
      updateCart();
      form.reset();
});

let order = document.getElementById('bookingForm')
order.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_ipmg18w', 'template_pymut1t', '#bookingForm')
      .then(() => {
        alert('Booking successful!');
        this.reset();
      }, (error) => {
        alert('Error sending booking. Please try again.');
        console.error(error);
      });
  });



























// const addButtons = document.querySelectorAll(".add");
// const removeButtons = document.querySelectorAll(".remove");
// const cartTable = document.getElementById("cartTable");
// const totalAmountEl = document.getElementById("totalAmount");
// const bookingForm = document.getElementById("bookingForm");
// const confirmationMsg = document.getElementById("confirmationMsg");

// // Cart as an array of objects
// let cart = [];

// // Function to update cart display
// function updateCart() {
//   // Clear old rows except header
//   cartTable.innerHTML = `
//       <tr>
//         <th>S.No</th>
//         <th>Service Name</th>
//         <th>Price</th>
//         <th>Qty</th>
//         <th>Total</th>
//       </tr>
//     `;

//   let total = 0;

//   cart.forEach((item, index) => {
//     const row = document.createElement("tr");
//     const itemTotal = item.price * item.quantity;

//     row.innerHTML = `
//   <td>${index + 1}</td>
//   <td>${item.name}</td>
//   <td>₹${item.price}.00</td>
//   <td>${item.quantity}</td>
//   <td>₹${itemTotal}.00</td>
//   `;
//     cartTable.appendChild(row);

//     total += itemTotal;
//   });

//   totalAmountEl.textContent = `₹${total}.00`;
// }

// // Add item
// addButtons.forEach(button => {
//   button.addEventListener("click", (e) => {
//     const serviceItem = e.target.parentElement;
//     const name = serviceItem.getAttribute("data-name");
//     const price = parseInt(serviceItem.getAttribute("data-price"));

//     // Check if item already exists
//     const existingItem = cart.find(item => item.name === name);

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({ name, price, quantity: 1 });
//     }

//     updateCart();
//   });
// });


// removeButtons.forEach(button => {
//   button.addEventListener("click", (e) => {
//     const serviceItem = e.target.parentElement;
//     const name = serviceItem.getAttribute("data-name");

//     const existingItem = cart.find(item => item.name === name);

//     if (existingItem) {
//       if (existingItem.quantity > 1) {
//         existingItem.quantity -= 1;
//       } else {
//         // remove item completely
//         cart = cart.filter(item => item.name !== name);
//       }
//     }

//     updateCart();
//   });
// });

// // Booking form
// bookingForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (cart.length === 0) {
//     alert("Please add at least one service to your cart before booking.");
//     return;
//   }

//   const name = document.getElementById("name").value;
//   confirmationMsg.textContent = `Thank you, ${name}! Your booking has been confirmed. ✅`;

//   // Reset cart and form
//   cart = [];
//   updateCart();
//   bookingForm.reset();
// });



