import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <h2>Correo</h2>
          </Form.Label>
            <Form.Control type="email" placeholder="correo@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='mt-3'>
            <h2>Descripción</h2>
          </Form.Label>
            <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
    </section>
    <article>
    <Button variant="danger" size="lg"> Enviar </Button>
    </article>
     </>
  );
}

export default Contact