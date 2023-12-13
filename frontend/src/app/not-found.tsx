import Link from "next/link";
import { EAlertVariant, _Alert } from "@/components/ui/shadderivated/_alert";

export default function NotFound() {
    return (
        <div className="container flex h-full items-center justify-center">
            <_Alert
                evariant={EAlertVariant.WARNING}
                title="Not Found"
                content="Could not find requested resource"
                link={{ name: "Return Home", href: "/home" }}
            />
        </div>
    );
}
