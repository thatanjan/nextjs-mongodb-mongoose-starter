import { addPost, getPosts } from '@/actions/action'
import dbConnect from '@/lib/db'

export default async function Home() {
	await dbConnect()

	const posts = await getPosts()

	console.log(posts)

	return (
		<div>
			{posts.map(post => (
				<div key={post._id}>
					<h1>{post.title}</h1>
					<p>{post.description}</p>
				</div>
			))}
			<form action={addPost}>
				<div>
					<label>Title</label>
					<input name='title' type='text' />
				</div>
				<div>
					<label>Description</label>
					<textarea name='description' />
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}
