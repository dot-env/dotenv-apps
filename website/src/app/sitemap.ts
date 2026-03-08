import type { MetadataRoute } from 'next';
import { navData } from '#/configs/nav-bar';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.dotenv.co.za';

export async function generateSitemaps() {
    // We only have one sitemap right now since we have a small site,
    // but this structure allows it to grow in the future.
    return [{ id: 0 }];
}

export default async function sitemap(props: {
    id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
    // The id is provided as a Promise resolving to string (Next.js 16+)
    const idValue = await props.id;
    const id = parseInt(idValue, 10);

    // You can slice your routes based on the id just like the docs if you grow over 50k URLs
    // For now, id 0 returns all static routes.
    if (id !== 0) return [];

    // Start with foundational hidden/utility routes
    const routes = ['/privacy-policy'];

    // Add all primary navigation routes dynamically
    navData.menu.forEach((menuItem) => {
        if (menuItem.url) {
            routes.push(menuItem.url as string);
        }

        if (menuItem.items && menuItem.items.length > 0) {
            menuItem.items.forEach((subItem) => {
                if (subItem.url) {
                    routes.push(subItem.url as string);
                }
            });
        }
    });

    // Ensure unique paths
    const uniqueRoutes = Array.from(new Set(routes));

    return uniqueRoutes.map((route) => ({
        url: `${BASE_URL}${route.replace(/\/$/, '')}`,
        lastModified: new Date(),
        // Standard change frequencies and priorities
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.8,
    }));
}
