// Câu 1: Khai báo Product (ES6 class)
class Product {
    constructor(id, name, price, quantity, category, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.isAvailable = isAvailable;
    }
}

// Câu 2: Khởi tạo mảng products (>= 6 sản phẩm, >= 2 danh mục)
const products = [
    new Product(101, "iPhone 15", 35000000, 5, "Phone", true),
    new Product(102, "Samsung S24", 30000000, 0, "Phone", true),
    new Product(103, "MacBook Pro", 52000000, 3, "Laptop", true),
    new Product(104, "AirPods Pro", 6500000, 10, "Accessories", true),
    new Product(105, "Sạc Anker", 1200000, 15, "Accessories", false),
    new Product(106, "iPad Air", 18000000, 7, "Tablet", true)
];

const output = document.querySelector("#output");

// Câu 3: Tạo mảng mới chỉ chứa name và price
const productInfo = products.map(item => ({
    name: item.name,
    price: item.price
}));

// Câu 4: Lọc sản phẩm còn hàng
const availableStock = products.filter(item => item.quantity > 0);

// Câu 5: Kiểm tra có sản phẩm giá > 30 triệu
const checkHighPrice = products.some(item => item.price > 30000000);

// Câu 6: Kiểm tra Accessories có đang bán không
const accessoriesStatus = products
    .filter(item => item.category === "Accessories")
    .every(item => item.isAvailable);

// Câu 7: Tính tổng giá trị kho
const inventoryTotal = products.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

// Câu 8: for...of
let listByForOf = "";
for (const item of products) {
    listByForOf += `${item.name} | ${item.category} | ${item.isAvailable}\n`;
}

// Câu 9: for...in
let detailByForIn = "";
for (const prop in products[0]) {
    detailByForIn += `${prop} => ${products[0][prop]}\n`;
}

// Câu 10: Sản phẩm đang bán và còn hàng
const sellingProducts = products
    .filter(item => item.isAvailable && item.quantity > 0)
    .map(item => item.name);

// Hiển thị kết quả
output.textContent = `
Câu 3 - Name & Price:
${JSON.stringify(productInfo, null, 2)}

Câu 4 - Sản phẩm còn hàng:
${availableStock.map(p => p.name).join(", ")}

Câu 5 - Có sản phẩm > 30 triệu:
${checkHighPrice}

Câu 6 - Accessories đang bán:
${accessoriesStatus}

Câu 7 - Tổng giá trị kho:
${inventoryTotal.toLocaleString()} VND

Câu 8 - for...of:
${listByForOf}

Câu 9 - for...in (sản phẩm đầu):
${detailByForIn}

Câu 10 - Đang bán & còn hàng:
${sellingProducts.join(", ")}
`;