import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from "next-santiy";  

export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered "public", but you can use environment variables
     * if you want to differ between local, dev and production
     * 
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    /**
     * Set useCdn to 'false if your application requires the freshest possbible
     * data always (potentially slightly slower and a bit more expensive).
     * Authentcated requests (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === "production",
};

// Set up client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);