import { VariantProps, cva, cx } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const commonButtonStyles = cx(
    "transition duration-150 ease-in-out",
    "border",
    "rounded-lg",
    "font-semibold, leading-normal",
);

export const variantButtonStyles = cva(commonButtonStyles, {
    variants: {
        variant: {
            borders: [
                "border-gold-600",
                "text-gold-600",
                "hover:border-astral hover:text-astral",
                "focus:bg-shark-900 focus:outline-none focus:ring-0",
                "active:bg-shark-800 active:text-astral",
            ],
            filled: [
                "border-shark-900",
                "text-shark-900",
                "bg-gradient-to-r from-gold-400 to-gold-600",
                "hover:bg-gradient-to-r hover:from-astral-300 hover:to-astral-500",
                "focus:border-astral-600 focus:bg-gradient-to-r focus:from-astral focus:to-astral-600 focus:outline-none focus:ring-0",
                "active:border-astral active:bg-astral",
            ],
        },
        size: {
            header: ["w-[9rem]", "py-2", "text-lg", "justify-center text-center", "hidden sm:flex"],
            hero: ["px-8 py-4", "text-sm uppercase", "md:px-16 md:py-6 md:text-lg"],
        },
    },
    defaultVariants: {
        variant: "borders",
        size: "header",
    },
});

type DemythButtonProps = VariantProps<typeof variantButtonStyles> & ComponentProps<"button">;

export function DemythButton({ variant, size, className, children, ...props }: DemythButtonProps) {
    return (
        <button {...props} className={twMerge(variantButtonStyles({ variant, size }), className)}>
            {children}
        </button>
    );
}
