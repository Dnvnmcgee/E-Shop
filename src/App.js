import "./categories.stlyes.scss";
import CategoryDirectory from "./components/category-directory/category-directory-component";



const App = () => {

  // an array with all the category titles so that we can map over them and generate divs
  //without hard coding each category title.
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

// putting the id,title,imageUrl into the map function makes it so we can use the data stored there.
// $ means your are appending something in the bottom example we are appending imageUrl object so that
// we generate the divs with the pictures stored in the array.
  return (
    <CategoryDirectory categories = {categories}/>
  );
}

export default App;