
export const POST=async(req,res)=>{
    await req.json();
    const mapboxUrl=`${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
    try {
        const response=await fetch(mapboxUrl);
        const data=await response.json();
        return new Response(JSON.stringify(data.features[0].center),{status:200})
    } catch (error) {
        return new Response('failed to get location Co-ordinates',{status:500})
    }
}