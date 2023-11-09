const productsSeed = [
  {
    title: "Cama King Size",
    description: "Cama amplia y cómoda para tu dormitorio",
    code: "DKS789",
    stock: 10,
    price: 799.99,
    category: "Dormitorio",
  },
  {
    title: "Manzanas",
    description: "Manzanas frescas y deliciosas",
    code: "MAN456",
    stock: 100,
    price: 1.99,
    category: "Frutas",
  },
  {
    title: "Lavadora de Carga Frontal",
    description: "Lavadora eficiente para tu hogar",
    code: "LAV123",
    stock: 20,
    price: 499.99,
    category: "Electrodomesticos",
  },
  {
    title: "iPhone 13 Pro",
    description: "Smartphone de última generación",
    code: "IP13P",
    stock: 30,
    price: 999.99,
    category: "Celulares",
  },
  {
    title: "Sofá Reclinable",
    description: "Sofá cómodo y elegante para la sala de estar",
    code: "SR123",
    stock: 15,
    price: 599.99,
    category: "Dormitorio",
  },
  {
    title: "Peras",
    description: "Peras frescas y jugosas",
    code: "PER789",
    stock: 80,
    price: 2.49,
    category: "Frutas",
  },
  {
    title: "Horno de Microondas",
    description: "Horno de microondas compacto y práctico",
    code: "HM456",
    stock: 25,
    price: 89.99,
    category: "Electrodomesticos",
  },
  {
    title: "Samsung Galaxy S22",
    description: "Potente smartphone de Samsung",
    code: "SGS22",
    stock: 40,
    price: 799.99,
    category: "Celulares",
  },
  {
    title: "Armario de Ropa",
    description: "Armario espacioso para guardar tu ropa",
    code: "AR789",
    stock: 12,
    price: 349.99,
    category: "Dormitorio",
  },
  {
    title: "Naranjas",
    description: "Naranjas frescas y saludables",
    code: "NAR123",
    stock: 75,
    price: 1.79,
    category: "Frutas",
  },
  {
    title: "Licuadora",
    description: "Licuadora potente para preparar smoothies",
    code: "LCB456",
    stock: 18,
    price: 49.99,
    category: "Electrodomesticos",
  },
  {
    title: "Google Pixel 7",
    description: "Smartphone de Google con cámara excepcional",
    code: "GPX7",
    stock: 35,
    price: 849.99,
    category: "Celulares",
  },
  {
    title: "Mesa de Noche",
    description: "Mesa de noche elegante para tu dormitorio",
    code: "MN789",
    stock: 10,
    price: 99.99,
    category: "Dormitorio",
  },
  {
    title: "Uvas",
    description: "Uvas frescas y deliciosas",
    code: "UVA123",
    stock: 60,
    price: 2.99,
    category: "Frutas",
  },
  {
    title: "Aspiradora Robot",
    description: "Aspiradora inteligente para la limpieza automática",
    code: "ARB456",
    stock: 22,
    price: 299.99,
    category: "Electrodomesticos",
  },
  {
    title: "OnePlus 10 Pro",
    description: "Potente smartphone de OnePlus",
    code: "OP10P",
    stock: 30,
    price: 799.99,
    category: "Celulares",
  },
  {
    title: "Cómoda de Dormitorio",
    description: "Cómoda espaciosa para guardar tu ropa",
    code: "CD789",
    stock: 10,
    price: 399.99,
    category: "Dormitorio",
  },
  {
    title: "Perales",
    description: "Perales frutales para tu jardín",
    code: "PRL123",
    stock: 8,
    price: 49.99,
    category: "Frutas",
  },
  {
    title: "Cafetera",
    description: "Cafetera programable para el café perfecto",
    code: "CFE456",
    stock: 28,
    price: 79.99,
    category: "Electrodomesticos",
  },
  {
    title: "Xiaomi Mi 12",
    description: "Smartphone de Xiaomi con pantalla AMOLED",
    code: "XM12",
    stock: 30,
    price: 699.99,
    category: "Celulares",
  },
  {
    title: "Sillón Reclinable",
    description: "Sillón cómodo y reclinable para tu sala de estar",
    code: "SLR123",
    stock: 14,
    price: 499.99,
    category: "Dormitorio",
  },
  {
    title: "Kiwi",
    description: "Kiwi fresco y nutritivo",
    code: "KIW789",
    stock: 50,
    price: 1.49,
    category: "Frutas",
  },
  {
    title: "Horno Convencional",
    description: "Horno convencional para hornear tus delicias",
    code: "HC456",
    stock: 15,
    price: 249.99,
    category: "Electrodomesticos",
  },
  {
    title: "Sony Xperia 5 III",
    description: "Smartphone de Sony con pantalla OLED",
    code: "SXP5",
    stock: 30,
    price: 699.99,
    category: "Celulares",
  },
  {
    title: "Escritorio de Estudio",
    description: "Escritorio espacioso para tu zona de estudio",
    code: "EE789",
    stock: 10,
    price: 149.99,
    category: "Dormitorio",
  },
  {
    title: "Fresas",
    description: "Fresas frescas y deliciosas",
    code: "FRA123",
    stock: 70,
    price: 2.29,
    category: "Frutas",
  },
  {
    title: "Nevera de Doble Puerta",
    description: "Nevera grande con doble puerta para almacenamiento",
    code: "NDP456",
    stock: 10,
    price: 999.99,
    category: "Electrodomesticos",
  },
  {
    title: "LG Velvet 3",
    description: "Smartphone de LG con diseño elegante",
    code: "LGV3",
    stock: 30,
    price: 599.99,
    category: "Celulares",
  },
  {
    title: "Mesa de Comedor",
    description: "Mesa de comedor amplia para tus reuniones",
    code: "MDC789",
    stock: 10,
    price: 299.99,
    category: "Dormitorio",
  },
  {
    title: "Plátanos",
    description: "Plátanos maduros y deliciosos",
    code: "PLT123",
    stock: 90,
    price: 0.99,
    category: "Frutas",
  },
  {
    title: "Secadora de Ropa",
    description: "Secadora eficiente para tus prendas",
    code: "SDR456",
    stock: 20,
    price: 349.99,
    category: "Electrodomesticos",
  },
  {
    title: "Google Pixel 6a",
    description: "Smartphone compacto de Google",
    code: "GPX6a",
    stock: 35,
    price: 499.99,
    category: "Celulares",
  },
  {
    title: "Mesa de Café",
    description: "Mesa de café elegante para tu sala de estar",
    code: "MC789",
    stock: 10,
    price: 89.99,
    category: "Dormitorio",
  },
  {
    title: "Sandías",
    description: "Sandías frescas y refrescantes",
    code: "SND123",
    stock: 40,
    price: 4.99,
    category: "Frutas",
  },
  {
    title: "Batidora de Mano",
    description: "Batidora de mano versátil para tu cocina",
    code: "BDM456",
    stock: 18,
    price: 39.99,
    category: "Electrodomesticos",
  },
  {
    title: "OnePlus Nord 2",
    description: "Smartphone de OnePlus con rendimiento sólido",
    code: "OPN2",
    stock: 30,
    price: 499.99,
    category: "Celulares",
  },
  {
    title: "Mesa de Escritura",
    description: "Mesa de escritura con cajones para tus tareas",
    code: "ME789",
    stock: 10,
    price: 129.99,
    category: "Dormitorio",
  },
  {
    title: "Cerezas",
    description: "Cerezas frescas y deliciosas",
    code: "CRZ123",
    stock: 60,
    price: 3.49,
    category: "Frutas",
  },
  {
    title: "Cocina de Inducción",
    description: "Cocina de inducción eficiente para cocinar",
    code: "CDI456",
    stock: 25,
    price: 299.99,
    category: "Electrodomesticos",
  },
  {
    title: "Samsung Galaxy A53",
    description: "Smartphone de Samsung con gran duración de batería",
    code: "SGA53",
    stock: 30,
    price: 399.99,
    category: "Celulares",
  },
  {
    title: "Armario de Almacenamiento",
    description: "Armario de almacenamiento espacioso",
    code: "AA789",
    stock: 10,
    price: 199.99,
    category: "Dormitorio",
  },
  {
    title: "Uvas Rojas",
    description: "Uvas rojas frescas y dulces",
    code: "UR123",
    stock: 50,
    price: 2.99,
    category: "Frutas",
  },
  {
    title: "Batidora de Pie",
    description: "Batidora de pie potente para tus recetas",
    code: "BDP456",
    stock: 20,
    price: 69.99,
    category: "Electrodomesticos",
  },
  {
    title: "Sony Xperia 10 Plus",
    description: "Smartphone de Sony con gran pantalla",
    code: "SXP10P",
    stock: 25,
    price: 449.99,
    category: "Celulares",
  },
];

(function () {
  const addProduct = (product) => {
    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al realizar la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        // Procesa la respuesta si es necesario
        console.log(data);
        // Limpia los campos del formulario después de enviar
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("code").value = "";
        document.getElementById("stock").value = "";
        document.getElementById("price").value = "";
        document.getElementById("category").value = "";
        document.getElementById("thumbnails").value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formProduct = document.getElementById("form-product");

  formProduct.addEventListener("submit", (e) => {
    e.preventDefault();

    const thumbnails = document.getElementById("thumbnails").value;

    const newProduct = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      code: document.getElementById("code").value,
      stock: document.getElementById("stock").value,
      stock: document.getElementById("price").value,
      category: document.getElementById("category").value,
      thumbnails: thumbnails === "" ? [] : thumbnails,
    };

    addProduct(newProduct);
  });

  // for (const product of productsSeed) {
  //   console.log(product);
  //   addProduct(product);
  // }
})();
