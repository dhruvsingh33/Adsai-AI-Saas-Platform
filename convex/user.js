import { ClientSegmentRoot } from "next/dist/client/components/client-segment";
import { mutation } from "./_generated/server";
import { CloudCog, Columns3Cog } from "lucide-react";
import { v } from 'convex/values';
export { CreateNewUser } from "./user"; 

export const CreateNewUser = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string(),

    },
    handler:async(ctx,args) => {
        //if user already exist?
        const userData=await ctx.db.query('user')
        .filter(q=>q.eq(q.field('email'), args.email))
        .collect();
        
        //if not then insert new user.
        if(userData?.length==0){
            const data={
                name:args.name,
                email:args.email,
                picture:args.picture,
                credits: 30

            }
            const result = await ctx.db.insert('user',{
                ...data
            });
            console.log(result); //inserted record ID
            return {
                ...data,
                _id:result
            }
        }

        return userData[0];
    }
})

export default CreateNewUser