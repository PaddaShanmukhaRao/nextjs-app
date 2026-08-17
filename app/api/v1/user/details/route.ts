import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user: "Shanmukh",
        email:"shanmuk@0963",
        Quaification:"BTECH"
    })
}