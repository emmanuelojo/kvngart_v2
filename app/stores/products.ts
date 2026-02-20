import type { Category, Product } from "~/types/Products";

interface ProductsStoreState {
  products: Product[];
  product: Product | null;
  categories: Category[];
  showSearchModal: boolean;
  searchTerm: string;
}

export const useProductsStore = defineStore("productsStore", {
  state: (): ProductsStoreState => {
    return {
      products: [
        {
          id: 21,
          title: "Efficient 2-Slice Toaster",
          slug: "efficient-2-slice-toaster",
          price: 48,
          description:
            "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: [
            "https://i.imgur.com/keVCVIa.jpeg",
            "https://i.imgur.com/afHY7v2.jpeg",
            "https://i.imgur.com/yAOihUe.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 25,
          title: "Stylish Red & Silver Over-Ear Headphones",
          slug: "stylish-red-silver-over-ear-headphones",
          price: 339,
          description:
            "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: [
            "https://i.imgur.com/YaSqa06.jpeg",
            "https://i.imgur.com/isQAliJ.jpeg",
            "https://i.imgur.com/5B8UQfh.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T17:19:13.000Z",
        },
        {
          id: 26,
          title: "Sleek Mirror Finish Phone Case",
          slug: "sleek-mirror-finish-phone-case",
          price: 27,
          description:
            "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: [
            "https://i.imgur.com/yb9UQKL.jpeg",
            "https://i.imgur.com/m2owtQG.jpeg",
            "https://i.imgur.com/bNiORct.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 28,
          title: "Sleek Modern Leather Sofa",
          slug: "sleek-modern-leather-sofa",
          price: 53,
          description:
            "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
          category: {
            id: 3,
            name: "Updated Category Name",
            slug: "updated-category-name",
            image: "https://placeimg.com/640/480/any",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T14:09:58.000Z",
          },
          images: [
            "https://i.imgur.com/Qphac99.jpeg",
            "https://i.imgur.com/dJjpEgG.jpeg",
            "https://i.imgur.com/MxJyADq.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 29,
          title: "Mid-Century Modern Wooden Dining Table",
          slug: "mid-century-modern-wooden-dining-table",
          price: 24,
          description:
            "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
          category: {
            id: 3,
            name: "Updated Category Name",
            slug: "updated-category-name",
            image: "https://placeimg.com/640/480/any",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T14:09:58.000Z",
          },
          images: [
            "https://i.imgur.com/DMQHGA0.jpeg",
            "https://i.imgur.com/qrs9QBg.jpeg",
            "https://i.imgur.com/XVp8T1I.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 30,
          title: "Elegant Golden-Base Stone Top Dining Table",
          slug: "elegant-golden-base-stone-top-dining-table",
          price: 66,
          description:
            "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
          category: {
            id: 3,
            name: "Updated Category Name",
            slug: "updated-category-name",
            image: "https://placeimg.com/640/480/any",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T14:09:58.000Z",
          },
          images: [
            "https://i.imgur.com/NWIJKUj.jpeg",
            "https://i.imgur.com/Jn1YSLk.jpeg",
            "https://i.imgur.com/VNZRvx5.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 31,
          title: "Modern Elegance Teal Armchair",
          slug: "modern-elegance-teal-armchair",
          price: 25,
          description:
            "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
          category: {
            id: 3,
            name: "Updated Category Name",
            slug: "updated-category-name",
            image: "https://placeimg.com/640/480/any",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T14:09:58.000Z",
          },
          images: [
            "https://i.imgur.com/6wkyyIN.jpeg",
            "https://i.imgur.com/Ald3Rec.jpeg",
            "https://i.imgur.com/dIqo03c.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 32,
          title: "Elegant Solid Wood Dining Table",
          slug: "elegant-solid-wood-dining-table",
          price: 67,
          description:
            "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
          category: {
            id: 3,
            name: "Updated Category Name",
            slug: "updated-category-name",
            image: "https://placeimg.com/640/480/any",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T14:09:58.000Z",
          },
          images: [
            "https://i.imgur.com/4lTaHfF.jpeg",
            "https://i.imgur.com/JktHE1C.jpeg",
            "https://i.imgur.com/cQeXQMi.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 33,
          title: "Modern Minimalist Workstation Setup",
          slug: "modern-minimalist-workstation-setup",
          price: 49,
          description:
            "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
          category: {
            id: 3,
            name: "Updated Category Name",
            slug: "updated-category-name",
            image: "https://placeimg.com/640/480/any",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T14:09:58.000Z",
          },
          images: [
            "https://i.imgur.com/3oXNBst.jpeg",
            "https://i.imgur.com/ErYYZnT.jpeg",
            "https://i.imgur.com/boBPwYW.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 35,
          title: "Futuristic Holographic Soccer Cleats",
          slug: "futuristic-holographic-soccer-cleats",
          price: 39,
          description:
            "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/qNOjJje.jpeg",
            "https://i.imgur.com/NjfCFnu.jpeg",
            "https://i.imgur.com/eYtvXS1.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 36,
          title: "Rainbow Glitter High Heels",
          slug: "rainbow-glitter-high-heels",
          price: 39,
          description:
            "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/62gGzeF.jpeg",
            "https://i.imgur.com/5MoPuFM.jpeg",
            "https://i.imgur.com/sUVj7pK.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 37,
          title: "Chic Summer Denim Espadrille Sandals",
          slug: "chic-summer-denim-espadrille-sandals",
          price: 33,
          description:
            "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/9qrmE1b.jpeg",
            "https://i.imgur.com/wqKxBVH.jpeg",
            "https://i.imgur.com/sWSV6DK.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 38,
          title: "Vibrant Runners: Bold Orange & Blue Sneakers",
          slug: "vibrant-runners-bold-orange-blue-sneakers",
          price: 27,
          description:
            "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/hKcMNJs.jpeg",
            "https://i.imgur.com/NYToymX.jpeg",
            "https://i.imgur.com/HiiapCt.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 40,
          title: "Futuristic Silver and Gold High-Top Sneaker",
          slug: "futuristic-silver-and-gold-high-top-sneaker",
          price: 68,
          description:
            "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/npLfCGq.jpeg",
            "https://i.imgur.com/vYim3gj.jpeg",
            "https://i.imgur.com/HxuHwBO.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 41,
          title: "Futuristic Chic High-Heel Boots",
          slug: "futuristic-chic-high-heel-boots",
          price: 36,
          description:
            "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/HqYqLnW.jpeg",
            "https://i.imgur.com/RlDGnZw.jpeg",
            "https://i.imgur.com/qa0O6fg.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 42,
          title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
          slug: "elegant-patent-leather-peep-toe-pumps",
          price: 53,
          description:
            "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/AzAY4Ed.jpeg",
            "https://i.imgur.com/umfnS9P.jpeg",
            "https://i.imgur.com/uFyuvLg.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 43,
          title: "Elegant Purple Leather Loafers",
          slug: "elegant-purple-leather-loafers",
          price: 17,
          description:
            "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/Au8J9sX.jpeg",
            "https://i.imgur.com/gdr8BW2.jpeg",
            "https://i.imgur.com/KDCZxnJ.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 44,
          title: "Classic Blue Suede Casual Shoes",
          slug: "classic-blue-suede-casual-shoes",
          price: 39,
          description:
            "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: [
            "https://i.imgur.com/sC0ztOB.jpeg",
            "https://i.imgur.com/Jf9DL9R.jpeg",
            "https://i.imgur.com/R1IN95T.jpeg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 48,
          title: "Sleek Olive Green Hardshell Carry-On Luggage",
          slug: "sleek-olive-green-hardshell-carry-on-luggage",
          price: 48,
          description:
            "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
          category: {
            id: 5,
            name: "phone",
            slug: "phone",
            image:
              "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T12:47:13.000Z",
          },
          images: [
            "https://i.imgur.com/jVfoZnP.jpg",
            "https://i.imgur.com/Tnl15XK.jpg",
            "https://i.imgur.com/7OqTPO6.jpg",
          ],
          creationAt: "2026-02-08T08:11:49.000Z",
          updatedAt: "2026-02-08T08:11:49.000Z",
        },
        {
          id: 86,
          title: "New Product",
          slug: "new-product",
          price: 10,
          description: "A description",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: ["https://placehold.co/600x400"],
          creationAt: "2026-02-08T15:54:07.000Z",
          updatedAt: "2026-02-08T15:54:07.000Z",
        },
        {
          id: 87,
          title: "New Product 99",
          slug: "new-product-99",
          price: 10,
          description: "A description",
          category: {
            id: 5,
            name: "phone",
            slug: "phone",
            image:
              "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T12:47:13.000Z",
          },
          images: ["https://placehold.co/600x400"],
          creationAt: "2026-02-08T15:56:31.000Z",
          updatedAt: "2026-02-08T15:56:31.000Z",
        },
        {
          id: 88,
          title: "Belajar API Testing",
          slug: "belajar-api-testing",
          price: 10,
          description: "A description",
          category: {
            id: 5,
            name: "phone",
            slug: "phone",
            image:
              "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T12:47:13.000Z",
          },
          images: ["https://placehold.co/600x400"],
          creationAt: "2026-02-08T15:58:55.000Z",
          updatedAt: "2026-02-08T15:58:55.000Z",
        },
        {
          id: 89,
          title: "Belajar API Testing 2",
          slug: "belajar-api-testing-2",
          price: 10,
          description: "A description",
          category: {
            id: 5,
            name: "phone",
            slug: "phone",
            image:
              "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T12:47:13.000Z",
          },
          images: ["https://placehold.co/600x400"],
          creationAt: "2026-02-08T16:00:00.000Z",
          updatedAt: "2026-02-08T16:00:00.000Z",
        },
        {
          id: 90,
          title: "user_1770570049201mm",
          slug: "user-1770570049201mm",
          price: 100,
          description: "Updated description",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: ["https://placeimg.com/640/480/any"],
          creationAt: "2026-02-08T17:00:49.000Z",
          updatedAt: "2026-02-08T17:00:51.000Z",
        },
        {
          id: 91,
          title: "Wireless Bluetooth Headphones",
          slug: "wireless-bluetooth-headphones",
          price: 79,
          description: "Over‑ear wireless headphones with noise isolation and 30h battery life.",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: ["https://images.unsplash.com/photo-1518441902117-9f7baf0b03f0"],
          creationAt: "2026-02-08T18:42:01.000Z",
          updatedAt: "2026-02-08T18:42:01.000Z",
        },
        {
          id: 92,
          title: "Minimalist Wrist Watch",
          slug: "minimalist-wrist-watch",
          price: 120,
          description: "Slim stainless steel watch with leather strap.",
          category: {
            id: 4,
            name: "shoes",
            slug: "shoes",
            image:
              "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T11:54:29.000Z",
          },
          images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30"],
          creationAt: "2026-02-08T18:42:20.000Z",
          updatedAt: "2026-02-08T18:42:20.000Z",
        },
        {
          id: 93,
          title: "Running Sneakers",
          slug: "running-sneakers",
          price: 95,
          description: "Lightweight running shoes designed for comfort and grip.",
          category: {
            id: 2,
            name: "electronics34",
            slug: "electronics34",
            image: "https://images.com",
            creationAt: "2026-02-08T08:11:49.000Z",
            updatedAt: "2026-02-08T15:53:43.000Z",
          },
          images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff"],
          creationAt: "2026-02-08T18:42:48.000Z",
          updatedAt: "2026-02-08T18:42:48.000Z",
        },
      ],
      product: null,
      categories: [
        {
          id: 1,
          name: "Clothes",
          slug: "clothes",
          image: "https://i.imgur.com/QkIa5tT.jpeg",
          creationAt: "2026-02-13T14:53:57.000Z",
          updatedAt: "2026-02-13T14:53:57.000Z",
        },
        {
          creationAt: "2026-02-08T08:11:49.000Z",
          id: 4,
          image:
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "shoes",
          slug: "shoes",
          updatedAt: "2026-02-08T11:54:29.000Z",
        },
        {
          creationAt: "2026-02-08T08:11:49.000Z",
          id: 5,
          image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "phone",
          slug: "phone",
          updatedAt: "2026-02-08T12:47:13.000Z",
        },
      ],
      showSearchModal: false,
      searchTerm: "",
    };
  },

  getters: {
    filteredProducts(state) {
      if (!state.searchTerm.trim()) return state.products;

      return state.products.filter((product) => product.title.toLowerCase().includes(state.searchTerm.toLowerCase()));
    },
  },

  actions: {
    // async fetch () {
    //   const infos = await $fetch('https://api.nuxt.com/modules/pinia')
    //   this.name = infos.name
    //   this.description = infos.description
    // },

    getProduct(id: number): Product | null {
      const foundProduct = this.products.filter((product) => product.id === id);

      if (foundProduct.length > 0) {
        this.product = foundProduct[0] ?? null;
        return this.product;
      }

      return null;
    },

    toggleSearchModal(payload?: boolean) {
      if (payload) {
        this.showSearchModal = payload;
      }

      this.showSearchModal = !this.showSearchModal;
    },
  },
});
