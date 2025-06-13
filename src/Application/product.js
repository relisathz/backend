
const products = [
    {
      categoryId: "1",
      image: "/assets/products/airpods-max.png",
      id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/echo-dot.png",
      id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/assets/products/pixel-buds.png",
      id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/assets/products/quietcomfort.png",
      id: "4",
      name: "Bose QuiteComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/soundlink.png",
      id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/assets/products/apple-watch.png",
      id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/iphone-15.png",
      id: "7",
      name: "Apple Iphone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/pixel-8.png",
      id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];


export const getProducts = (req, res) => {


   return res.status(200).json(products).send()
}
// export const createProduct = (req, res) => {
//     const newProduct=req.body
//     res.status(201).json(newProduct).send() 
// }
// 
export const createProduct=(req,res)=>{
products.push(req.body);
return res.status(201).send()

}
export const getProduct = (req, res) => {
    const id  = req.params.id
    const product = products.find((pro) => pro.id == id);
if(!product){
  return res.status(404).send();
}
    return res.status(200).json(product).send()
};

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((pro) => pro.id == id);

    if(index == -1) {
      return res.status(404).send()}{

        products.splice(index,1)
    }

    return res.status(204).send()

}


export const updateProduct = (req, res) => {
  const id=req.params.id
  const product=products.indexOf((pro)=>pro.id==id)
if(!product){
  //known error.it mean someone click 67 id number.there is no.so can apply this
  return  res.status(404).send()
}
product.name=req.body.name;
product.price=req.body.price;
product.description=req.body.description;
product.image=req.body.image;


    return res.status(200).send()
}