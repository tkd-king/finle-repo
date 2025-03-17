// import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

export default async function handler(_) {
  return NextResponse.status(200).json("success fully rout product")
}
