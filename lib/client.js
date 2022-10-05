import sanityClient from "@sanity/client"
import imageUrlBulider from "@sanity/image-url";

export const client = sanityClient({
    projectId:"b8swmp7d",
    dataset:"production",
    apiVersion:"2022-10-03",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const bulider =imageUrlBulider(client);


export const urlFor =(source) => bulider.image (source);