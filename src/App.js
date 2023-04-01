import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal';

function App() {

  const [ showModal, setShowModal ] = useState(false)

  const [ showParties, setShowParties ] = useState(true)

  const [ parties, setParty ] = useState([
    {title: 'Marios birthday party', id: 1},
    {title: 'Peachs quincinera', id: 2},
    {title: 'Yoshis coming out party', id: 3}
  ])

  const handleClick = (id) => {
    setParty((prevParties) => {
      return prevParties.filter((party) => {
        return id !== party.id
      })
    })
    console.log(`Cancelling party ${id}`)
  }

  const handleClose = () => {
    setShowModal(false)
  }


  const subtitle = 'All the latest events in Mario Kingdom'

  return (
    <div className="App">
      {showModal && (
        <Modal handleClose={ handleClose }>
          <h2>Terms and conditions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis nobis maiores ipsum iste ducimus minima aliquid unde nihil? Architecto nobis velit ratione adipisci accusamus aut ipsam, magni dicta eligendi!</p>
        </Modal>
      )}
      
      <Title title='Events in your area' subtitle={ subtitle } />
      <Title title='Book your tickets now!' subtitle='Currently sold out'/>

      { showParties && (
        <div>
          <button onClick={() => { setShowParties(false) }}>Hide parties</button>
        </div>
      )}
      { !showParties && (
        <div>
          <button onClick={() => { setShowParties(true) }}>Show parties</button>
        </div>
      )}
      <ul>
        {showParties && parties.map((party, index) => (
          <li key={ party.id }>
            <h2>{ index + 1 } - { party.title }</h2>
            <button onClick={
              () => handleClick(party.id)
            }>Cancel Party
            </button>
          </li>
        ))}
      </ul>
      <button onClick={ () => { setShowModal(true)} }>Terms and Conditions</button>

      
    </div>
  );
}

export default App;
