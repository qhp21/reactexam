import ReactDOM from 'react-dom/client';
import ShoppingList from './ShoppingList.jsx';

const dom = <ShoppingList />;

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(dom);
