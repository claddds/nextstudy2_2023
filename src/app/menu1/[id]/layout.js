import Menu1 from '@/app/components/menu/Menu1'
import './menu1.css'
import Menu2 from '@/app/components/menu/Menu2'
import Menu3 from '@/app/components/menu/Menu3'
// Layout은 반드시 인자(props)를 받아야 한다.
export default function Layout(props) {
    return(
        <>
            {props.params.id === '1' ? <Menu1 /> : props.params.id === '2' ? <Menu2 /> : <Menu3 />}
        </>
    )
}