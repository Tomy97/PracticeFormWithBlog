import { useState } from 'react'
import { PostI } from '../interfaces/Post'
import axios from 'axios'

const useFetch = () => {
  const [posts, setPosts] = useState<PostI[]>([])

  const getPosts = async () => {
    const apiPost: string = `https://jsonplaceholder.typicode.com/posts`
    await axios.get(apiPost).then((res) => {
      setPosts(res.data)
    })
  }

  getPosts()

  return {
    posts,
  }
}

export default useFetch
