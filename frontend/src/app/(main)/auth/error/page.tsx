"use client";

import { useSearchParams } from "next/navigation";
import { _Alert, EAlertVariant } from "@/components/ui/shadderivated/_alert";

export default function Error() {
    const searchParams = useSearchParams();
    const reason = searchParams.get("error");

    return (
        <div className="section-min-height flex h-full scroll-mt-24 flex-col items-center justify-center">
            <_Alert
                evariant={EAlertVariant.DESTRUCTIVE}
                content={reason ?? ""}
                title="Something went wrong!"
                link={{ name: "Go back to auth", href: "/auth" }}
            />
        </div>
    );
}
