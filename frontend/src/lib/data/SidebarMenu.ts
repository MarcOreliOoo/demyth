export const sidebarLinks = [
    {
        name: "Hero",
        href: "/home/hero",
    },
    {
        name: "Hero",
        href: "/home/hero/create",
    },
    {
        name: "Fellowship",
        href: "/home/fellowship",
    },
    {
        name: "Arena",
        href: "/home/arena",
    },
    {
        name: "Building",
        href: "/home/building",
    },
    {
        name: "Ranking",
        href: "/home/ranking",
    },
] as const;

export type TSidebarLinks = typeof sidebarLinks;
