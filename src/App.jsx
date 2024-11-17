
import { Route, Routes } from 'react-router'
import './App.css'
import LayoutComponent from './component/layout/LayoutComponent'
import HomeComponet from './component/home/HomeComponet'
import CategoriesComponent from './component/catagories/CategoriesComponent'
import ProductsComponent from './component/products/ProductsComponent'
import CartComponent from './component/cart/CartComponent'
import SearchComponent from './component/search/SearchComponent'
import ToastNoticed from './component/toastNoticed/ToastNoticed'

function App() {

  return (
    <>
      {/* <div className="toast"> */}
        <ToastNoticed></ToastNoticed>
      {/* </div> */}
      <Routes>
          <Route path='/' element={<LayoutComponent/>}>
            <Route index element={<HomeComponet/>}/>
            <Route path='/categories/:id' element={<CategoriesComponent/>}/>
            <Route path='/product/:id/:name' element={<ProductsComponent/>}/>
            <Route path='/cart' element={<CartComponent/>}/>
            <Route path='/search' element={<SearchComponent/>}/>
            {/* <Route path='/product/:id/:name' element={<HomeComponet/>}/> */}
          </Route>
      </Routes>

      
    </>
  )
}

export default App
