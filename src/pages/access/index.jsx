import React from 'react'
import SideNav from '../../components/side-bar_access'
import ValidateLogin from '../../components/validate-login_access'
import BannerLogin from '../../components/banner-login_access'

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