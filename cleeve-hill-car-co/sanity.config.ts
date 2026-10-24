'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {vehicle} from './sanity/vehicle'
export default defineConfig({name:'default',title:'Cleeve Hill Car Co',projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'missing',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',basePath:'/studio',plugins:[structureTool()],schema:{types:[vehicle]}})
