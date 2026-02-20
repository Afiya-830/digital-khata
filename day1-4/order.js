const customerOrder = {
    customerName:"suresh",
    item:"milk packet",
    quantity:2,
    priceperunit:30
};

const totalBill = customerOrder.quantity * customerOrder.priceperunit;
console.log("customer:"+customerOrder.customerName);
console.log("Ordered:"+customerOrder.item);
console.log("total amount:"+totalBill);