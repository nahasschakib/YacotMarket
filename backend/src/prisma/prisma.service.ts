
import { PrismaClient } from '../generated/prisma/client.js';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
 extends PrismaClient
 implements OnModuleInit,OnModuleDestroy
 {

    constructor(){
        const adapter = new PrismaPg({
            connectionString:process.env.DATABASE_URL
        });
        super({adapter})
    }
    onModuleDestroy() {
        throw new Error('Method not implemented.');
    }
    async onModuleInit() {
       await this.$connect() 
    }
    async OnModuleDestroy(){
    await this.$disconnect()
    }
 }
