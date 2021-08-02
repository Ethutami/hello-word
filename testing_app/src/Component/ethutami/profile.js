import React, { PureComponent } from 'react'

export class EthutamiProfile extends PureComponent {
    render() {
        return (
            <div style={{margin:10}}>
                <p style={{color :'tomato'}} onClick={()=>alert("Ethutami's page")}>Ethutami</p>
            </div>
        )
    }
}

export default EthutamiProfile
