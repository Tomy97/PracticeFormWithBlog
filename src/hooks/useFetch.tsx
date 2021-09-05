import { useState } from 'react'
import { PostI } from '../interfaces/Post'
import axios from 'axios'

const useFetch = () => {
  const api: string = `https://jsonplaceholder.typicode.com/posts`
  const [posts, setPosts] = useState<PostI[]>([])

  const getPosts = async () => {
    await axios.get(api).then((res) => {
      setPosts(res.data)
    })
  }

  getPosts()

  return {
    posts,
  }
}

export default useFetch
