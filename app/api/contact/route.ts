import { NextResponse } from "next/server";
import {Resend} from "resend";


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request){
    const data = await req.json();

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "sayeed51003@gmail.com",
            subject: `New message from ${data.name}`,
            html: `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong>${data.email}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `
        })

        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({error}, {status: 500})
    }
}