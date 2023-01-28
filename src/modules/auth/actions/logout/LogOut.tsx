import { LockFilled } from "@ant-design/icons"
import { Button, Tooltip } from "antd"
import { PalletteEnum } from "../../../../shared/pallete/PalleteEnum"
import { useAuthContext } from "../../AuthContext"

export const LogOut = () => {
    
    const {logOut} = useAuthContext()

    return (
        <Tooltip title='Cerrar sesion'>
            <Button
                type='primary'
                icon={<LockFilled/>}
                style={{
                    position: 'absolute',
                    bottom: '0px',
                    width: '100%',
                    height: '60px',
                    backgroundColor: PalletteEnum.buttonSideSlected
                }}
                onClick={logOut}
            >
                Cerrar sesion
            </Button>
        </Tooltip>
    )
}
