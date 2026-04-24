import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

const base =
  'cursor-pointer inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:hover:border-neutral-200 disabled:hover:bg-neutral-100 disabled:hover:text-neutral-500';

const variants = {
  default:
    'border-neutral-200 bg-white text-neutral-600 hover:border-black hover:text-black',
  primary:
    'border-black bg-black text-white hover:bg-white hover:text-black hover:border-black',
} as const;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
  className?: string;
  variant?: keyof typeof variants;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, className, type = 'button', variant = 'default', ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={twMerge(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
