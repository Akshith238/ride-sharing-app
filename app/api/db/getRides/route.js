import { connectToDb } from "@/utils/database";
import Ride from "@/models/Ride";

export const GET=async(request)=>{
    try {
        await connectToDb();
        const rides=await Ride.find({});
        return new Response(JSON.stringify(rides),{status:200});
    } catch (error) {
        return new Response('failed to fetch rides',{status:500});
    }
}