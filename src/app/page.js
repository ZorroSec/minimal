'use client'
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import prisma from "@/../../lib/prisma";
import queryIp from "../../models/ip";
export default async function Home() {
  const ip = await queryIp()
  // console.log(ip)
  const user = await prisma.user.findMany({
    where: {
      ip: {
        equals: ip.ip
      }
    }
  })
  console.log(user)
  if(user.find((users)=> users.ip === ip.ip)){
    return (
      <div>
        <h1>Welcome {user[0]['nome']}</h1>
      </div>
    )
  }else{
    return (
      <div>
        <h1>Welcome Guest</h1>
      </div>
    )
  }
}
