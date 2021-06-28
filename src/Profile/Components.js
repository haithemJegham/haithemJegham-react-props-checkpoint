import Image from './Image'
import PropTypes from 'prop-types'


const data = ({fullName,bio,profession}) => {


const handleName=()=>{
    alert( fullName)
}
    return (
        <div style={{textAlign:'center'}}>
             <Image  />
            <h1>{fullName} </h1>
            <h3>{bio}</h3>
            <h3>{profession}</h3>
            <button style={{backgroundColor:'green'}}onClick={handleName}>profile Name</button>
           

        </div>
    )
}

data.defaultProps = {
    fullName:'Haithem Jegham',
    bio:38,
    profession:'Web Developer'

}

data.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.number,
    profession: PropTypes.string,
}



export default data

