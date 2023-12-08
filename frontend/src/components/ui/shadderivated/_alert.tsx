import { ExclamationTriangleIcon, RocketIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export enum EAlertVariant {
    DEFAULT = "default",
    DESTRUCTIVE = "destructive",
    WARNING = "warning",
    SUCCESS = "success",
}

export type TAlertProps = {
    evariant: EAlertVariant;
    title?: string;
    content?: string;
    link?: {
        name: string;
        href: string;
    };
};

export const alertMap = {
    [EAlertVariant.DEFAULT]: {
        icon: <RocketIcon className="h-4 w-4" />,
    },
    [EAlertVariant.DESTRUCTIVE]: {
        icon: <ExclamationTriangleIcon className="h-4 w-4" />,
    },
    [EAlertVariant.WARNING]: {
        icon: <ExclamationTriangleIcon className="h-4 w-4" />,
    },
    [EAlertVariant.SUCCESS]: {
        icon: <CheckCircledIcon className="h-4 w-4" />,
    },
};

export function _Alert({ evariant, title, content, link }: TAlertProps) {
    const { icon } = alertMap[evariant];
    return (
        <Alert variant={evariant}>
            {icon}
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription className="flex flex-col items-start justify-start">
                {content}
                {link && (
                    <Link href={link.href} className={cn(buttonVariants({ variant: "link", size: "default" }), "px-0")}>
                        {link.name}
                    </Link>
                )}
            </AlertDescription>
        </Alert>
    );
}
