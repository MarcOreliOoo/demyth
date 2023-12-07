import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import Link from "next/link";

const TestCard = () => {
    return (
        <div className="container">
            <Link
                href="/examples/authentication"
                className={cn(buttonVariants({ variant: "secondary" }), "absolute right-4 top-4 md:right-8 md:top-8")}
            >
                Login
            </Link>
            <div className="grid grid-cols-4 gap-16">
                <Button size="default">default</Button>
                <Button size="sm">default</Button>
                <Button size="lg">default</Button>
                <Button size="icon">default</Button>
                <Button variant="destructive" size="default">
                    destructive
                </Button>
                <Button variant="destructive" size="sm">
                    destructive
                </Button>
                <Button variant="destructive" size="lg">
                    destructive
                </Button>
                <Button variant="destructive" size="icon">
                    destructive
                </Button>
                <Button variant="outline" size="default">
                    outline
                </Button>
                <Button variant="outline" size="sm">
                    outline
                </Button>
                <Button variant="outline" size="lg">
                    outline
                </Button>
                <Button variant="outline" size="icon">
                    outline
                </Button>
                <Button variant="secondary" size="default">
                    secondary
                </Button>
                <Button variant="secondary" size="sm">
                    secondary
                </Button>
                <Button variant="secondary" size="lg">
                    secondary
                </Button>
                <Button variant="secondary" size="icon">
                    secondary
                </Button>
                <Button variant="ghost" size="default">
                    ghost
                </Button>
                <Button variant="ghost" size="sm">
                    ghost
                </Button>
                <Button variant="ghost" size="lg">
                    ghost
                </Button>
                <Button variant="ghost" size="icon">
                    ghost
                </Button>
                <Button variant="link" size="default">
                    link
                </Button>
                <Button variant="link" size="sm">
                    link
                </Button>
                <Button variant="link" size="lg">
                    link
                </Button>
                <Button variant="link" size="icon">
                    link
                </Button>
            </div>
            <Card className="bg-glassmorphism text-glassmorphism-foreground blur-saturate-glass hover:bg-glassmorphism-hover absolute top-0">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TestCard;
