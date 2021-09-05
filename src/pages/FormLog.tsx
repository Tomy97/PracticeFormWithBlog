import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Toast } from '../components/SweetAlert'

const LoginForm = () => {
  const [state, setstate] = useState({
    email: '',
    password: '',
  })
  const [alertMessage, setAlertMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [hasLogin, setHasLogin] = useState(false)

  const history = useHistory()
  const valDef = {
    email: 'test@test.com',
    password: 'test',
  }

  const validator = () => {
    if (!state.email) {
      setAlertMessage('Debe ingresar un mail')
      return false
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
      setAlertMessage('El mail ingresado es invalido')
      return false
    } else if (state.email !== valDef.email) {
      setAlertMessage(
        'Por favor ingrese bien el email. Los datos son: test@test.com',
      )
      return false
    }
    if (!state.password) {
      setAlertMessage('Ingrese la contraseña, por favor')
      return false
    } else if (state.password !== valDef.password) {
      setAlertMessage(
        'Por favor ingrese bien la contraseña. Los datos de la contraseña son: test',
      )
      return false
    }
    if (state.email === valDef.email && state.password === valDef.password) {
      setSuccessMessage('Bienvenido')
    }
    return true
  }

  const handleLog = () => {
    const isValidUser = validator()
    if (isValidUser) {
      setTimeout(() => {
        setHasLogin(true)
        localStorage.setItem('loggedUser', JSON.stringify(state.email))
        history.push('/home')
      }, 2000)
    }
  }

  const checkoutValid = () => {
    if (localStorage.getItem('loggedUser')) {
      setHasLogin(true)
    } else {
      setHasLogin(false)
    }
  }

  useEffect(checkoutValid, [hasLogin])

  const onSubmitForm = (e: any) => {
    e.preventDefault()
    handleLog()
  }

  const fireAlertMessage = () => {
    alertMessage.length &&
      Toast.fire({
        icon: 'error',
        title: alertMessage,
      })
  }
  useEffect(fireAlertMessage, [alertMessage])

  const fireSuccessMessage = () => {
    successMessage.length &&
      Toast.fire({
        icon: 'success',
        title: successMessage,
      })
  }
  useEffect(fireSuccessMessage, [successMessage])

  return (
    <Row className="d-flex justify-content-center mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => setstate({ ...state, email: e.target.value })}
              value={state.email}
              placeholder="Introducir email"
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => setstate({ ...state, password: e.target.value })}
              value={state.password}
              placeholder="Introducir email"
            />
          </Form.Group>
          <Row>
            <Col md={12} className="d-flex justify-content-end">
              <Button variant="primary" className="my-2" onClick={onSubmitForm}>
                Submit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default LoginForm
