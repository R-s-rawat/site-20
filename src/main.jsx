import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserReducer'




// const app = express();
// const port = process.env.PORT || 3001;

// const app = express();
// const port = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   // console.log(`Listening on port ${port}...`);
// });


const store = configureStore({
  reducer:{
    //user
    users:userReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
