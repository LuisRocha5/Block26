const UserContactList = ({contactList}) => {
  return (
    <>
    <ul>
      {
        contactList.map((currentUser) => {
          return <li key={currentUser.id} className='userContactListItem'>
          <p>Name: {currentUser.name} </p> 
          <p>Email: {currentUser.email} </p>
          <p>Phone: {currentUser.phone} </p>
          </li>
        })
      }
    </ul>
    </>
  )
}

export default UserContactList;