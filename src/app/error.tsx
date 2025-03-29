"use client";
import React from "react";



export default function ErrorPage(){
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center p-6">
          <div className="card bg-base-100 shadow-xl p-8 rounded-2xl max-w-md">
           
            <h1 className="text-3xl font-bold text-error mt-4">Oops! Something went wrong</h1>
            <p className="text-gray-500 mt-2">We couldn't process your request. Please try again later.</p>
           
          </div>
        </div>
      );
}