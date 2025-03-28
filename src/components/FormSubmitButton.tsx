"use client";
import {ComponentProps} from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
     children: React.ReactNode;
     className?: string;
} & ComponentProps<"button">

export default function FormSubmitButton(
    {
children,className,

...props
    }: FormSubmitButtonProps
){

    const {pending} = useFormStatus();
return(
    <button
    {...props}
    className={`btn btn-primary btn-sm w-1/2 block mx-auto px-6 py-2 text-center ${className}`}
   type="submit"
   disabled={pending}
   {...(pending ? { "aria-busy": true } : {})}
   > {pending && <span className="loading loading-dots loading-md"/>}{children}</button>
)
}