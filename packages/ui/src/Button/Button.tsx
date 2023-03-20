import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import tw from 'tailwind-utils'

const buttonVariants = cva(
  'active:ui-scale-95 ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-text-sm ui-font-medium ui-transition-colors focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-slate-400 focus:ui-ring-offset-2 dark:hover:ui-bg-slate-800 dark:hover:ui-text-slate-100 disabled:ui-opacity-50 dark:focus:ui-ring-slate-400 disabled:ui-pointer-events-none dark:focus:ui-ring-offset-slate-900 data-[state=open]:ui-bg-slate-100 dark:data-[state=open]:ui-bg-slate-800',
  {
    variants: {
      variant: {
        default:
          'ui-bg-slate-900 ui-text-white hover:ui-bg-slate-700 dark:ui-bg-slate-50 dark:ui-text-slate-900',
        destructive: 'ui-bg-red-500 ui-text-white hover:ui-bg-red-600 dark:hover:ui-bg-red-600',
        outline:
          'ui-bg-transparent ui-border ui-border-slate-200 hover:ui-bg-slate-100 dark:ui-border-slate-700 dark:ui-text-slate-100',
        subtle:
          'ui-bg-slate-100 ui-text-slate-900 hover:ui-bg-slate-200 dark:ui-bg-slate-700 dark:ui-text-slate-100',
        ghost:
          'ui-bg-transparent hover:ui-bg-slate-100 dark:hover:ui-bg-slate-800 dark:ui-text-slate-100 dark:hover:ui-text-slate-100 data-[state=open]:ui-bg-transparent dark:data-[state=open]:ui-bg-transparent',
        link: 'ui-bg-transparent dark:ui-bg-transparent ui-underline-offset-4 hover:ui-underline ui-text-slate-900 dark:ui-text-slate-100 hover:ui-bg-transparent dark:hover:ui-bg-transparent',
      },
      size: {
        default: 'ui-h-10 ui-py-2 ui-px-4',
        sm: 'ui-h-9 ui-px-2 ui-rounded-md',
        lg: 'ui-h-11 ui-px-8 ui-rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={tw.merge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
