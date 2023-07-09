import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then(res=>{
	const post = res.data
	const id = post.userId
	const title = post.title
	const body = post.body
	console.log(`
User ID: ${id}
Title: ${title}
Content: ${body}
	`)
})

