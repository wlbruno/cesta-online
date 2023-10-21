"use client";

import { HomeIcon, Leaf, ListOrdered, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { sign } from "crypto";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";

const Header = () => {
    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
    };

    const handLogoutClick = async () => {
        await signOut();
    }
    
    return (
        <Card className="flex justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>

                    {status === 'authenticated' && data?.user && (
                        <div className="flex flex-col">
                            <div className="py-4 flex items-center gap-2">
                                <Avatar>
                                    {data.user.image && <AvatarImage src={data.user.image} className="rounded-full" />}
                                        <AvatarFallback>
                                            {data.user.name?.[0].toUpperCase()}
                                        </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                        <p className="font-medium">{data.user.name}</p>
                                        <p className="text-sm opacity-75">Boas compras!</p>
                                </div>
                           </div>

                           <Separator />
                        </div>
                    )}
                  
                    <div className="mt-2 flex flex-col gap-3">
                        {status === 'unauthenticated' && (
                            <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon size={16} /> 
                                Fazer Login
                        </Button>
                        )}
                        {status === 'authenticated' && (
                          <Button onClick={handLogoutClick} variant="outline" className="w-full justify-start gap-2">
                          <LogOutIcon size={16} /> 
                               Fazer Logout
                        </Button>
                        )}

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16} /> 
                                 Início
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon  size={16}/> 
                                 Ofertas
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon  size={16}/> 
                                 Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
            

            <h1 className="font-semibold text-lg"><span className="text-primary">Cesta</span> Online</h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}
 
export default Header;