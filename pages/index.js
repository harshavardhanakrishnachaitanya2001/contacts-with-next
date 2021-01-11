import styles from '../styles/Home.module.css'
import useContactDetails from '../customHooks/useContactDetails.js'
export default function ContactInfo(){
  const {inputs,handleInputs,handleSubmit}=useContactDetails(formSubmitted);
  function formSubmitted(){
    alert("User created");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact information</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="fullName" required onChange={handleInputs} value={inputs.fullName}/><br />
        <label>Age: </label>
        <input type="number" name="correctAge" onChange={handleInputs} value={inputs.correctAge}/><br/>
        <label>Email: </label>
        <input type="email" name="userEmail" required onChange={handleInputs} value={inputs.userEmail}/><br />
        <label>Phone number: </label>
        <input type="number" name="onePhoneNumber" required onChange={handleInputs} value={inputs.onePhoneNumber}/><br />
        <label>Adress: </label>
        <input type="text" name="presentAdress" required onChange={handleInputs} value={inputs.presentAdress}/><br />
        <label>Gender: </label>
        <input type="text" name="maleOrFemale" required onChange={handleInputs} value={inputs.maleOrFemale}/><br />
        <input type="submit"/>
      </form>
    </div>
  )
}