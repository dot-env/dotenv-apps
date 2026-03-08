import React from 'react';

/**
 * Reusable JSON-LD component for Next.js 14/15
 * Handles sanitization to prevent XSS.
 * 
 * @see https://nextjs.org/docs/app/guides/json-ld
 */
export const JsonLd = ({ data }: { data: any }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, '\\u003c'),
            }}
        />
    );
};
