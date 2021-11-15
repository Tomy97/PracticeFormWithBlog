import { Button, Table } from 'react-bootstrap'
import ModalComponent from '../components/ModalComponent'
import useFetch from '../hooks/useFetch'

const Posts = () => {
  const { posts } = useFetch()
  const openModal = (id: number) => {
    const modal = ModalComponent(id)
    console.log(modal)
  }

  return (
    <>
      <h1 className="text-center">Esta es la pagina de Posts</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Title</th>
            <th className="text-center">Body</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td className="text-center">{p.id}</td>
              <td className="text-center">{p.title}</td>
              <td className="text-center"> {p.body} </td>
              <td className="text-center">
                <Button variant="success" onClick={() => openModal(p.userId!)}>
                  Detalles
                </Button>
              </td>
              <td className="text-center">
                <Button variant="info">Comentarios</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Posts
