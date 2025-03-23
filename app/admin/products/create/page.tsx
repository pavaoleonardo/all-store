import { Metadata } from 'next';
import ProductForm from '@/components/admin/product-form';
import { auth } from '@/auth';
import { requireAdmin } from '@/lib/auth-guard';

export const metadata: Metadata = {
  title: 'Create Product',
};

const CreateProductPage = async () => {
  await requireAdmin();

  const session = await auth();

  if (session?.user?.role !== 'admin') {
    throw new Error('User is not authorized to access this page');
  }
  return (
    <>
      <h2 className='h2-bold'>Create Product</h2>
      <div className='my-8'>
        <ProductForm type='Create' />
      </div>
    </>
  );
};

export default CreateProductPage;
