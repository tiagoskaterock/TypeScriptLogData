import axios from "axios"

interface Post {
	userId: number;
	title: string;
	body: string;
}

const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then(res=>{
	const post = res.data as Post
	const id = post.userId
	const title = post.title
	const body = post.body
	printPost(id, title, body)
})

const printPost = (id: number, title: string, body: string) => {
	console.log(`
User ID: ${id}
Title: ${title}
Content: ${body}
	`)
}
/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
