"use client";

import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteProduct } from "@/server/actions/products";
import { useTransition } from "react";
import { toast } from "sonner";


export function DeleteProductAlertDialogContent({ id }: { id: string }) {
    const [isDeletePending, startDeleteTransition] = useTransition();
    // const { toast } = useToast();

    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete this
                    product.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={() => {
                        startDeleteTransition(async () => {
                            const data = await deleteProduct(id);
                            if (data.message) {
                                toast(data.error ? "Error" : "Success", {
                                    description: data.message,
                                    style: data.error
                                        ? { backgroundColor: "#f87171", color: "#fff" }
                                        : undefined,
                                });
                            }
                        });
                    }}
                    disabled={isDeletePending}
                >
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}
