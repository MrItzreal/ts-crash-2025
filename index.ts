// Pizza "type":
type Pizza = {
  id: number;
  name: string;
  price: number;
};

// Order "type":
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

// Global Variables
let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = [];

function AddNewPizza(pizzaObj: Pizza): void {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;

  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter `identifier` must be a string or a number");
  }
}

AddNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
AddNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
AddNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order history:", orderHistory);
