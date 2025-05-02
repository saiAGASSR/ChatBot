import Card from "./Card";

const Cards = () => {
    let object1 =  {
        "title": "SoundPro X1 True Wireless Earbuds",
        "description": "Enjoy crystal-clear sound with deep bass, active noise cancellation, and a 40-hour battery life. Water-resistant and perfect for workouts.",
        "actualPrice": 4999,
        "discountedPrice": 2999
      }
    
    
        let object2 =  {
          "title": "FitLife Smartwatch Pro",
          "description": "A sleek smartwatch with heart rate monitoring, sleep tracking, SpO2, and customizable watch faces. 7-day battery life and IP68 waterproof.",
          "actualPrice": 7499,
          "discountedPrice": 4999
        }
    
        let object3 =  {
          "title": "ErgoComfort High-Back Mesh Chair",
          "description": "Designed for long working hours, featuring lumbar support, breathable mesh, and an adjustable height & recline system.",
          "actualPrice": 12999,
          "discountedPrice": 8499
        }
        let productsArray = [ object1 , object2 , object3]

    return (
        <>
        
        <Card  object={object1}/>
        <Card  object={object2}/>
        <Card  object={object3} />
        </>
        
    );
};

export default Cards;
