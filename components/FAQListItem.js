"use client";

import { useState } from 'react';

const FAQListItem = ({ qa }) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <li key={qa.question}>

            <button className="py-3 sm:py-5 font-semibold border-b w-full text-left flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}>
                <p className="text-sm sm:text-base">{qa.question}</p>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                }
            </button>

            <div className={`${isOpen ? "block" : "hidden"} mt-2 sm:mt-3 mb-4 sm:mb-6 opacity-90 text-sm sm:text-base`}>{qa.answer}</div>

        </li>
    )
}

export default FAQListItem;

