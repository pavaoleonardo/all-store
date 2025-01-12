import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserIcon } from 'lucide-react';

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href='/sign-in'>
          <UserIcon /> Sign In
        </Link>
      </Button>
    );
  }

  const firstInitalName =
    session.user?.name?.split(' ')[0]?.charAt(0)?.toUpperCase() ?? '';

  return (
    <div className='flex gap-2 flex-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex item-center'>
            <Button
              variant='ghost'
              className='relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-200 text-gray-800'
            >
              {firstInitalName}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-58' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <div className='text-sm font-medium leading-none'>
                {session.user?.name}
              </div>
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='text-sm text-muted-foreground leading-none'>
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className='p-0 mb-1'>
            <form action={signOutUser} className='w-full'>
              <Button className='w-full px-4 h-2 justify-start' variant='ghost'>
                Sign out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
