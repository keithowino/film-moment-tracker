import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

document.addEventListener("click", ((e) => {

  if (e.target.classList.contains("dis-more-btn") && e.target.parentElement.parentElement.nextSibling.classList.contains("hidden")) {
    e.target.innerHTML = "&uArr;";
    e.target.parentElement.parentElement.nextSibling.classList.remove("hidden");
    e.target.parentElement.parentElement.nextSibling.classList.add("dis-more");
  } else if (e.target.classList.contains("dis-more-btn") && e.target.parentElement.parentElement.nextSibling.classList.contains("dis-more")) {
    e.target.innerHTML = "&dArr;";
    e.target.parentElement.parentElement.nextSibling.classList.remove("dis-more");
    e.target.parentElement.parentElement.nextSibling.classList.add("hidden");
  }
}))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
