import React from 'react'
import SideNav from '../../components/side-bar'
import ValidateLogin from '../../components/validate-login'
import BannerLogin from '../../components/banner-login'

const AccessPage = (props) => {
    return (
        <div>
            <SideNav />
            <BannerLogin />
            <ValidateLogin />
        </div>
    )
}

export default AccessPage