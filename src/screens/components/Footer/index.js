import React from 'react';
import './styles.css';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div className="footer-custom">
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
                <div className='text-center p-3' style={{ backgroundColor: '#121214' }}>
                    Desenvolvido por 
                    <a className='text-light' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer