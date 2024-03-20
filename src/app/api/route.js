import { NextResponse } from 'next/server'

import Post from '@/models/Post'
import dbConnect from '@/lib/db'

export const GET = async () => {
	await dbConnect()
	const data = await Post.find()

	return NextResponse.json(data)
}
