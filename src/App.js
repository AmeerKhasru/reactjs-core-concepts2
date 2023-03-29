import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Laptop', brand:'Lenovo', price: 51000},
    {name: 'Mobile', brand:'iphone', price: 75000},
    {name: 'Watch', brand:'Huawei', price: 13000},
    {name: 'Bike', brand:'Suzuki', price: 192000}
  ]
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} brand={product.brand} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name :{props.name} </h3>
      <p>Brand :{props.brand} </p>
      <p>Price:{props.price} </p>
    </div>
  )
}

export default App;
