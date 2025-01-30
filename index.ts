// Pizza "type":
type Pizza = {
  name: string;
  price: number;
};

// Order "type":
type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

// Global Variables
let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = [];

function AddNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;

  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

AddNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
AddNewPizza({ name: "BBQ Chicken", price: 12 });
AddNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order history:", orderHistory);
