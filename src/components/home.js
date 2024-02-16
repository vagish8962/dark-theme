import {useTheme} from '../hook/useDarkTheme'

function Home(params) {
    const theme = useTheme();

    console.log(theme)
    return <div>Home</div>
}
export default Home;