import React from 'react'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
function FormTarefas() {
    return (
      
        <Form>
          
        <Form.Group controlId="formData">
          <Form.Label>Data</Form.Label>
          <Form.Control type="date"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="Insira a descrição" />
        </Form.Group>
       
        <Form.Group controlId="formPrioridade">
          <Form.Label>Prioridade</Form.Label>
          <Form.Control type="text" placeholder="Insira a prioridade" />
        </Form.Group>


        <Form.Group controlId="formObservacoes">
          <Form.Label>Observações</Form.Label>
          <Form.Control type="text" placeholder="Insira a observação" />
        </Form.Group>

        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Insira o status" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    )
}

export default FormTarefas