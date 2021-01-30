import React from 'react'
import { Form, Button, Input } from 'antd';
import { createNote } from '../api'
import { ToastContainer, toast } from 'react-toastify';

const NoteForm = ({ form, notes, setNotes }) => {

  // const { validateFields, resetFields } = form;

  const onFinish = (values) => {
    // validateFields((err, values) => {
		console.log('--',values)
      
		createNote(values).then(res => {
			const newNotesArray = notes.concat([res])
			setNotes(newNotesArray)
			toast.success('Added Successfully')
			// resetFields()
		})
      
  }
  
  
  return (
    <Form style={{marginBottom: '25px'}} layout="horizontal" onFinish={onFinish}>
      <Form.Item name='note' rule={[]}>
          <Input
            className="note-input"
            size="large"
            placeholder="Add New Note"
          />
          <Button type="primary" htmlType="submit">Create</Button>
      </Form.Item>
  </Form>
  )
}

export default NoteForm;