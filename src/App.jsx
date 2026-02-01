import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Book from './pages/book/Book';
import Blog from './pages/blogs/Blog';
import BlogDetails from './pages/blogs/BlogDetails';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
