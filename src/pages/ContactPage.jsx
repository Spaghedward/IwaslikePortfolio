import react from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  padding-top: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .contact-form {
    border: 2px solid black; 
    padding: 20px; 
    max-width: 400px;
    width: 100%;
  }

  .title {
    display: flex;
    justify-content: center;
  }
`
const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form submitted!');
};  
  
  return (
      <Styles>
        <form className='contact-form'
          action=''
          onSubmit={handleSubmit}
          method="POST"
        >
          <h2 className='title'>Contact Me</h2>
          <div className="pt-0 mb-3">
            <input className='form-control'
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <input className='form-control'
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <textarea className='form-control'
              placeholder="Your message"
              name="message"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <SubmitButton className='form-control'
              type="submit"
            >
              Send a message
            </SubmitButton>
          </div>
        </form>
        </Styles>
      );
}
