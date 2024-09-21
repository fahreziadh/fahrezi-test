import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-foreground/70">
        {`Oops! The page you're looking for doesn't exist.`}
      </p>
      <Link href="/" passHref>
        <Button variant="outline" size="lg">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
