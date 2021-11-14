import { useState } from 'react'
import { PostI } from '../interfaces/PostI'
import axios from 'axios'

const useFetch = () => {
  const [posts, setPosts] = useState<PostI[]>([])

  const getPosts = async () => {
    const apiPost = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`
    await axios.get(apiPost).then(({ data }) => {
      setPosts(data)
    })
  }

  getPosts()

  return {
    posts,
  }
}

export default useFetch
