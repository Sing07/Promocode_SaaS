"use server"

import { productDetailsSchema } from "@/schemas/products";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function createProduct(unsafeData: z.infer<typeof productDetailsSchema>){
    const {userId} = await auth()

    const {success, data} = productDetailsSchema.safeParse(unsafeData)

    if(!success || userId == null){
        return { error: true, message: "There was an error creating your product"}
    }

    createProductDb
}