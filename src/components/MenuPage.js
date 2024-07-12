import React from 'react';
import '../styles/MenuPage.css';

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Latte", price: "$4.75(H)/$5.25(C)" },
      { name: "Cortado", price: "$4.25(H)/$4.75(C)" },
      { name: "Drip Coffee", price: "Small: $3(H)/$3.50(C), Medium: $3.50(H), Large: $4(H)/$4.25(C)" },
      { name: "Cafe au Lait", price: "$3.25(H)" },
      { name: "Cappuccino", price: "$4.50(H)" },
      { name: "Mocha", price: "$5.75(H)/$6.25(C)" },
      { name: "Red Eye", price: "$4.50(H)/$4.75(C)" },
      { name: "Americano", price: "$3.75(H)/$4.25(C)" }
    ]
  },
  {
    category: "Specialty Drinks",
    items: [
      { name: "Matcha Latte", price: "$5.25(H)/$5.75(C)" },
      { name: "Hot Chocolate", price: "$4.50(H), S'mores: $5.50" },
      { name: "Nutella Latte", price: "$5.75(H)/$6.25(C)" },
      { name: "Chai", price: "$5.00(H)/$5.50(C)" },
      { name: "Dirty Chai", price: "$6.25(H)/$6.75(C)" },
      { name: "Lavendar Latte", price: "$5.75(H)/$6.25(C)" },
      { name: "Rose Latte", price: "$5.75(H)/$6.25(C)" },
      { name: "Brown Sugar Latte", price: "$5.75(H)/$6.25(C)" },
      { name: "Bumblebee Latte", price: "$6.25(H)/$6.75(C)" }
    ]
  },
  {
    category: "Boba",
    items: [
      { name: "The OG", price: "Medium: $4.25, Large: $5.25, Hot: $5.25" },
      { name: "Brown Sugar Boba", price: "Medium: $4.75, Large: $5.75, Hot: $5.75" },
      { name: "Taro Boba", price: "Medium: $4.25, Large: $5.25, Hot: $5.25" },
      { name: "Fruit Green/Black Tea", price: "Medium: $4.25, Large: $5.25" },
      { name: "Fruit Black Tea", price: "Medium: $4.25, Large: $5.25" },
      { name: "Jasmine Milk Tea", price: "Medium: $4.25, Large: $5.25, Hot: $5.25" },
      { name: "Wintermelon Milk Tea", price: "Medium: $4.25, Large: $5.25, Hot: $5.25" }
    ]
  },
  {
    category: "Hot Bites",
    items: [
      { name: "Chicken Poppers", price: "$6.00" },
      { name: "Mozz Sticks", price: "$7.00" },
      { name: "Pigs in a Blanket", price: "$7.00" },
      { name: "Tater Tots", price: "$5.00" },
      { name: "Chicken Tenders", price: "$8.00" },
      { name: "Onion Rings", price: "$5.00" },
      { name: "Fries", price: "$5.00" },
      { name: "Sweet Potato Fries", price: "$6.00" }
    ]
  },
  {
    category: "Sandwiches & Salads",
    items: [
      { name: "Beyond Bussin Sandwich", price: "$15.00" },
      { name: "Spicy Chicken Sandwich", price: "$13.00" },
      { name: "Italian Panini", price: "$11.00" },
      { name: "Tuna Melt", price: "$11.00" },
      { name: "Zesto Chicken Sandwich", price: "$13.00" },
      { name: "Turkey Club", price: "$11.00" },
      { name: "Grilled Cheese", price: "$6.50" },
      { name: "Mixed Green Salad", price: "$6.50" },
      { name: "Cobb Salad", price: "$10.00" },
      { name: "Pizza Panini", price: "$11.00" },
      { name: "Smoked Salmon Tartine", price: "$11.00" },
      { name: "Avocado Toast", price: "$10.00" }
    ]
  },
  {
    category: "Seasonal Menu",
    items: [
      { name: "Pina Colada", price: "$4.75 (M) / $5.75 (L)" },
      { name: "Matcha Lemonade", price: "Medium: $5.00, Large: $6.00" },
      { name: "Yuzu-Ade", price: "Large: $5.25" },
      { name: "Freshly Squeezed Lemonade", price: "Medium: $4.00, Large: $5.00" },
      { name: "Matcha Lavender Oat", price: "$6.50" },
      { name: "Berry Lavendar Lemonade", price: "Medium: $5.25, Large: $6.25" },
      { name: "Citrus Boba (Grapefruit or Orange)", price: "Large: $6.00" },
      { name: "Rotating Beer/Wine Program", price: "Check out our beer and wine at the front of our store!" }
    ]
  }
];

const MenuPage = () => {
  React.useEffect(() => {
    document.title = "Sip n' Play - Menu";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        'content',
        'Explore our diverse menu at Sip n\' Play! From coffee to boba, hot bites to sandwiches, and seasonal specialties, there’s something for everyone.'
      );
  }, []);

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-content">
        {menuItems.map((section, index) => (
          <div key={index} className="menu-section">
            <h2>{section.category}</h2>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.name}:</strong> {item.price}
                </li>
              ))}
            </ul>
            {/* {section.category === "Boba" && <img src="../assets/boba.jpg" alt="Boba Drinks" className="menu-image" />}
            {section.category === "Hot Bites" && <img src="../assets/taters.jpg" alt="Hot Bites" className="menu-image" />}
            {section.category === "Sandwiches & Salads" && <img src="../assets/image.png" alt="Sandwiches & Salads" className="menu-image" />}
            {section.category === "Seasonal Menu" && <img src="../assets/pumpkins.png" alt="Seasonal Menu" className="menu-image" />} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
