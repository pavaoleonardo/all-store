import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from './product-price';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
  const imageUrl = product.images[0] || null;
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`}>
          {imageUrl ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
            />
          ) : (
            <div className='h-[289px] w-[289px] bg-gray-200 flex justify-center items-center'>
              <span className='text-gray-500'>No Image Available</span>
            </div>
          )}
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <div className='text-destructive'>Out of stock</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
