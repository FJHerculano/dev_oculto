
import AdminSecretHeader from '../../src/components/Headers/AdminSecretHeader'
import SecretHeader from '../../src/components/Headers/SecretHeader'
import Participants from '../../src/components/Participants'


export async function getServerSideProps (context){
  return {
    props:{
      participants: [],
      hasDrew: false,
      isAdmin: true,
    }
  }
}

function Secret({participants, hasDrew, isAdmin}){
  return (
  <>
    {
      isAdmin && <AdminSecretHeader/>
    }
    {
      !isAdmin && <SecretHeader/>
    }
    <Participants
        showButton ={isAdmin}
    />
  </>
  )
}

export default Secret