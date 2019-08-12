import React from 'react'
import { Modal, ProgressBar } from 'react-bootstrap'

export default loading => (
  <Modal
    show={loading}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <ProgressBar animated now={100} />
    </Modal.Body>
  </Modal>
)
