"use client";
import { ShoppingBag } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import useHasMounted from "@/hooks/useHasMounted";
import { useState } from "react";

export default function CartAction() {
  if (!useHasMounted)
    return (
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger>
            <Button className="flex items-center gap-1 rounded-3xl">
              <ShoppingBag size={18} color="white" />
              <span>0</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
}
