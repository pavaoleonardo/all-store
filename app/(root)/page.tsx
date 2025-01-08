import ProductList from '@/components/shared/products/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title='Newest arrivals' limit={4} />
    </>
  );
};

export default HomePage;
