import { QueryClient, QueryClientProvider } from 'react-query';
import ProductList from './Task-2/ProductList';
import AddProductForm from './Task-2/AddProductForm';

const queryClient = new QueryClient();

const Task2: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
      <div>
        {/* <h1>Product Management App</h1> */}
        <ProductList />
        <AddProductForm />
      </div>
    </QueryClientProvider>
    )
};
export default Task2;